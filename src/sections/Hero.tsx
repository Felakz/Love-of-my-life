import { motion } from 'framer-motion'
import { ArrowRight, Play, Sparkles, Star, Zap, Award, Code, Cpu, Wifi, Database, Shield, Rocket } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-500/5 to-gold-500/5"></div>
        
        {/* Advanced Grid Pattern with animated lines */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.2) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
          {/* Animated scanning lines */}
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-1 bg-gradient-to-b from-transparent via-gold-400/50 to-transparent"
          />
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
          />
        </div>

        {/* Optimized floating particles - reduced from 20 to 8 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
          />
        ))}

        {/* Enhanced floating elements with tech icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-20 blur-xl flex items-center justify-center"
        >
          <Code className="w-8 h-8 text-white/40" />
        </motion.div>

        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-15 blur-xl flex items-center justify-center"
        >
          <Cpu className="w-12 h-12 text-white/30" />
        </motion.div>
        
        {/* Additional tech-themed floating elements */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/3 right-1/4 w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-500 rounded-full opacity-20 blur-lg flex items-center justify-center"
        >
          <Wifi className="w-6 h-6 text-white/50" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-1/3 left-1/4 w-24 h-24 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-15 blur-lg flex items-center justify-center"
        >
          <Database className="w-8 h-8 text-white/40" />
        </motion.div>

        {/* New tech elements */}
        <motion.div
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/2 left-20 w-12 h-12 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-25 blur-md flex items-center justify-center"
        >
          <Shield className="w-4 h-4 text-white/60" />
        </motion.div>

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 25, 0],
            rotate: [0, -270, 0],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-1/4 right-20 w-14 h-14 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-20 blur-lg flex items-center justify-center"
        >
          <Rocket className="w-5 h-5 text-white/50" />
        </motion.div>

        {/* Optimized energy rings - reduced from 3 to 2 */}
        {[...Array(2)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0, 4, 0],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 6, // Increased duration for smoother animation
              repeat: Infinity,
              delay: i * 2,
              ease: "easeOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-gold-400/30 rounded-full"
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Enhanced Badge with glowing effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-gold-500/10 to-gold-600/10 border border-gold-500/30 rounded-full text-gold-300 text-sm font-medium mb-8 backdrop-blur-sm"
          >
            {/* Glowing border animation */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 20px rgba(251, 191, 36, 0.3)",
                  "0 0 40px rgba(251, 191, 36, 0.6)",
                  "0 0 20px rgba(251, 191, 36, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-gold-400/50"
            />
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 mr-2" />
            </motion.div>
            <span className="relative z-10">Servicios Digitales Premium</span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 180, 360] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star className="w-4 h-4 ml-2 text-gold-400" />
            </motion.div>
            
            {/* Floating sparkles around badge */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [0, Math.cos(i * 60 * Math.PI / 180) * 30],
                  y: [0, Math.sin(i * 60 * Math.PI / 180) * 30],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                className="absolute w-1 h-1 bg-gold-400 rounded-full"
                style={{
                  left: '50%',
                  top: '50%',
                }}
              />
            ))}
          </motion.div>

          {/* Enhanced Main Title with multiple effects */}
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
                transition={{ duration: 2, repeat: Infinity }}
              >
                Creatividad que{' '}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent relative"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Impulsa
                {/* Multiple animated decorations */}
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.5, 0.8],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-3 -right-3 w-4 h-4 bg-gold-400 rounded-full"
                />
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.5],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="absolute -top-1 -left-2 w-2 h-2 bg-gold-300 rounded-full"
                />
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.3, 1, 0.3],
                    y: [0, -8, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -bottom-2 right-1/2 w-1.5 h-1.5 bg-gold-500 rounded-full"
                />
              </motion.span>{' '}
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(255, 255, 255, 0.5)",
                    "0 0 20px rgba(255, 255, 255, 0.8)",
                    "0 0 10px rgba(255, 255, 255, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                tu Negocio
              </motion.span>
              
              {/* Lightning bolt effect */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 0.3,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="absolute -top-4 left-1/2 transform -translate-x-1/2"
              >
                <Zap className="w-8 h-8 text-gold-400" />
              </motion.div>
            </span>
          </motion.h1>

          {/* Enhanced Subtitle with typing effect */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed relative"
          >
            <motion.span
              animate={{
                boxShadow: [
                  "0 0 0px rgba(251, 191, 36, 0)",
                  "0 0 20px rgba(251, 191, 36, 0.3)",
                  "0 0 0px rgba(251, 191, 36, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="relative"
            >
              Transformamos ideas en experiencias digitales excepcionales. 
              Diseño web, identidad visual y tecnología de vanguardia para hacer crecer tu empresa.
            </motion.span>
            
            {/* Cursor blinking effect */}
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-0.5 h-6 bg-gold-400 ml-1"
            />
          </motion.p>

          {/* Enhanced CTA Buttons with advanced effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 25px 50px rgba(251, 191, 36, 0.4)" 
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-gold-400 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center overflow-hidden"
            >
              {/* Multiple animated backgrounds */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ['-200%', '200%'] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              />
              
              {/* Particle burst effect */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  animate={{
                    x: [0, Math.cos(i * 45 * Math.PI / 180) * 40],
                    y: [0, Math.sin(i * 45 * Math.PI / 180) * 40],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    delay: i * 0.1,
                  }}
                  style={{
                    left: '50%',
                    top: '50%',
                  }}
                />
              ))}
              
              <span className="relative z-10 flex items-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Zap className="w-5 h-5 mr-2" />
                </motion.div>
                Iniciar Proyecto
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </span>
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center text-white font-semibold text-lg px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 hover:border-gold-400/50 transition-all duration-300 backdrop-blur-sm overflow-hidden"
            >
              {/* Scanning line effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent opacity-0 group-hover:opacity-100"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              
              <motion.div 
                className="relative w-12 h-12 bg-gradient-to-br from-white/10 to-white/5 rounded-full flex items-center justify-center mr-3 group-hover:bg-gradient-to-br group-hover:from-gold-400/20 group-hover:to-gold-600/20 transition-all duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {/* Pulsing ring */}
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border border-gold-400/50 rounded-full"
                />
                <Play className="w-5 h-5 ml-1" />
              </motion.div>
              <span className="relative z-10">Ver Nuestro Trabajo</span>
            </motion.button>
          </motion.div>

          {/* Enhanced Stats with holographic effects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/10 relative"
          >
            {/* Animated border line */}
            <motion.div
              animate={{ width: ['0%', '100%'] }}
              transition={{ duration: 2, delay: 1 }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-transparent via-gold-400 to-transparent"
            />
            
            <motion.div 
              className="text-center group relative"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Holographic background */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                  opacity: [0, 0.1, 0],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute inset-0 bg-gradient-to-br from-gold-400/20 via-transparent to-gold-600/20 rounded-xl"
              />
              
              {/* Energy field */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute inset-0 border border-gold-400/30 rounded-xl"
              />
              
              <motion.div 
                className="relative text-3xl md:text-4xl font-bold text-gold-400 mb-2 flex items-center justify-center"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(251, 191, 36, 0.5)", 
                    "0 0 30px rgba(251, 191, 36, 0.8)", 
                    "0 0 10px rgba(251, 191, 36, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  50+
                </motion.span>
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Award className="w-6 h-6 ml-2 text-gold-500" />
                </motion.div>
              </motion.div>
              <div className="relative text-gray-300 group-hover:text-white transition-colors">
                Proyectos Completados
                {/* Floating particles */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    className="absolute w-1 h-1 bg-gold-400 rounded-full"
                    style={{
                      left: `${25 + i * 25}%`,
                      top: '-10px',
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="text-center group relative"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Holographic background */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                  opacity: [0, 0.1, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.7 }}
                className="absolute inset-0 bg-gradient-to-br from-gold-400/20 via-transparent to-gold-600/20 rounded-xl"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 border border-gold-400/30 rounded-xl"
              />
              
              <motion.div 
                className="relative text-3xl md:text-4xl font-bold text-gold-400 mb-2 flex items-center justify-center"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(251, 191, 36, 0.5)", 
                    "0 0 30px rgba(251, 191, 36, 0.8)", 
                    "0 0 10px rgba(251, 191, 36, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.7 }}
              >
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 0.7 }}
                >
                  100%
                </motion.span>
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Star className="w-6 h-6 ml-2 text-gold-500" />
                </motion.div>
              </motion.div>
              <div className="relative text-gray-300 group-hover:text-white transition-colors">
                Clientes Satisfechos
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 0.7 + i * 0.5,
                    }}
                    className="absolute w-1 h-1 bg-gold-400 rounded-full"
                    style={{
                      left: `${25 + i * 25}%`,
                      top: '-10px',
                    }}
                  />
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="text-center group relative"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Holographic background */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                  opacity: [0, 0.1, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1.4 }}
                className="absolute inset-0 bg-gradient-to-br from-gold-400/20 via-transparent to-gold-600/20 rounded-xl"
              />
              
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                className="absolute inset-0 border border-gold-400/30 rounded-xl"
              />
              
              <motion.div 
                className="relative text-3xl md:text-4xl font-bold text-gold-400 mb-2 flex items-center justify-center"
                animate={{ 
                  textShadow: [
                    "0 0 10px rgba(251, 191, 36, 0.5)", 
                    "0 0 30px rgba(251, 191, 36, 0.8)", 
                    "0 0 10px rgba(251, 191, 36, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1.4 }}
              >
                <motion.span
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 1.4 }}
                >
                  24/7
                </motion.span>
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.4, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-6 h-6 ml-2 text-gold-500" />
                </motion.div>
              </motion.div>
              <div className="relative text-gray-300 group-hover:text-white transition-colors">
                Soporte Técnico
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.4 + i * 0.5,
                    }}
                    className="absolute w-1 h-1 bg-gold-400 rounded-full"
                    style={{
                      left: `${25 + i * 25}%`,
                      top: '-10px',
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
