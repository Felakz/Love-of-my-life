import { motion, AnimatePresence } from 'framer-motion'
import { Heart, Mail, X, Sparkles, Gift, Star } from 'lucide-react'
import { useState, useEffect } from 'react'

const SurpriseLetters = () => {
  const [openLetter, setOpenLetter] = useState<number | null>(null)

  // Cartas sorpresa personalizables
  const letters = [
    {
      id: 1,
      title: "Razones por las que te amo",
      color: "from-rose-400 to-pink-500",
      textColor: "text-rose-700",
      content: `Mi amor querido,

Te amo porque...

🌟 Tu sonrisa ilumina incluso mis días más oscuros
🌟 Tu risa es la melodía más hermosa que he escuchado
🌟 Tienes la capacidad de hacerme sentir especial con una simple mirada
🌟 Tu corazón generoso siempre piensa en los demás
🌟 Me haces sentir como la persona más afortunada del mundo
🌟 Cada día a tu lado es una nueva aventura
🌟 Tu abrazo es mi lugar favorito en todo el universo
🌟 Me amas tal como soy, con todas mis imperfecciones

Eres mi hogar, mi paz, mi felicidad.

Con todo mi amor,
Dario`,
      icon: Heart,
      decorativeEmoji: "💕"
    },
    {
      id: 2,
      title: "Nuestros recuerdos favoritos",
      color: "from-purple-400 to-pink-500",
      textColor: "text-purple-700",
      content: `Mi amor,

Estos son algunos de mis recuerdos favoritos contigo:

🌟 Nuestra primera cita (¡estaba tan nervioso!)
🌟 El día que me dijiste que me amabas
🌟 Nuestro primer paseo juntos
🌟 Las noches de películas que no las terminamos (la de la soda pop)
🌟 Cuando jugamos juntos y todo salió mal... ¡pero nos reímos tanto!
🌟 Nuestros paseos juntitos
🌟 Las conversaciones hasta altas horas de la madrugada
🌟 El día que conociste a mi familia y yo a la tuya
🌟 Cuando me sorprendiste en mi cumpleaños
🌟 Cada "buenos días" y "buenas noches"

Cada momento contigo se convierte en un recuerdo precioso.

Eternamente tuyo,
Dario`,
      icon: Star,
      decorativeEmoji: "🌟"
    },
    {
      id: 3,
      title: "Promesas de amor",
      color: "from-pink-400 to-rose-600",
      textColor: "text-pink-700",
      content: `Mi vida, mi amor,

Te prometo que...

💝 Siempre estaré aquí para ti, en las buenas y en las malas
💝 Te amaré más cada día que pase
💝 Haré todo lo posible por hacerte feliz
💝 Respetaré tus sueños y te apoyaré para alcanzarlos
💝 Cuidaré de tu corazón como el tesoro más preciado
💝 Seguiremos creando memorias hermosas juntos
💝 Te escucharé siempre con el corazón abierto
💝 Celebraré cada uno de tus logros como si fueran míos
💝 Construiremos un futuro lleno de amor y risas
💝 Mi amor por ti será para siempre

Estas promesas las hago desde lo más profundo de mi corazón.

Para siempre tuyo,
Dario`,
      icon: Gift,
      decorativeEmoji: "💝"
    }
  ]

  const openLetterModal = (letterId: number) => {
    setOpenLetter(letterId)
  }

  const closeLetter = () => {
    setOpenLetter(null)
  }

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && openLetter) {
        closeLetter()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [openLetter])

  return (
    <section className="relative py-20 bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Floating sparkles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="w-3 h-3 text-pink-400/60" />
          </motion.div>
        ))}

        {/* Floating envelopes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`envelope-${i}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Mail className="w-6 h-6 text-rose-300/30" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full mb-6"
          >
            <Heart className="w-8 h-8 text-white fill-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Love of My Life
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tres cartas especiales llenas de amor, escritas desde el corazón 
            solo para ti. Cada una guarda sentimientos únicos y especiales.
          </p>
        </motion.div>

        {/* Letters Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {letters.map((letter, index) => (
            <motion.div
              key={letter.id}
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
              className="relative group cursor-pointer"
              onClick={() => openLetterModal(letter.id)}
            >
              {/* Envelope container */}
              <div className="relative perspective-1000">
                {/* Envelope back */}
                <div className={`relative overflow-hidden bg-gradient-to-br ${letter.color} rounded-3xl p-8 shadow-2xl border-2 border-white/20`}>
                  {/* Shimmer effect */}
                  <motion.div
                    animate={{
                      x: ['-100%', '100%'],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: index * 1
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                  />

                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-4 left-4">
                      <Heart className="w-8 h-8 text-white/50" />
                    </div>
                    <div className="absolute top-4 right-4">
                      <Heart className="w-6 h-6 text-white/30" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Heart className="w-4 h-4 text-white/40" />
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <Heart className="w-10 h-10 text-white/20" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center text-white">
                    {/* Floating icon */}
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="flex justify-center mb-6"
                    >
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <letter.icon className="w-10 h-10 text-white" />
                      </div>
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 drop-shadow-lg">
                      {letter.title}
                    </h3>

                    {/* Decorative emoji */}
                    <motion.div
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-4xl mb-4"
                    >
                      {letter.decorativeEmoji}
                    </motion.div>

                    {/* Call to action */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="font-medium">Abrir carta</span>
                    </motion.div>

                    {/* Floating hearts on hover */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [0, -30],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                          className="absolute"
                          style={{
                            left: `${20 + i * 12}%`,
                            top: '80%',
                          }}
                        >
                          <Heart className="w-4 h-4 text-white/70 fill-white/50" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Romantic message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/70 backdrop-blur-sm border border-pink-200 rounded-3xl p-8 max-w-3xl mx-auto">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="flex justify-center mb-4"
            >
              <Heart className="w-12 h-12 text-rose-500 fill-rose-500" />
            </motion.div>
            
            <blockquote className="text-lg md:text-xl text-gray-700 italic">
              "Cada carta que he escrito para ti está llena de los sentimientos más puros de mi corazón. 
              Espero que al leerlas sientas todo el amor que tengo por ti."
            </blockquote>
          </div>
        </motion.div>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {openLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation()
              closeLetter()
            }}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-2xl w-full bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl shadow-2xl overflow-hidden border-2 border-amber-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Paper texture overlay */}
              <div className="absolute inset-0 opacity-30">
                <div 
                  className="w-full h-full"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4af37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  closeLetter()
                }}
                className="absolute top-4 right-4 z-50 w-12 h-12 bg-white/90 hover:bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 hover:border-rose-400"
              >
                <X className="w-6 h-6 text-gray-700 hover:text-rose-600" />
              </button>

              {/* Letter content */}
              <div className="relative z-10 p-8 md:p-12">
                {(() => {
                  const letter = letters.find(l => l.id === openLetter)
                  if (!letter) return null

                  return (
                    <>
                      {/* Header */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-center mb-8"
                      >
                        <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${letter.color} rounded-full mb-4`}>
                          <letter.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className={`text-3xl font-bold ${letter.textColor} mb-2`}>
                          {letter.title}
                        </h3>
                        <div className="text-4xl">
                          {letter.decorativeEmoji}
                        </div>
                      </motion.div>

                      {/* Content */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="prose prose-lg max-w-none"
                      >
                        <div className="text-gray-800 leading-relaxed whitespace-pre-line text-center md:text-left">
                          {letter.content}
                        </div>
                      </motion.div>

                      {/* Decorative elements */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, type: "spring" }}
                        className="flex justify-center mt-8"
                      >
                        <div className="flex space-x-2">
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              animate={{
                                scale: [1, 1.2, 1],
                                rotate: [0, 180, 360],
                              }}
                              transition={{ 
                                duration: 2, 
                                repeat: Infinity, 
                                delay: i * 0.3
                              }}
                            >
                              <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </>
                  )
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default SurpriseLetters
