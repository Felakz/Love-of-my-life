import { motion } from 'framer-motion'
import { ArrowUp, Heart, Star, Music, Gift, Crown } from 'lucide-react'
import { createElement } from 'react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900 relative overflow-hidden">
      {/* Romantic Background Elements */}
      <div className="absolute inset-0">
        {/* Floating hearts */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Heart className="w-3 h-3 text-rose-300/30 fill-rose-300/20" />
          </motion.div>
        ))}

        {/* Romantic sparkles */}
        {[Star, Music, Gift, Crown].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-400/10"
            style={{
              left: `${15 + (i * 20)}%`,
              top: `${15 + (i * 15)}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8 + i, repeat: Infinity }}
          >
            {createElement(Icon, { size: 24 })}
          </motion.div>
        ))}

        {/* Romantic energy orbs */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-rose-400/10 to-pink-600/10 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/10 to-rose-600/10 rounded-full"
        />

        {/* Romantic scanning beams */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-400/40 to-transparent"
          animate={{
            y: [0, 400, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="text-center">
            {/* Logo romántico */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <motion.div 
                className="inline-flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="relative w-16 h-16 bg-gradient-to-br from-rose-400/20 to-pink-600/20 rounded-full flex items-center justify-center overflow-hidden border border-rose-300/30"
                  animate={{
                    boxShadow: [
                      '0 0 0 rgba(244, 114, 182, 0)',
                      '0 0 30px rgba(244, 114, 182, 0.5)',
                      '0 0 0 rgba(244, 114, 182, 0)'
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
                  </motion.div>
                </motion.div>
                
                <motion.span 
                  className="text-3xl font-display font-bold text-white"
                  animate={{
                    textShadow: [
                      "0 0 10px rgba(244, 114, 182, 0.3)",
                      "0 0 20px rgba(244, 114, 182, 0.6)",
                      "0 0 10px rgba(244, 114, 182, 0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Nuestro Amor
                </motion.span>
              </motion.div>

              <motion.p 
                className="text-rose-200 text-lg leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Esta página web fue creada con amor como regalo de aniversario. 
                Cada detalle fue pensado para celebrar nuestro amor único y especial.
              </motion.p>
            </motion.div>

            {/* Mensaje romántico */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-rose-500/10 to-pink-600/10 backdrop-blur-sm border border-rose-300/30 rounded-2xl p-8 mb-8 relative overflow-hidden"
            >
              {/* Floating decorations */}
              <motion.div
                animate={{
                  x: [0, 20, 0],
                  y: [0, -10, 0],
                  rotate: [0, 360, 0],
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-4 right-4"
              >
                <Star className="w-6 h-6 text-rose-400/50 fill-rose-400/30" />
              </motion.div>

              <motion.div
                animate={{
                  x: [0, -15, 0],
                  y: [0, 10, 0],
                  rotate: [0, -360, 0],
                }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute bottom-4 left-4"
              >
                <Music className="w-5 h-5 text-pink-400/50" />
              </motion.div>

              <blockquote className="text-white text-xl md:text-2xl font-medium italic mb-4 relative">
                "El amor no se mira, se siente. Y lo que siento por ti es infinito."
              </blockquote>
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="flex justify-center"
              >
                <Heart className="w-8 h-8 text-rose-400 fill-rose-400" />
              </motion.div>
            </motion.div>

            {/* Información del aniversario */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
            >
              <div className="text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-3"
                >
                  <Gift className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">Regalo Especial</h3>
                <p className="text-rose-200 text-sm">
                  Creado con amor para celebrar nuestro tiempo juntos
                </p>
              </div>

              <div className="text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full mb-3"
                >
                  <Crown className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">Amor Eterno</h3>
                <p className="text-rose-200 text-sm">
                  Para la persona más especial de mi vida
                </p>
              </div>

              <div className="text-center">
                <motion.div
                  animate={{
                    rotate: [0, 360, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full mb-3"
                >
                  <Music className="w-6 h-6 text-white" />
                </motion.div>
                <h3 className="text-white font-semibold mb-2">Nuestra Canción</h3>
                <p className="text-rose-200 text-sm">
                  La melodía perfecta de nuestro amor
                </p>
              </div>
            </motion.div>

            {/* Bottom section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="border-t border-rose-300/20 pt-8"
            >
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-rose-300 flex items-center mb-4 md:mb-0">
                  Hecho con todo mi <Heart className="w-4 h-4 mx-1 text-rose-400 fill-rose-400" /> para mi amor eterno
                </p>

                {/* Scroll to Top */}
                <motion.button
                  onClick={scrollToTop}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 30px rgba(244, 114, 182, 0.6)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  {/* Button sparkle effect */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <ArrowUp className="w-5 h-5 relative z-10" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
