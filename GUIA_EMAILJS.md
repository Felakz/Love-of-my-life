# Guía de Configuración: EmailJS para Formulario de Contacto

## ¿Qué es EmailJS?
EmailJS es un servicio gratuito que permite enviar emails directamente desde tu sitio web sin necesidad de un servidor backend.

## Pasos para Configurar EmailJS

### 1. Crear cuenta en EmailJS
1. Ve a https://www.emailjs.com/
2. Haz clic en "Sign Up" y crea una cuenta gratuita
3. Confirma tu email

### 2. Conectar tu servicio de email
1. En el dashboard, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor (recomendamos Gmail)
4. Sigue las instrucciones para conectar tu email
5. **Guarda el SERVICE_ID** que te aparece

### 3. Crear template de email
1. Ve a "Email Templates" 
2. Haz clic en "Create New Template"
3. Configura el template con este contenido:

#### Asunto del email:
```
Nuevo mensaje de contacto desde J&C Studios - {{from_name}}
```

#### Cuerpo del email:
```
Hola,

Has recibido un nuevo mensaje de contacto desde tu sitio web J&C Studios:

Información del cliente:
- Nombre: {{from_name}}
- Email: {{from_email}}
- Empresa: {{company}}
- Servicio de interés: {{service}}

Mensaje:
{{message}}

---
Puedes responder directamente a este email: {{from_email}}

Este mensaje fue enviado automáticamente desde el formulario de contacto de J&C Studios.
```

4. **Guarda el TEMPLATE_ID** que te aparece

### 4. Obtener la clave pública
1. Ve a "Account" → "General"
2. Copia tu **PUBLIC_KEY**

### 5. Configurar en tu proyecto
1. Abre el archivo `src/config/emailjs.ts`
2. Reemplaza los valores:
   ```typescript
   export const EMAILJS_CONFIG = {
     SERVICE_ID: 'service_xxxxxxx',     // Tu SERVICE_ID
     TEMPLATE_ID: 'template_xxxxxxx',   // Tu TEMPLATE_ID  
     PUBLIC_KEY: 'xxxxxxxxxxxxxxxx',    // Tu PUBLIC_KEY
   }
   ```

### 6. Probar el formulario
1. Guarda los cambios
2. Ve a tu sitio web
3. Completa el formulario de contacto
4. Envía un mensaje de prueba
5. Verifica que recibas el email

## Límites del plan gratuito
- 200 emails por mes
- Suficiente para la mayoría de sitios web pequeños y medianos

## Solución de problemas

### Error: "EmailJS is not properly initialized"
- Verifica que hayas configurado correctamente los IDs en `emailjs.ts`

### No recibes emails
- Revisa tu carpeta de spam
- Verifica que el SERVICE_ID sea correcto
- Asegúrate de que el servicio de email esté activo en EmailJS

### Error 400/403
- Verifica que tu PUBLIC_KEY sea correcta
- Asegúrate de que el template exista y esté activo

## Alternativas si prefieres otra solución
1. **Formspree**: Servicio similar, muy fácil de usar
2. **Netlify Forms**: Si usas Netlify para hosting
3. **Backend propio**: Con Node.js y Nodemailer

## ¿Necesitas ayuda?
Si tienes problemas configurando EmailJS, puedes:
1. Contactarnos por WhatsApp
2. Usar temporalmente el enlace directo a email que ya está funcionando
3. Considerar una de las alternativas mencionadas

¡El formulario seguirá funcionando visualmente mientras configuras EmailJS!
