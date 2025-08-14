// Configuración de EmailJS para el formulario de contacto
// IMPORTANTE: Configura estos valores con tu cuenta de EmailJS

export const EMAILJS_CONFIG = {
  // Reemplaza estos valores con los de tu cuenta de EmailJS
  SERVICE_ID: 'service_tu_id_aqui',    // Tu SERVICE_ID de Gmail
  TEMPLATE_ID: 'template_tu_id_aqui',  // Tu TEMPLATE_ID
  PUBLIC_KEY: 'tu_clave_publica_aqui', // Tu PUBLIC_KEY
}

// Instrucciones para configurar EmailJS:
// 1. Ve a https://www.emailjs.com/ y crea una cuenta gratuita
// 2. Conecta tu servicio de email (Gmail recomendado)
// 3. Crea un template de email con las siguientes variables:
//    - {{from_name}} - Nombre del remitente
//    - {{from_email}} - Email del remitente
//    - {{company}} - Empresa (opcional)
//    - {{service}} - Servicio de interés
//    - {{message}} - Mensaje del usuario
//    - {{to_email}} - Tu email (se autocompleta)
// 4. Copia los IDs generados y reemplázalos arriba
// 5. Actualiza las referencias en Contact.tsx

/* 
EJEMPLO DE TEMPLATE DE EMAIL:

Asunto: Nuevo mensaje de contacto desde J&C Studios

Cuerpo:
Hola,

Has recibido un nuevo mensaje de contacto desde tu sitio web:

Nombre: {{from_name}}
Email: {{from_email}}
Empresa: {{company}}
Servicio de interés: {{service}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde el formulario de contacto de J&C Studios.
*/
