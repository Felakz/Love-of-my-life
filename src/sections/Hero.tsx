import { motion } from 'framer-motion'
import { Heart, Sparkles, Star, Music, Gift, Crown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-900 via-pink-900 to-purple-900">
      {/* Background Animation */}
      <div className="absolute inset-0">
        {/* Romantic gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/50 via-pink-900/50 to-purple-900/50"></div>
        
        {/* Floating hearts pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(244, 114, 182, 0.3) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
          
          {/* Animated romantic lines */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-rose-400/40 to-transparent"
          />
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent"
          />
        </div>

        {/* Floating hearts */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 6,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            className="absolute"
          >
            <Heart className="w-4 h-4 text-rose-400 fill-rose-400" />
          </motion.div>
        ))}

        {/* Romantic floating elements */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full opacity-30 blur-xl flex items-center justify-center"
        >
          <Heart className="w-10 h-10 text-white/60 fill-white/60" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full opacity-25 blur-xl flex items-center justify-center"
        >
          <Crown className="w-14 h-14 text-white/50" />
        </motion.div>
        
        {/* Additional romantic elements */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -25, 0],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-25 blur-lg flex items-center justify-center"
        >
          <Sparkles className="w-8 h-8 text-white/60" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 20, 0],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/4 w-28 h-28 bg-gradient-to-br from-pink-400 to-rose-600 rounded-full opacity-20 blur-lg flex items-center justify-center"
        >
          <Gift className="w-10 h-10 text-white/50" />
        </motion.div>

        {/* Romantic energy rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0, 5, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 2.5,
              ease: "easeOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-rose-400/30 rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Romantic Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500/10 to-pink-600/10 border border-rose-500/30 rounded-full text-rose-300 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(244, 114, 182, 0.4)",
                  "0 0 40px rgba(244, 114, 182, 0.7)",
                  "0 0 20px rgba(244, 114, 182, 0.4)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-rose-400/50"
            />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0] 
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Heart className="w-4 h-4 mr-2 fill-rose-400 text-rose-400" />
            </motion.div>
            <span className="relative z-10">Nuestro Amor Eterno</span>
            <motion.div
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-4 h-4 ml-2 text-rose-400 fill-rose-400" />
            </motion.div>
            
            {/* Floating sparkles around badge */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.cos(i * 45 * Math.PI / 180) * 25],
                  y: [0, Math.sin(i * 45 * Math.PI / 180) * 25],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                className="absolute w-1 h-1 bg-rose-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
              />
            ))}
          </motion.div>

          {/* Romantic Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 relative"
          >
            <span className="relative">
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255, 255, 255, 0.5)",
                    "0 0 20px rgba(255, 255, 255, 0.8)",
                    "0 0 10px rgba(255, 255, 255, 0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Para mi{' '}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 bg-clip-text text-transparent relative"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Amor Eterno
                {/* Floating hearts around title */}
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.5, 0.5],
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-4 -right-4"
                >
                  <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
                </motion.div>
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.3, 1.2, 0.3],
                    x: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8
                  }}
                  className="absolute -top-2 -left-3"
                >
                  <Heart className="w-4 h-4 text-pink-300 fill-pink-300" />
                </motion.div>
              </motion.span>
              
              {/* Sparkle effect */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.5, 0],
                  rotate: [0, 180, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
                className="absolute -top-6 left-1/2 transform -translate-x-1/2"
              >
                <Sparkles className="w-8 h-8 text-rose-400" />
              </motion.div>
            </span>
          </motion.h1>

          {/* Subtitle with music note */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-rose-200 mb-8 max-w-3xl mx-auto leading-relaxed relative flex items-center justify-center"
          >
            <motion.div
              animate={{ 
                rotate: [0, 15, -15, 0],
                scale: [1, 1.1, 1] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="mr-3"
            >
              <Music className="w-6 h-6 text-rose-400" />
            </motion.div>
            <motion.span
              animate={{
                boxShadow: [
                  "0 0 0px rgba(244, 114, 182, 0)",
                  "0 0 20px rgba(244, 114, 182, 0.3)",
                  "0 0 0px rgba(244, 114, 182, 0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="relative"
            >
              Cada momento contigo es una melodía perfecta que nunca quiero que termine
            </motion.span>
            
            {/* Cursor effect */}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-0.5 h-6 bg-rose-400 ml-1"
            />
          </motion.p>

          {/* Romantic CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(244, 114, 182, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-rose-400 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center overflow-hidden"
              onClick={() => document.getElementById('carta')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-rose-300 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <span className="relative z-10 flex items-center">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 360, 0] 
                  }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Heart className="w-5 h-5 mr-2 fill-white" />
                </motion.div>
                Leer Mi Carta
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center text-white font-semibold text-lg px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 hover:border-rose-400/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
              onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-400/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center mr-3 group-hover:bg-gradient-to-br group-hover:from-rose-400/20 group-hover:to-pink-600/20 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border border-rose-400/50 rounded-full"
                />
                <Gift className="w-5 h-5" />
              </motion.div>
              <span className="relative z-10">Ver Nuestros Recuerdos</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
