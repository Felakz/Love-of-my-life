import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Camera, Star, Sparkles, Quote, X } from 'lucide-react'
import { useState } from 'react'

const PhotoGallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null)

  // Aquí puedes cambiar las rutas de las fotos y los textos románticos
  const photos = [
    {
      id: 1,
      src: "/photos/photo1.webp", // Actualizada con ruta correcta
      alt: "Nuestro primer encuentro",
      message: "El día que cambió mi vida para siempre. Tu sonrisa iluminó mi mundo.",
      date: "Nuestro primer encuentro"
    },
    {
      id: 2,
      src: "/photos/photo2.webp", // Actualizada con ruta correcta
      alt: "Nuestra primera cita",
      message: "Cada momento contigo es mágico. Eres mi persona favorita en todo el universo.",
      date: "Nuestra primera cita"
    },
    {
      id: 3,
      src: "/photos/photo3.webp", // Actualizada con ruta correcta
      alt: "Viaje romántico",
      message: "Contigo cualquier lugar se convierte en el paraíso. Eres mi hogar.",
      date: "Nuestro viaje soñado"
    },
    {
      id: 4,
      src: "/photos/photo4.jpg", // Actualizada con ruta correcta
      alt: "Momento especial",
      message: "Tu risa es mi canción favorita, tu abrazo mi lugar seguro.",
      date: "Un momento perfecto"
    },
    {
      id: 5,
      src: "/photos/photo5.jpg", // Actualizada con ruta correcta
      alt: "Celebración",
      message: "Celebrar la vida contigo es el regalo más hermoso que tengo.",
      date: "Celebrando nuestro amor"
    },
    {
      id: 6,
      src: "/photos/photo6.jpg", // Actualizada con ruta correcta
      alt: "Atardecer juntos",
      message: "Cada paseo a tu lado es una promesa de amor eterno.",
      date: "Nuestros paseos"
    },
    {
      id: 7,
      src: "/photos/photo7.jpg", // Actualizada con ruta correcta
      alt: "Aventura",
      message: "Contigo quiero vivir mil aventuras y crear millones de recuerdos.",
      date: "Nuestra aventura"
    },
    {
      id: 8,
      src: "/photos/photo8.jpg", // Actualizada con ruta correcta
      alt: "Momento íntimo",
      message: "En tus ojos veo mi futuro, en tu corazón encuentro mi paz.",
      date: "Solo tú y yo"
    },
    {
      id: 9,
      src: "/photos/photo9.jpg", // Actualizada con ruta correcta
      alt: "Familia",
      message: "Eres mi mundo entero, mi princesa.",
      date: "Nuestra vida juntos"
    },
    {
      id: 10,
      src: "/photos/photo10.jpg", // Actualizada con ruta correcta
      alt: "Último recuerdo",
      message: "Cada nuevo día contigo es un regalo que atesoro infinitamente.",
      date: "Nuestro presente"
    }
  ]

  return (
    <section id="galeria" className="relative py-20 bg-gradient-to-br from-purple-900 via-rose-900 to-pink-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Floating hearts */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              opacity: [0.1, 0.6, 0.1],
              scale: [0.3, 1, 0.3],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Heart className="w-4 h-4 text-rose-300/30 fill-rose-300/20" />
          </motion.div>
        ))}

        {/* Sparkle effects */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="w-3 h-3 text-pink-400/40" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-6"
          >
            <Camera className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Nuestros Recuerdos
            </span>
          </h2>
          <p className="text-xl text-rose-200">
            Cada foto cuenta una historia de amor
          </p>
        </motion.div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                z: 50
              }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedPhoto(photo.id)}
            >
              {/* Photo Container */}
              <div className="relative overflow-hidden bg-white rounded-2xl shadow-xl border-4 border-white group-hover:border-rose-200 transition-all duration-300">
                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      // Fallback si la imagen no carga
                      const target = e.target as HTMLImageElement
                      target.src = `data:image/svg+xml,%3Csvg width='400' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f8fafc'/%3E%3Ctext x='50%25' y='50%25' font-size='20' text-anchor='middle' dy='.3em' fill='%2364748b'%3EFoto ${photo.id}%3C/text%3E%3C/svg%3E`
                    }}
                  />
                </div>
                
                {/* Overlay with hover effects */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-medium">
                      {photo.date}
                    </p>
                  </div>
                </div>

                {/* Floating hearts on hover */}
                <motion.div
                  className="absolute top-2 right-2 opacity-0 group-hover:opacity-100"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Heart className="w-5 h-5 text-rose-400 fill-rose-400" />
                </motion.div>

                {/* Shimmer effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                  style={{ transform: 'skewX(-20deg)' }}
                />
              </div>

              {/* Message Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className="mt-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-rose-300/20"
              >
                <div className="flex items-start space-x-3">
                  <Quote className="w-5 h-5 text-rose-400 mt-1 flex-shrink-0" />
                  <p className="text-rose-100 text-sm leading-relaxed">
                    {photo.message}
                  </p>
                </div>
                
                {/* Decorative stars */}
                <div className="flex justify-end mt-2 space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      <Star className="w-3 h-3 text-rose-400 fill-rose-400" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Modal for enlarged photo */}
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                ×
              </button>

              {/* Photo details */}
              {(() => {
                const photo = photos.find(p => p.id === selectedPhoto)
                return photo ? (
                  <div>
                    <div className="aspect-video bg-gradient-to-br from-rose-200 to-pink-300 flex items-center justify-center">
                      <div className="text-center">
                        <Camera className="w-16 h-16 text-rose-600 mx-auto mb-4" />
                        <p className="text-lg text-rose-700 font-medium">
                          {photo.date}
                        </p>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {photo.date}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {photo.message}
                      </p>
                    </div>
                  </div>
                ) : null
              })()}
            </motion.div>
          </motion.div>
        )}

        {/* Bottom message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex justify-center mb-6"
            >
              <Heart className="w-12 h-12 text-rose-400 fill-rose-400" />
            </motion.div>
            <p className="text-xl text-rose-200 leading-relaxed">
              Cada foto es un tesoro, cada recuerdo una bendición. 
              Gracias por llenar mi vida de momentos tan hermosos.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-4xl w-full bg-white rounded-3xl shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const photo = photos.find(p => p.id === selectedPhoto)
                if (!photo) return null

                return (
                  <>
                    {/* Close Button */}
                    <button
                      onClick={() => setSelectedPhoto(null)}
                      className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/90 hover:bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                    >
                      <X className="w-6 h-6 text-gray-600" />
                    </button>

                    {/* Image */}
                    <div className="relative">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-auto max-h-[70vh] object-contain"
                      />
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent h-32"></div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        <h3 className="text-2xl font-bold mb-2">{photo.date}</h3>
                        <p className="text-lg opacity-90 leading-relaxed">{photo.message}</p>
                        
                        <motion.div
                          animate={{
                            scale: [1, 1.1, 1],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="flex justify-center mt-6"
                        >
                          <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </>
                )
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default PhotoGallery
