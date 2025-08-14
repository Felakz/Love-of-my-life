# 💕 Página Web Romántica de Aniversario

¡Felicidades! Has transformado tu página web empresarial en una hermosa página romántica para celebrar tu aniversario. 

## 🎯 Personalización de Contenido

### 📝 1. Personalizar la Carta de Amor

**Archivo:** `src/sections/LoveLetter.tsx`

Busca las siguientes secciones para personalizar:

```tsx
// Línea 98: Nombre de tu pareja
Mi querido/a [NOMBRE DE TU PAREJA],

// Línea 120-127: Mensaje principal personalizable
[AQUÍ PUEDES PERSONALIZAR CON TUS PROPIAS PALABRAS]

// Línea 156: Tu nombre
[TU NOMBRE]
```

**Reemplaza:**
- `[NOMBRE DE TU PAREJA]` con el nombre real
- `[AQUÍ PUEDES PERSONALIZAR...]` con tu mensaje personal
- `[TU NOMBRE]` con tu nombre real

### 📸 2. Agregar tus Fotos

**Carpeta:** `public/photos/`

1. Agrega hasta 10 fotos con los nombres:
   - `photo1.jpg` hasta `photo10.jpg`
   
2. **Personalizar mensajes de fotos** en `src/sections/PhotoGallery.tsx`:

```tsx
const photos = [
  {
    id: 1,
    src: "/photos/photo1.jpg", // ✅ Ya está configurado
    message: "Tu mensaje romántico aquí", // ❌ Personaliza esto
    date: "Descripción de la foto" // ❌ Personaliza esto
  },
  // ... más fotos
]
```

### 🎵 3. Agregar tu Música

**Carpeta:** `public/music/`

1. Convierte tu archivo M4A a MP3 (recomendado para compatibilidad)
2. Guarda el archivo como: `love-song.mp3`
3. Si quieres mantener M4A, renómbralo a: `love-song.m4a`

**El reproductor ya está configurado para buscar:**
- `love-song.m4a`
- `love-song.mp3`

### 🎨 4. Personalizar Colores (Opcional)

**Archivo:** `tailwind.config.js`

Los colores actuales son rosa/rojo románticos. Si quieres cambiarlos:

```js
romantic: {
  // Cambia estos valores por otros colores
  400: '#f87171', // Color principal
  500: '#ef4444', // Color secundario
  600: '#dc2626', // Color más oscuro
}
```

### 🏠 5. Personalizar el Título del Hero

**Archivo:** `src/sections/Hero.tsx`

```tsx
// Línea 207: Cambiar "Para mi"
Para mi{' '}

// Línea 218: Cambiar "Amor Eterno"
Amor Eterno

// Línea 268: Cambiar el subtítulo
Cada momento contigo es una melodía perfecta que nunca quiero que termine
```

## 🚀 Instrucciones de Uso

### Estructura de Archivos
```
public/
├── photos/          # Tus 10 fotos (photo1.jpg - photo10.jpg)
├── music/           # Tu canción (love-song.mp3 o love-song.m4a)
└── ...

src/
├── sections/
│   ├── Hero.tsx          # Página principal romántica
│   ├── LoveLetter.tsx    # Sección de carta de amor
│   └── PhotoGallery.tsx  # Galería de fotos
└── components/
    └── BackgroundMusic.tsx # Reproductor de música
```

### Pasos para Personalizar:

1. **Reemplaza las fotos:**
   - Copia tus 10 fotos favoritas a `public/photos/`
   - Renómbralas: `photo1.jpg`, `photo2.jpg`, etc.

2. **Agrega tu música:**
   - Copia tu canción a `public/music/love-song.mp3`

3. **Personaliza los textos:**
   - Edita `src/sections/LoveLetter.tsx` con tu carta personal
   - Edita `src/sections/PhotoGallery.tsx` con los mensajes de cada foto

4. **Ejecuta la página:**
   ```bash
   npm run dev
   ```

## 💡 Consejos de Personalización

### Para las Fotos:
- Usa fotos de alta calidad (mínimo 800x800px)
- Formatos recomendados: JPG, PNG
- Mantén un tamaño similar en todas las fotos

### Para la Música:
- Duración recomendada: 3-5 minutos
- Formato MP3 para mejor compatibilidad
- Volumen moderado (no muy alto)

### Para los Textos:
- Sé personal y auténtico
- Mantén un tono consistente
- Revisa la ortografía antes de publicar

## 🎁 Funcionalidades Románticas

✨ **Animaciones de corazones flotantes**
🎵 **Reproductor de música de fondo**
💌 **Carta de amor animada**
📸 **Galería de fotos con mensajes personales**
⭐ **Efectos de partículas románticas**
🌙 **Navegación suave entre secciones**

## 🛠️ Comandos Útiles

```bash
# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 💝 ¡Disfruta tu Regalo!

Esta página web ha sido diseñada con mucho amor para crear un regalo único y especial. Cada animación, cada color y cada detalle está pensado para celebrar vuestro amor.

¡Que tengan un aniversario maravilloso! 💕
