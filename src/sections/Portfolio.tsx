import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ExternalLink, Github, Sparkles, Zap, Star, Code2, Cpu, Wifi, Eye, Monitor } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Fashion',
      category: 'Desarrollo Web',
      description: 'Tienda online moderna con carrito de compras, pasarela de pagos y panel administrativo.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Brand Identity Tech',
      category: 'Diseño Gráfico',
      description: 'Identidad visual completa para startup tecnológica incluyendo logo, colores y tipografías.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
      tags: ['Branding', 'Logo Design', 'Figma', 'Illustrator'],
      link: '#',
      github: null
    },
    {
      id: 3,
      title: 'App Móvil Fintech',
      category: 'Desarrollo Móvil',
      description: 'Aplicación financiera con dashboard interactivo y análisis de datos en tiempo real.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
      tags: ['React Native', 'TypeScript', 'API REST', 'Chart.js'],
      link: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Video Corporativo',
      category: 'Producción Audiovisual',
      description: 'Video promocional para empresa de servicios con motion graphics y animaciones 3D.',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
      tags: ['After Effects', 'Premiere', 'Cinema 4D', 'Motion Graphics'],
      link: '#',
      github: null
    },
    {
      id: 5,
      title: 'Dashboard Analytics',
      category: 'Desarrollo Web',
      description: 'Panel de control con métricas avanzadas y visualización de datos empresariales.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
      tags: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      link: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'Campaña Digital',
      category: 'Marketing Digital',
      description: 'Estrategia integral de marketing digital con contenido visual y video promocional.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=800&q=80',
      tags: ['Social Media', 'Content Creation', 'Photography', 'Video'],
      link: '#',
      github: null
    }
  ]

  const categories = ['Todos', 'Desarrollo Web', 'Diseño Gráfico', 'Desarrollo Móvil', 'Producción Audiovisual', 'Marketing Digital']
  
  return (
    <section id="portfolio" className="relative py-20 bg-gray-900 min-h-screen overflow-visible">
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated matrix-style background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(251, 191, 36, 0.4) 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Optimized digital rain effect - reduced from 25 to 12 drops */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 8 + 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-0.5 h-8 bg-gradient-to-b from-transparent via-gold-400/60 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Holographic grid lines */}
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-y-0 w-px bg-gradient-to-b from-transparent via-gold-400/20 to-transparent"
        />
        <motion.div
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-gold-400/15 to-transparent"
        />

        {/* Optimized floating data fragments - reduced from 8 to 4 */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [Math.random() * 200, Math.random() * 200 + 100],
              y: [Math.random() * 200, Math.random() * 200 + 100],
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: Math.random() * 12 + 8,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <div className="w-6 h-6 border border-gold-400/30 bg-gold-400/5 backdrop-blur-sm flex items-center justify-center">
              {[Code2, Monitor, Eye, Cpu][Math.floor(Math.random() * 4)] && 
                React.createElement([Code2, Monitor, Eye, Cpu][Math.floor(Math.random() * 4)], {
                  className: "w-3 h-3 text-gold-400/50"
                })
              }
            </div>
          </motion.div>
        ))}

        {/* Energy fields */}
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.1, 0.3, 0.1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-gold-400/10 to-transparent rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.25, 0.1],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, delay: 3 }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-blue-400/10 to-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          {/* Holographic title effect */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute -top-12 left-1/2 transform -translate-x-1/2"
          >
            <Sparkles className="w-8 h-8 text-gold-400/60" />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6 relative"
            animate={{
              textShadow: [
                "0 0 30px rgba(251, 191, 36, 0.3)",
                "0 0 60px rgba(251, 191, 36, 0.6)",
                "0 0 30px rgba(251, 191, 36, 0.3)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Nuestro{' '}
            <motion.span 
              className="bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent relative"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              Portafolio
              
              {/* Digital glitch effects */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 2, -2, 0],
                  scale: [1, 1.05, 0.95, 1],
                }}
                transition={{ duration: 0.3, repeat: Infinity, repeatDelay: 4 }}
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
              >
                Portafolio
              </motion.div>
              
              {/* Scanning beam */}
              <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              />
              
              {/* Optimized data points - reduced from 5 to 3 */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  className="absolute w-1 h-1 bg-gold-400 rounded-full"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 relative"
            animate={{
              boxShadow: [
                "0 0 0px rgba(251, 191, 36, 0)",
                "0 0 25px rgba(251, 191, 36, 0.1)",
                "0 0 0px rgba(251, 191, 36, 0)"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            <motion.span className="relative">
              Descubre algunos de nuestros proyectos más destacados y las soluciones que hemos creado para nuestros clientes
              
              {/* Typing cursor */}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="inline-block w-0.5 h-5 bg-gold-400 ml-1"
              />
            </motion.span>
            
            {/* Floating tech icons */}
            <motion.div
              animate={{
                x: [0, 25, 0],
                y: [0, -15, 0],
                rotate: [0, 360],
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute -right-10 top-1/2 transform -translate-y-1/2"
            >
              <Wifi className="w-5 h-5 text-blue-400/40" />
            </motion.div>
            
            <motion.div
              animate={{
                x: [0, -20, 0],
                y: [0, 12, 0],
                rotate: [0, -270, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, delay: 2 }}
              className="absolute -left-10 top-1/2 transform -translate-y-1/2"
            >
              <Cpu className="w-5 h-5 text-purple-400/40" />
            </motion.div>
          </motion.p>
          
          {/* Enhanced Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(241, 199, 94, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 py-3 rounded-full border border-gold-500/30 text-gray-300 hover:bg-gold-500/10 hover:border-gold-400/50 hover:text-gold-400 transition-all duration-300 font-medium backdrop-blur-sm overflow-hidden"
                animate={{
                  borderColor: [
                    "rgba(251, 191, 36, 0.3)",
                    "rgba(251, 191, 36, 0.6)",
                    "rgba(251, 191, 36, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {/* Button scan effect */}
                <motion.div
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-400/20 to-transparent opacity-0 group-hover:opacity-100"
                />
                
                {/* Particle effects */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    className="absolute w-1 h-1 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${25 + i * 25}%`,
                      top: `${25 + i * 25}%`,
                    }}
                  />
                ))}
                
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </div>
          
          {/* Central energy core */}
          <motion.div
            animate={{
              scale: [0, 4, 0],
              opacity: [1, 0, 1],
              rotate: [0, 360],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 border border-gold-400/40 rounded-full"
          />
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Holographic border effect */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: "linear-gradient(45deg, #f59e0b, #fbbf24, #fcd34d, #f59e0b) border-box",
                  maskComposite: "subtract",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)"
                }}
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />

              {/* Scanning line effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  y: [0, 200, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Corner tech elements */}
              {[0, 1, 2, 3].map((corner) => (
                <motion.div
                  key={corner}
                  className={`absolute w-4 h-4 border-2 border-gold-400/60 opacity-0 group-hover:opacity-100 ${
                    corner === 0 ? 'top-2 left-2 border-r-0 border-b-0' :
                    corner === 1 ? 'top-2 right-2 border-l-0 border-b-0' :
                    corner === 2 ? 'bottom-2 left-2 border-r-0 border-t-0' :
                    'bottom-2 right-2 border-l-0 border-t-0'
                  }`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: corner * 0.2 }}
                />
              ))}

              {/* Floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gold-400/40 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    left: `${20 + (i * 12)}%`,
                    top: `${30 + (i % 3) * 20}%`,
                  }}
                  animate={{
                    y: [-5, -15, -5],
                    opacity: [0.4, 0.8, 0.4],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Digital grid overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>
                
                {/* Overlay Actions */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                  <motion.a
                    href={project.link}
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-gold-100 hover:text-gold-600 transition-colors shadow-lg"
                  >
                    <ExternalLink size={16} />
                    {/* Button energy ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-gold-400/40"
                      animate={{
                        scale: [1, 1.4, 1],
                        opacity: [0.4, 0, 0.4],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.a>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.15, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="relative w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-700 hover:bg-gold-100 hover:text-gold-600 transition-colors shadow-lg"
                    >
                      <Github size={16} />
                      {/* Button energy ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border border-gold-400/40"
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.4, 0, 0.4],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6">
                {/* Content background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-gold-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                />
                
                {/* Energy pulse lines */}
                <motion.div
                  className="absolute left-0 top-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent opacity-0 group-hover:opacity-100"
                  animate={{
                    scaleX: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="text-sm font-medium mb-2 flex items-center"
                    whileHover={{ x: 5 }}
                  >
                    <span className="text-gold-600">{project.category}</span>
                    <motion.div
                      className="ml-2 w-1 h-1 bg-gold-400 rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  <motion.h3 
                    className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors duration-300"
                    whileHover={{ x: 3 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-4 leading-relaxed"
                    whileHover={{ x: 2 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full hover:bg-gold-100 hover:text-gold-700 transition-colors cursor-default relative overflow-hidden"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: tagIndex * 0.1 }}
                      >
                        <span className="relative z-10">{tag}</span>
                        {/* Tag hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-gold-200/50 to-gold-300/50 opacity-0"
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative text-center mt-16"
        >
          {/* CTA background effects */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          
          {/* Floating energy orbs around CTA */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gold-400/30 rounded-full"
              style={{
                left: `${20 + (i * 10)}%`,
                top: `${20 + (i % 2) * 60}%`,
              }}
              animate={{
                y: [-10, 10, -10],
                opacity: [0.3, 0.7, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4 }}
            />
          ))}
          
          <div className="relative z-10">
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              animate={{
                y: [0, -2, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              ¿Te gustó lo que viste? Trabajemos juntos en tu próximo proyecto
            </motion.p>
            
            <Link to="/contacto">
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px -12px rgba(245, 158, 11, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-flex items-center bg-gradient-to-r from-gold-400 to-gold-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
              {/* Button energy effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
              
              {/* Button particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full"
                  style={{
                    left: `${15 + (i * 15)}%`,
                    top: `${30 + (i % 2) * 40}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
              
              <span className="relative z-10">Iniciar Proyecto</span>
            </motion.div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
