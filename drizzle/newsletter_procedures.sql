-- Procedimiento para suscribir nuevo usuario
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_subscribe_newsletter(
  IN p_email VARCHAR(255),
  IN p_nombre VARCHAR(255),
  IN p_tipo_mascota VARCHAR(50),
  OUT p_subscriber_id INT,
  OUT p_token VARCHAR(255)
)
BEGIN
  DECLARE v_token VARCHAR(255);
  
  -- Generar token único
  SET v_token = SHA2(CONCAT(p_email, NOW(), RAND()), 256);
  
  -- Insertar suscriptor
  INSERT INTO newsletter_subscribers (email, nombre, tipo_mascota, token_confirmacion, estado)
  VALUES (p_email, p_nombre, p_tipo_mascota, v_token, 'pendiente')
  ON DUPLICATE KEY UPDATE
    nombre = p_nombre,
    tipo_mascota = p_tipo_mascota,
    estado = 'pendiente',
    token_confirmacion = v_token;
  
  SET p_subscriber_id = LAST_INSERT_ID();
  SET p_token = v_token;
  
  -- Crear preferencias por defecto
  INSERT INTO newsletter_subscriber_preferences (subscriber_id)
  VALUES (p_subscriber_id)
  ON DUPLICATE KEY UPDATE subscriber_id = subscriber_id;
END//
DELIMITER ;

-- Procedimiento para confirmar suscripción
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_confirm_newsletter_subscription(
  IN p_token VARCHAR(255),
  OUT p_success BOOLEAN
)
BEGIN
  DECLARE v_subscriber_id INT;
  
  SELECT id INTO v_subscriber_id
  FROM newsletter_subscribers
  WHERE token_confirmacion = p_token AND estado = 'pendiente'
  LIMIT 1;
  
  IF v_subscriber_id IS NOT NULL THEN
    UPDATE newsletter_subscribers
    SET estado = 'confirmado',
        fecha_confirmacion = NOW(),
        token_confirmacion = NULL
    WHERE id = v_subscriber_id;
    
    SET p_success = TRUE;
  ELSE
    SET p_success = FALSE;
  END IF;
END//
DELIMITER ;

-- Procedimiento para desuscribirse
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_unsubscribe_newsletter(
  IN p_email VARCHAR(255),
  OUT p_success BOOLEAN
)
BEGIN
  UPDATE newsletter_subscribers
  SET estado = 'desuscrito',
      fecha_desuscripcion = NOW()
  WHERE email = p_email;
  
  SET p_success = ROW_COUNT() > 0;
END//
DELIMITER ;

-- Procedimiento para registrar apertura de email
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_record_email_open(
  IN p_email_id INT,
  IN p_subscriber_id INT,
  IN p_ip_address VARCHAR(45),
  IN p_user_agent VARCHAR(500)
)
BEGIN
  -- Actualizar email
  UPDATE newsletter_emails
  SET fecha_apertura = NOW(),
      contador_aperturas = contador_aperturas + 1
  WHERE id = p_email_id AND fecha_apertura IS NULL;
  
  -- Actualizar suscriptor
  UPDATE newsletter_subscribers
  SET contador_aperturas = contador_aperturas + 1,
      fecha_ultimo_email = NOW()
  WHERE id = p_subscriber_id;
END//
DELIMITER ;

-- Procedimiento para registrar clic en email
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_record_email_click(
  IN p_email_id INT,
  IN p_subscriber_id INT,
  IN p_url VARCHAR(500),
  IN p_tipo_cta VARCHAR(100),
  IN p_ip_address VARCHAR(45),
  IN p_user_agent VARCHAR(500)
)
BEGIN
  -- Insertar clic
  INSERT INTO newsletter_email_clicks (
    email_id, subscriber_id, url, tipo_cta, ip_address, user_agent
  ) VALUES (
    p_email_id, p_subscriber_id, p_url, p_tipo_cta, p_ip_address, p_user_agent
  );
  
  -- Actualizar email
  UPDATE newsletter_emails
  SET fecha_primer_clic = COALESCE(fecha_primer_clic, NOW()),
      contador_clics = contador_clics + 1
  WHERE id = p_email_id;
  
  -- Actualizar suscriptor
  UPDATE newsletter_subscribers
  SET contador_clics = contador_clics + 1
  WHERE id = p_subscriber_id;
END//
DELIMITER ;

-- Procedimiento para registrar conversión
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_record_newsletter_conversion(
  IN p_subscriber_id INT,
  IN p_email_id INT,
  IN p_tipo_conversion VARCHAR(100),
  IN p_descripcion VARCHAR(255),
  IN p_valor_conversion DECIMAL(10, 2)
)
BEGIN
  -- Insertar conversión
  INSERT INTO newsletter_conversions (
    subscriber_id, email_id, tipo_conversion, descripcion, valor_conversion
  ) VALUES (
    p_subscriber_id, p_email_id, p_tipo_conversion, p_descripcion, p_valor_conversion
  );
  
  -- Actualizar suscriptor
  UPDATE newsletter_subscribers
  SET contador_conversiones = contador_conversiones + 1,
      ingresos_generados = ingresos_generados + COALESCE(p_valor_conversion, 0)
  WHERE id = p_subscriber_id;
  
  -- Actualizar email si existe
  IF p_email_id IS NOT NULL THEN
    UPDATE newsletter_emails
    SET contador_clics = contador_clics + 1
    WHERE id = p_email_id;
  END IF;
END//
DELIMITER ;

-- Procedimiento para obtener suscriptores por segmento
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_get_subscribers_by_segment(
  IN p_segmento VARCHAR(50),
  IN p_estado VARCHAR(50)
)
BEGIN
  SELECT id, email, nombre, tipo_mascota, estado, fecha_suscripcion
  FROM newsletter_subscribers
  WHERE segmento = p_segmento 
    AND estado = p_estado
    AND estado != 'desuscrito'
  ORDER BY fecha_suscripcion DESC;
END//
DELIMITER ;

-- Procedimiento para actualizar estadísticas diarias
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_update_daily_statistics(
  IN p_fecha DATE
)
BEGIN
  DECLARE v_total_suscriptores INT;
  DECLARE v_suscriptores_confirmados INT;
  DECLARE v_suscriptores_desuscritos INT;
  DECLARE v_nuevos_suscriptores INT;
  DECLARE v_emails_enviados INT;
  DECLARE v_emails_abiertos INT;
  DECLARE v_emails_clics INT;
  DECLARE v_conversiones_totales INT;
  DECLARE v_ingresos_generados DECIMAL(10, 2);
  
  -- Calcular totales
  SELECT COUNT(*) INTO v_total_suscriptores
  FROM newsletter_subscribers;
  
  SELECT COUNT(*) INTO v_suscriptores_confirmados
  FROM newsletter_subscribers
  WHERE estado = 'confirmado';
  
  SELECT COUNT(*) INTO v_suscriptores_desuscritos
  FROM newsletter_subscribers
  WHERE estado = 'desuscrito';
  
  SELECT COUNT(*) INTO v_nuevos_suscriptores
  FROM newsletter_subscribers
  WHERE DATE(fecha_suscripcion) = p_fecha;
  
  SELECT COUNT(*) INTO v_emails_enviados
  FROM newsletter_emails
  WHERE DATE(fecha_envio) = p_fecha;
  
  SELECT COUNT(*) INTO v_emails_abiertos
  FROM newsletter_emails
  WHERE DATE(fecha_envio) = p_fecha AND fecha_apertura IS NOT NULL;
  
  SELECT COUNT(*) INTO v_emails_clics
  FROM newsletter_email_clicks
  WHERE DATE(fecha_clic) = p_fecha;
  
  SELECT COUNT(*) INTO v_conversiones_totales
  FROM newsletter_conversions
  WHERE DATE(fecha_conversion) = p_fecha;
  
  SELECT COALESCE(SUM(valor_conversion), 0) INTO v_ingresos_generados
  FROM newsletter_conversions
  WHERE DATE(fecha_conversion) = p_fecha;
  
  -- Insertar o actualizar estadísticas
  INSERT INTO newsletter_statistics (
    fecha, total_suscriptores, suscriptores_confirmados, suscriptores_desuscritos,
    nuevos_suscriptores, emails_enviados, emails_abiertos, emails_clics,
    conversiones_totales, ingresos_generados
  ) VALUES (
    p_fecha, v_total_suscriptores, v_suscriptores_confirmados, v_suscriptores_desuscritos,
    v_nuevos_suscriptores, v_emails_enviados, v_emails_abiertos, v_emails_clics,
    v_conversiones_totales, v_ingresos_generados
  )
  ON DUPLICATE KEY UPDATE
    total_suscriptores = v_total_suscriptores,
    suscriptores_confirmados = v_suscriptores_confirmados,
    suscriptores_desuscritos = v_suscriptores_desuscritos,
    nuevos_suscriptores = v_nuevos_suscriptores,
    emails_enviados = v_emails_enviados,
    emails_abiertos = v_emails_abiertos,
    emails_clics = v_emails_clics,
    conversiones_totales = v_conversiones_totales,
    ingresos_generados = v_ingresos_generados;
END//
DELIMITER ;

-- Procedimiento para obtener métricas de suscriptor
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_get_subscriber_metrics(
  IN p_subscriber_id INT
)
BEGIN
  SELECT 
    s.id,
    s.email,
    s.nombre,
    s.tipo_mascota,
    s.estado,
    s.fecha_suscripcion,
    s.contador_aperturas,
    s.contador_clics,
    s.contador_conversiones,
    s.ingresos_generados,
    COUNT(DISTINCT e.id) as total_emails_recibidos,
    COUNT(DISTINCT CASE WHEN e.fecha_apertura IS NOT NULL THEN e.id END) as emails_abiertos,
    COUNT(DISTINCT c.id) as total_conversiones
  FROM newsletter_subscribers s
  LEFT JOIN newsletter_emails e ON s.id = e.subscriber_id
  LEFT JOIN newsletter_conversions c ON s.id = c.subscriber_id
  WHERE s.id = p_subscriber_id
  GROUP BY s.id;
END//
DELIMITER ;

-- Procedimiento para limpiar datos antiguos
DELIMITER //
CREATE PROCEDURE IF NOT EXISTS sp_cleanup_old_newsletter_data(
  IN p_dias_retencion INT
)
BEGIN
  DELETE FROM newsletter_email_clicks
  WHERE fecha_clic < DATE_SUB(NOW(), INTERVAL p_dias_retencion DAY)
    AND email_id NOT IN (
      SELECT id FROM newsletter_emails
      WHERE subscriber_id IN (
        SELECT id FROM newsletter_subscribers
        WHERE estado = 'confirmado'
      )
    );
  
  DELETE FROM newsletter_emails
  WHERE fecha_envio < DATE_SUB(NOW(), INTERVAL p_dias_retencion DAY)
    AND subscriber_id NOT IN (
      SELECT id FROM newsletter_subscribers
      WHERE estado = 'confirmado'
    );
END//
DELIMITER ;
