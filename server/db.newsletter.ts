import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'fontfreda',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const database = {
  async execute(query: string, params: any[] = []) {
    const connection = await pool.getConnection();
    try {
      const [results] = await connection.execute(query, params);
      return results;
    } finally {
      connection.release();
    }
  },
};

export const newsletterDb = {
  /**
   * Crear nuevo suscriptor
   */
  async createSubscriber(data: {
    email: string;
    nombre: string;
    tipoMascota: 'perro' | 'gato' | 'ambos';
    tokenConfirmacion: string;
  }) {
    const result = await database.execute(
      `INSERT INTO newsletter_subscribers (email, nombre, tipo_mascota, token_confirmacion, estado)
       VALUES (?, ?, ?, ?, 'pendiente')
       ON DUPLICATE KEY UPDATE
       nombre = VALUES(nombre),
       tipo_mascota = VALUES(tipo_mascota),
       token_confirmacion = VALUES(token_confirmacion),
       estado = 'pendiente'`,
      [data.email, data.nombre, data.tipoMascota, data.tokenConfirmacion]
    );

    // Crear preferencias por defecto
    await database.execute(
      `INSERT INTO newsletter_subscriber_preferences (subscriber_id)
       SELECT id FROM newsletter_subscribers WHERE email = ?
       ON DUPLICATE KEY UPDATE subscriber_id = subscriber_id`,
      [data.email]
    );

    return result;
  },

  /**
   * Confirmar suscripción
   */
  async confirmSubscription(token: string) {
    const result = await database.execute(
      `UPDATE newsletter_subscribers
       SET estado = 'confirmado', fecha_confirmacion = NOW(), token_confirmacion = NULL
       WHERE token_confirmacion = ? AND estado = 'pendiente'`,
      [token]
    );

    return result.affectedRows > 0;
  },

  /**
   * Obtener suscriptor por email
   */
  async getSubscriberByEmail(email: string) {
    const result = await database.execute(
      `SELECT * FROM newsletter_subscribers WHERE email = ?`,
      [email]
    );

    return result[0] || null;
  },

  /**
   * Obtener suscriptor por ID
   */
  async getSubscriberById(id: number) {
    const result = await database.execute(
      `SELECT * FROM newsletter_subscribers WHERE id = ?`,
      [id]
    );

    return result[0] || null;
  },

  /**
   * Desuscribir
   */
  async unsubscribe(email: string) {
    const result = await database.execute(
      `UPDATE newsletter_subscribers
       SET estado = 'desuscrito', fecha_desuscripcion = NOW()
       WHERE email = ?`,
      [email]
    );

    return result.affectedRows > 0;
  },

  /**
   * Obtener suscriptores confirmados
   */
  async getConfirmedSubscribers(limit = 100, offset = 0) {
    const result = await database.execute(
      `SELECT * FROM newsletter_subscribers
       WHERE estado = 'confirmado'
       LIMIT ? OFFSET ?`,
      [limit, offset]
    );

    return result;
  },

  /**
   * Obtener suscriptores por tipo de mascota
   */
  async getSubscribersByPetType(tipoMascota: string, limit = 100, offset = 0) {
    const result = await database.execute(
      `SELECT * FROM newsletter_subscribers
       WHERE tipo_mascota = ? AND estado = 'confirmado'
       LIMIT ? OFFSET ?`,
      [tipoMascota, limit, offset]
    );

    return result;
  },

  /**
   * Contar suscriptores
   */
  async countSubscribers(estado?: string) {
    let query = 'SELECT COUNT(*) as count FROM newsletter_subscribers';
    const params: any[] = [];

    if (estado) {
      query += ' WHERE estado = ?';
      params.push(estado);
    }

    const result = await database.execute(query, params);
    return result[0]?.count || 0;
  },

  /**
   * Actualizar preferencias
   */
  async updatePreferences(
    subscriberId: number,
    preferences: {
      frecuencia_emails?: string;
      recibir_promociones?: boolean;
      recibir_contenido_educativo?: boolean;
      recibir_actualizaciones?: boolean;
    }
  ) {
    const updates: string[] = [];
    const params: any[] = [];

    if (preferences.frecuencia_emails !== undefined) {
      updates.push('frecuencia_emails = ?');
      params.push(preferences.frecuencia_emails);
    }
    if (preferences.recibir_promociones !== undefined) {
      updates.push('recibir_promociones = ?');
      params.push(preferences.recibir_promociones ? 1 : 0);
    }
    if (preferences.recibir_contenido_educativo !== undefined) {
      updates.push('recibir_contenido_educativo = ?');
      params.push(preferences.recibir_contenido_educativo ? 1 : 0);
    }
    if (preferences.recibir_actualizaciones !== undefined) {
      updates.push('recibir_actualizaciones = ?');
      params.push(preferences.recibir_actualizaciones ? 1 : 0);
    }

    if (updates.length === 0) {
      return { affectedRows: 0 };
    }

    params.push(subscriberId);

    const query = `UPDATE newsletter_subscriber_preferences
                   SET ${updates.join(', ')}
                   WHERE subscriber_id = ?`;

    return await database.execute(query, params);
  },

  /**
   * Obtener preferencias
   */
  async getPreferences(subscriberId: number) {
    const result = await database.execute(
      `SELECT * FROM newsletter_subscriber_preferences WHERE subscriber_id = ?`,
      [subscriberId]
    );

    return result[0] || null;
  },

  /**
   * Registrar conversión
   */
  async recordConversion(subscriberId: number, tipoConversion: string, valor?: number) {
    const result = await database.execute(
      `UPDATE newsletter_subscribers
       SET contador_conversiones = contador_conversiones + 1,
           ingresos_generados = ingresos_generados + ?
       WHERE id = ?`,
      [valor || 0, subscriberId]
    );

    return result;
  },

  /**
   * Obtener estadísticas mensuales
   */
  async getMonthlyStats(mes: number, año: number) {
    const startDate = `${año}-${String(mes).padStart(2, '0')}-01`;
    const endDate = new Date(año, mes, 0).toISOString().split('T')[0];

    const result = await database.execute(
      `SELECT 
        COUNT(*) as total_suscriptores,
        SUM(CASE WHEN estado = 'confirmado' THEN 1 ELSE 0 END) as confirmados,
        SUM(CASE WHEN estado = 'desuscrito' THEN 1 ELSE 0 END) as desuscritos,
        SUM(CASE WHEN DATE(fecha_suscripcion) BETWEEN ? AND ? THEN 1 ELSE 0 END) as nuevos,
        SUM(contador_conversiones) as conversiones_totales,
        SUM(ingresos_generados) as ingresos_totales
       FROM newsletter_subscribers
       WHERE DATE(fecha_suscripcion) <= ?`,
      [startDate, endDate, endDate]
    );

    return result[0] || {};
  },
};
