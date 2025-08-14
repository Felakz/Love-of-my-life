import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Monitor, Palette, Video, Eye, Settings, ArrowRight, Code2, Sparkles, Zap, Star, Cpu, Wifi } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Desarrollo Web',
      description: 'Sitios web responsivos y aplicaciones web modernas con las últimas tecnologías.',
      features: ['React & Next.js', 'E-commerce', 'SEO Optimizado', 'Responsive Design']
    },
    {
      icon: Palette,
      title: 'Diseño de Logos',
      description: 'Identidades visuales únicas que capturan la esencia de tu marca.',
      features: ['Diseño Original', 'Múltiples Formatos', 'Manual de Marca', 'Revisiones Ilimitadas']
    },
    {
      icon: Video,
      title: 'Edición de Video',
      description: 'Contenido audiovisual profesional para potenciar tu presencia digital.',
      features: ['Motion Graphics', 'Color Grading', 'Efectos Visuales', 'Múltiples Formatos']
    },
    {
      icon: Eye,
      title: 'Identidad Visual',
      description: 'Sistemas de identidad completos para una presencia coherente y memorable.',
      features: ['Brand Guidelines', 'Papelería', 'Redes Sociales', 'Aplicaciones']
    },
    {
      icon: Settings,
      title: 'Consultoría Tecnológica',
      description: 'Asesoramiento estratégico para optimizar tus procesos digitales.',
      features: ['Análisis Técnico', 'Arquitectura', 'Optimización', 'Soporte 24/7']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  }

  return (
    <section id="services" className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.15) 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        {/* Optimized floating tech elements - reduced from 15 to 8 */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [Math.random() * 100, Math.random() * 100 + 50],
              y: [Math.random() * 100, Math.random() * 100 + 50],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 bg-gold-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Scanning lines */}
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-0.5 bg-gradient-to-b from-transparent via-gold-400/20 to-transparent"
        />
        
        {/* Glowing orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-gold-400/10 to-gold-600/10 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 5 }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-purple-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Floating decorative elements */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
          >
            <Sparkles className="w-6 h-6 text-gold-400/60" />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 relative"
            animate={{
              textShadow: [
                "0 0 20px rgba(251, 191, 36, 0.1)",
                "0 0 40px rgba(251, 191, 36, 0.3)",
                "0 0 20px rgba(251, 191, 36, 0.1)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Nuestros{' '}
            <motion.span 
              className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Servicios
              {/* Animated accent dots */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1.2, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2 w-2 h-2 bg-gold-400 rounded-full"
              />
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.3, 1, 0.3],
                  x: [0, 5, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.7 }}
                className="absolute -bottom-1 -left-1 w-1.5 h-1.5 bg-gold-500 rounded-full"
              />
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.span
              animate={{
                boxShadow: [
                  "0 0 0px rgba(251, 191, 36, 0)",
                  "0 0 15px rgba(251, 191, 36, 0.1)",
                  "0 0 0px rgba(251, 191, 36, 0)"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Ofrecemos soluciones digitales integrales para impulsar tu negocio hacia el éxito
            </motion.span>
            
            {/* Tech icons floating around text */}
            <motion.div
              animate={{
                x: [0, 20, 0],
                y: [0, -10, 0],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -right-8 top-1/2 transform -translate-y-1/2"
            >
              <Code2 className="w-4 h-4 text-gold-400/40" />
            </motion.div>
            
            <motion.div
              animate={{
                x: [0, -15, 0],
                y: [0, 10, 0],
                rotate: [0, -180, -360],
              }}
              transition={{ duration: 7, repeat: Infinity, delay: 2 }}
              className="absolute -left-8 top-1/2 transform -translate-y-1/2"
            >
              <Cpu className="w-4 h-4 text-blue-400/40" />
            </motion.div>
          </motion.p>
          
          {/* Energy pulse effect */}
          <motion.div
            animate={{
              scale: [0, 3, 0],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-gold-400/30 rounded-full"
          />
        </motion.div>

        {/* Enhanced Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Advanced card background effects */}
              <motion.div
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%'],
                  opacity: [0, 0.05, 0],
                }}
                transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-transparent to-gold-600/10"
              />
              
              {/* Scanning line effect */}
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.7 }}
                className="absolute inset-y-0 w-0.5 bg-gradient-to-b from-transparent via-gold-400/30 to-transparent opacity-0 group-hover:opacity-100"
              />
              
              {/* Optimized floating particles inside card - reduced from 5 to 3 */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, Math.random() * 50 - 25],
                    y: [0, Math.random() * 50 - 25],
                    opacity: [0, 0.6, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  className="absolute w-1 h-1 bg-gold-400/40 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}

              {/* Enhanced Icon */}
              <motion.div 
                className="relative w-16 h-16 bg-gradient-to-br from-gold-400 to-gold-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                whileHover={{ rotate: 5 }}
              >
                {/* Icon glow effect */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(251, 191, 36, 0.3)",
                      "0 0 40px rgba(251, 191, 36, 0.6)",
                      "0 0 20px rgba(251, 191, 36, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100"
                />
                
                {/* Rotating ring */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 border-2 border-gold-300/30 rounded-2xl opacity-0 group-hover:opacity-100"
                />
                
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative z-10"
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                
                {/* Optimized sparkle effects around icon - reduced from 4 to 2 */}
                {[...Array(2)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [0, Math.cos(i * 90 * Math.PI / 180) * 20],
                      y: [0, Math.sin(i * 90 * Math.PI / 180) * 20],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    className="absolute w-1 h-1 bg-gold-300 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                  />
                ))}
              </motion.div>

              {/* Enhanced Content */}
              <motion.h3 
                className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gold-600 transition-colors relative"
                whileHover={{ x: 5 }}
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(251, 191, 36, 0)",
                      "0 0 10px rgba(251, 191, 36, 0.3)",
                      "0 0 0px rgba(251, 191, 36, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="group-hover:text-shadow"
                >
                  {service.title}
                </motion.span>
                
                {/* Glowing underline */}
                <motion.div
                  animate={{
                    width: [0, '100%'],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 opacity-0 group-hover:opacity-100"
                />
              </motion.h3>
              
              <motion.p 
                className="text-gray-600 mb-6 leading-relaxed relative"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {service.description}
                
                {/* Hover glow effect */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(251, 191, 36, 0)",
                      "0 0 15px rgba(251, 191, 36, 0.1)",
                      "0 0 0px rgba(251, 191, 36, 0)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                />
              </motion.p>

              {/* Enhanced Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center text-sm text-gray-500 relative"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    whileHover={{ x: 5, color: '#d97706' }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-gold-400 rounded-full mr-3 flex-shrink-0"
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 0px rgba(251, 191, 36, 0.5)",
                          "0 0 8px rgba(251, 191, 36, 0.8)",
                          "0 0 0px rgba(251, 191, 36, 0.5)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: featureIndex * 0.2 }}
                    />
                    <span className="relative">
                      {feature}
                      {/* Scan line effect on hover */}
                      <motion.div
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="absolute inset-x-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent opacity-0 group-hover:opacity-100"
                      />
                    </span>
                  </motion.li>
                ))}
              </ul>

              {/* Enhanced CTA */}
              <motion.button
                whileHover={{ x: 5, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex items-center text-gold-600 font-semibold group-hover:text-gold-700 transition-colors overflow-hidden"
              >
                {/* Button glow effect */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0px rgba(251, 191, 36, 0)",
                      "0 0 20px rgba(251, 191, 36, 0.3)",
                      "0 0 0px rgba(251, 191, 36, 0)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                />
                
                <span className="relative z-10 flex items-center">
                  Saber más
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.div>
                </span>
                
                {/* Particle trail effect */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      x: [0, 15],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="absolute w-1 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      right: `${i * 8}px`,
                      top: '50%',
                    }}
                  />
                ))}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 relative"
        >
          <motion.div 
            className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Advanced background effects */}
            <motion.div
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-br from-gold-400/10 via-transparent to-gold-600/10"
            />
            
            {/* Scanning grid effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            {/* Animated scanning lines */}
            <motion.div
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-0.5 bg-gradient-to-b from-transparent via-gold-400/40 to-transparent"
            />
            
            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  x: [Math.random() * 300, Math.random() * 300],
                  y: [Math.random() * 200, Math.random() * 200],
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 8 + 4,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
                className="absolute w-1 h-1 bg-gold-400/50 rounded-full"
              />
            ))}
            
            {/* Content */}
            <div className="relative z-10">
              <motion.h3 
                className="text-3xl md:text-4xl font-bold text-white mb-4 relative"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.3)",
                    "0 0 40px rgba(251, 191, 36, 0.6)",
                    "0 0 20px rgba(251, 191, 36, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                ¿Tienes un proyecto en mente?
                
                {/* Decorative elements */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -top-4 -right-4"
                >
                  <Zap className="w-6 h-6 text-gold-400/60" />
                </motion.div>
                
                <motion.div
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-2 -left-4"
                >
                  <Star className="w-4 h-4 text-gold-500/60" />
                </motion.div>
              </motion.h3>
              
              <motion.p 
                className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto relative"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(251, 191, 36, 0)",
                    "0 0 20px rgba(251, 191, 36, 0.1)",
                    "0 0 0px rgba(251, 191, 36, 0)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                Conversemos sobre cómo podemos hacer realidad tu visión digital
                
                {/* Cursor effect */}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity }}
                  className="inline-block w-0.5 h-5 bg-gold-400 ml-1"
                />
              </motion.p>
              
              <Link to="/contacto">
                <motion.div
                  whileHover={{ 
                    scale: 1.05, 
                    boxShadow: "0 0 40px rgba(251, 191, 36, 0.4)" 
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative inline-flex items-center bg-gradient-to-r from-gold-400 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                {/* Button effects */}
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                />
                
                {/* Particle burst */}
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
                      duration: 0.8,
                      delay: i * 0.1,
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                  />
                ))}
                
                <span className="relative z-10 flex items-center">
                  Cotizar Proyecto
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </motion.div>
                </span>
              </motion.div>
              </Link>
            </div>
            
            {/* Corner decorations */}
            <motion.div
              animate={{
                rotate: [0, 90, 180, 270, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute top-4 right-4"
            >
              <Wifi className="w-5 h-5 text-gold-400/30" />
            </motion.div>
            
            <motion.div
              animate={{
                rotate: [360, 270, 180, 90, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute bottom-4 left-4"
            >
              <Cpu className="w-5 h-5 text-blue-400/30" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
