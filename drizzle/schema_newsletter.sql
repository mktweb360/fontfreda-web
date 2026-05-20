-- Tabla de Suscriptores de Newsletter
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  nombre VARCHAR(255) NOT NULL,
  tipo_mascota ENUM('perro', 'gato', 'ambos') NOT NULL DEFAULT 'perro',
  estado ENUM('pendiente', 'confirmado', 'desuscrito') NOT NULL DEFAULT 'pendiente',
  segmento VARCHAR(50) NOT NULL DEFAULT 'general',
  token_confirmacion VARCHAR(255) UNIQUE,
  fecha_suscripcion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_confirmacion TIMESTAMP NULL,
  fecha_desuscripcion TIMESTAMP NULL,
  fecha_ultimo_email TIMESTAMP NULL,
  contador_aperturas INT DEFAULT 0,
  contador_clics INT DEFAULT 0,
  contador_conversiones INT DEFAULT 0,
  ingresos_generados DECIMAL(10, 2) DEFAULT 0.00,
  metadata JSON,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_email (email),
  INDEX idx_estado (estado),
  INDEX idx_tipo_mascota (tipo_mascota),
  INDEX idx_segmento (segmento),
  INDEX idx_fecha_suscripcion (fecha_suscripcion)
);

-- Tabla de Emails Enviados
CREATE TABLE IF NOT EXISTS newsletter_emails (
  id INT PRIMARY KEY AUTO_INCREMENT,
  subscriber_id INT NOT NULL,
  tipo_email VARCHAR(50) NOT NULL,
  asunto VARCHAR(255) NOT NULL,
  contenido LONGTEXT NOT NULL,
  fecha_envio TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_apertura TIMESTAMP NULL,
  fecha_primer_clic TIMESTAMP NULL,
  contador_aperturas INT DEFAULT 0,
  contador_clics INT DEFAULT 0,
  estado ENUM('enviado', 'rebotado', 'spam', 'entregado') NOT NULL DEFAULT 'enviado',
  metadata JSON,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  FOREIGN KEY (subscriber_id) REFERENCES newsletter_subscribers(id) ON DELETE CASCADE,
  INDEX idx_subscriber_id (subscriber_id),
  INDEX idx_tipo_email (tipo_email),
  INDEX idx_fecha_envio (fecha_envio),
  INDEX idx_estado (estado)
);

-- Tabla de Clics en Emails
CREATE TABLE IF NOT EXISTS newsletter_email_clicks (
  id INT PRIMARY KEY AUTO_INCREMENT,
  email_id INT NOT NULL,
  subscriber_id INT NOT NULL,
  url VARCHAR(500) NOT NULL,
  tipo_cta VARCHAR(100),
  fecha_clic TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ip_address VARCHAR(45),
  user_agent VARCHAR(500),
  
  FOREIGN KEY (email_id) REFERENCES newsletter_emails(id) ON DELETE CASCADE,
  FOREIGN KEY (subscriber_id) REFERENCES newsletter_subscribers(id) ON DELETE CASCADE,
  INDEX idx_email_id (email_id),
  INDEX idx_subscriber_id (subscriber_id),
  INDEX idx_fecha_clic (fecha_clic)
);

-- Tabla de Conversiones desde Newsletter
CREATE TABLE IF NOT EXISTS newsletter_conversions (
  id INT PRIMARY KEY AUTO_INCREMENT,
  subscriber_id INT NOT NULL,
  email_id INT,
  tipo_conversion VARCHAR(100) NOT NULL,
  descripcion VARCHAR(255),
  valor_conversion DECIMAL(10, 2),
  fecha_conversion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  referencia_externa VARCHAR(255),
  metadata JSON,
  
  FOREIGN KEY (subscriber_id) REFERENCES newsletter_subscribers(id) ON DELETE CASCADE,
  FOREIGN KEY (email_id) REFERENCES newsletter_emails(id) ON DELETE SET NULL,
  INDEX idx_subscriber_id (subscriber_id),
  INDEX idx_tipo_conversion (tipo_conversion),
  INDEX idx_fecha_conversion (fecha_conversion)
);

-- Tabla de Plantillas de Email
CREATE TABLE IF NOT EXISTS newsletter_templates (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL UNIQUE,
  tipo VARCHAR(50) NOT NULL,
  asunto_template VARCHAR(255) NOT NULL,
  preheader_template VARCHAR(255),
  contenido_html LONGTEXT NOT NULL,
  contenido_texto LONGTEXT,
  variables_disponibles JSON,
  estado ENUM('activo', 'inactivo', 'borrador') NOT NULL DEFAULT 'borrador',
  fecha_creacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_tipo (tipo),
  INDEX idx_estado (estado)
);

-- Tabla de Campañas de Email
CREATE TABLE IF NOT EXISTS newsletter_campaigns (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  template_id INT NOT NULL,
  segmento_destino VARCHAR(50),
  asunto VARCHAR(255) NOT NULL,
  preheader VARCHAR(255),
  contenido_html LONGTEXT NOT NULL,
  fecha_programada TIMESTAMP,
  fecha_envio TIMESTAMP,
  fecha_completado TIMESTAMP,
  estado ENUM('borrador', 'programado', 'enviando', 'enviado', 'cancelado') NOT NULL DEFAULT 'borrador',
  total_destinatarios INT DEFAULT 0,
  total_enviados INT DEFAULT 0,
  total_abiertos INT DEFAULT 0,
  total_clics INT DEFAULT 0,
  total_conversiones INT DEFAULT 0,
  ingresos_generados DECIMAL(10, 2) DEFAULT 0.00,
  metadata JSON,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  FOREIGN KEY (template_id) REFERENCES newsletter_templates(id) ON DELETE RESTRICT,
  INDEX idx_estado (estado),
  INDEX idx_fecha_programada (fecha_programada),
  INDEX idx_fecha_envio (fecha_envio)
);

-- Tabla de Flujos de Automatización
CREATE TABLE IF NOT EXISTS newsletter_automation_flows (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(255) NOT NULL UNIQUE,
  descripcion TEXT,
  tipo_trigger VARCHAR(100) NOT NULL,
  condiciones JSON,
  emails_secuencia JSON NOT NULL,
  estado ENUM('activo', 'inactivo', 'pausado') NOT NULL DEFAULT 'activo',
  total_activaciones INT DEFAULT 0,
  total_conversiones INT DEFAULT 0,
  ingresos_generados DECIMAL(10, 2) DEFAULT 0.00,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_tipo_trigger (tipo_trigger),
  INDEX idx_estado (estado)
);

-- Tabla de Activaciones de Flujos
CREATE TABLE IF NOT EXISTS newsletter_automation_activations (
  id INT PRIMARY KEY AUTO_INCREMENT,
  flow_id INT NOT NULL,
  subscriber_id INT NOT NULL,
  paso_actual INT DEFAULT 0,
  estado ENUM('activo', 'completado', 'cancelado') NOT NULL DEFAULT 'activo',
  fecha_inicio TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  fecha_completado TIMESTAMP,
  metadata JSON,
  
  FOREIGN KEY (flow_id) REFERENCES newsletter_automation_flows(id) ON DELETE CASCADE,
  FOREIGN KEY (subscriber_id) REFERENCES newsletter_subscribers(id) ON DELETE CASCADE,
  INDEX idx_flow_id (flow_id),
  INDEX idx_subscriber_id (subscriber_id),
  INDEX idx_estado (estado),
  UNIQUE KEY unique_flow_subscriber (flow_id, subscriber_id)
);

-- Tabla de Preferencias de Suscriptor
CREATE TABLE IF NOT EXISTS newsletter_subscriber_preferences (
  id INT PRIMARY KEY AUTO_INCREMENT,
  subscriber_id INT NOT NULL UNIQUE,
  frecuencia_emails ENUM('diaria', 'dos_veces_semana', 'semanal', 'quincenal', 'mensual') NOT NULL DEFAULT 'dos_veces_semana',
  recibir_promociones BOOLEAN DEFAULT TRUE,
  recibir_contenido_educativo BOOLEAN DEFAULT TRUE,
  recibir_actualizaciones BOOLEAN DEFAULT TRUE,
  recibir_testimonios BOOLEAN DEFAULT TRUE,
  recibir_ofertas_especiales BOOLEAN DEFAULT TRUE,
  zona_horaria VARCHAR(50),
  dia_preferido_envio VARCHAR(20),
  hora_preferida_envio TIME,
  metadata JSON,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  FOREIGN KEY (subscriber_id) REFERENCES newsletter_subscribers(id) ON DELETE CASCADE,
  INDEX idx_subscriber_id (subscriber_id)
);

-- Tabla de Estadísticas Agregadas
CREATE TABLE IF NOT EXISTS newsletter_statistics (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fecha DATE NOT NULL UNIQUE,
  total_suscriptores INT DEFAULT 0,
  suscriptores_confirmados INT DEFAULT 0,
  suscriptores_desuscritos INT DEFAULT 0,
  nuevos_suscriptores INT DEFAULT 0,
  emails_enviados INT DEFAULT 0,
  emails_abiertos INT DEFAULT 0,
  emails_clics INT DEFAULT 0,
  emails_rebotados INT DEFAULT 0,
  conversiones_totales INT DEFAULT 0,
  ingresos_generados DECIMAL(10, 2) DEFAULT 0.00,
  tasa_apertura_promedio DECIMAL(5, 2) DEFAULT 0.00,
  tasa_clics_promedio DECIMAL(5, 2) DEFAULT 0.00,
  tasa_conversion_promedio DECIMAL(5, 2) DEFAULT 0.00,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  
  INDEX idx_fecha (fecha)
);

-- Índices adicionales para optimización de queries
CREATE INDEX idx_newsletter_subscribers_email_estado ON newsletter_subscribers(email, estado);
CREATE INDEX idx_newsletter_emails_subscriber_fecha ON newsletter_emails(subscriber_id, fecha_envio);
CREATE INDEX idx_newsletter_conversions_subscriber_fecha ON newsletter_conversions(subscriber_id, fecha_conversion);
