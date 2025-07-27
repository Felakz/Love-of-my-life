import { motion } from 'framer-motion'
import { useState, createElement } from 'react'
import { Send, Phone, Mail, MapPin, MessageCircle, Cpu, Zap, Database, Code } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario
    console.log('Formulario enviado:', formData)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      info: '+57 (300) 123-4567',
      link: 'tel:+573001234567'
    },
    {
      icon: Mail,
      title: 'Email',
      info: 'hola@jcstudios.com',
      link: 'mailto:hola@jcstudios.com'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      info: 'Lima, Perú',
      link: '#'
    }
  ]

  const services = [
    'Desarrollo Web',
    'Diseño de Logo',
    'Edición de Video',
    'Identidad Visual',
    'Consultoría Tecnológica',
    'Otro'
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Optimized digital rain effect - reduced from 40 to 20 */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-gold-400/30 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: '200px',
            }}
            animate={{
              y: [-200, window.innerHeight + 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
          />
        ))}

        {/* Holographic grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Floating tech elements */}
        {[Cpu, Zap, Database, Code].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-400/20"
            style={{
              left: `${20 + (i * 20)}%`,
              top: `${10 + (i * 15)}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 360],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 8 + i, repeat: Infinity }}
          >
            {createElement(Icon, { size: 24 })}
          </motion.div>
        ))}

        {/* Energy orbs */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-gold-400/20 to-gold-600/20 rounded-full blur-xl"
        />

        {/* Scanning beam */}
        <motion.div
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
          animate={{
            y: [0, window.innerHeight, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative text-center mb-16"
        >
          {/* Header background effects */}
          <motion.div
            className="absolute inset-0 rounded-3xl opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 30% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
                "radial-gradient(circle at 70% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
                "radial-gradient(circle at 30% 50%, rgba(245, 158, 11, 0.1) 0%, transparent 70%)"
              ]
            }}
            transition={{ duration: 5, repeat: Infinity }}
          />
          
          {/* Optimized floating particles around header - reduced from 12 to 6 */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold-400/40 rounded-full"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i % 3) * 30}%`,
              }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.4, 0.8, 0.4],
                scale: [0.5, 1, 0.5],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
          
          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            animate={{
              textShadow: [
                "0 0 10px rgba(245, 158, 11, 0.3)",
                "0 0 20px rgba(245, 158, 11, 0.5)",
                "0 0 10px rgba(245, 158, 11, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Hablemos de tu{' '}
            <span className="relative bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              Proyecto
              {/* Glitch effect on "Proyecto" */}
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent"
                animate={{
                  x: [0, 2, -2, 0],
                  opacity: [0, 0.5, 0],
                }}
                transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
              >
                Proyecto
              </motion.span>
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            animate={{
              y: [0, -1, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Estamos listos para convertir tus ideas en realidad digital. Contáctanos y comencemos a trabajar juntos.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gray-800/30 backdrop-blur-lg rounded-3xl p-8 border border-gold-500/20 overflow-hidden"
          >
            {/* Form background effects */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gold-500/5 to-transparent"
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            
            {/* Corner tech indicators */}
            {[0, 1, 2, 3].map((corner) => (
              <motion.div
                key={corner}
                className={`absolute w-6 h-6 border-2 border-gold-400/40 ${
                  corner === 0 ? 'top-4 left-4 border-r-0 border-b-0' :
                  corner === 1 ? 'top-4 right-4 border-l-0 border-b-0' :
                  corner === 2 ? 'bottom-4 left-4 border-r-0 border-t-0' :
                  'bottom-4 right-4 border-l-0 border-t-0'
                }`}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: corner * 0.3 }}
              />
            ))}
            
            {/* Scanning line */}
            <motion.div
              className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent"
              animate={{
                y: [0, 400, 0],
                opacity: [0, 1, 0],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10">
              <motion.h3 
                className="text-2xl font-bold text-white mb-6"
                animate={{
                  textShadow: [
                    "0 0 5px rgba(245, 158, 11, 0.3)",
                    "0 0 10px rgba(245, 158, 11, 0.5)",
                    "0 0 5px rgba(245, 158, 11, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Envíanos un mensaje
              </motion.h3>
            
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre *
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gold-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-all duration-300"
                        placeholder="Tu nombre"
                      />
                      {/* Input energy effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border border-gold-400/20 opacity-0 pointer-events-none"
                        whileFocus={{ opacity: 1 }}
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(245, 158, 11, 0)",
                            "0 0 10px rgba(245, 158, 11, 0.3)",
                            "0 0 0px rgba(245, 158, 11, 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-800/50 border border-gold-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-all duration-300"
                        placeholder="tu@email.com"
                      />
                      {/* Input energy effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border border-gold-400/20 opacity-0 pointer-events-none"
                        whileFocus={{ opacity: 1 }}
                        animate={{
                          boxShadow: [
                            "0 0 0px rgba(245, 158, 11, 0)",
                            "0 0 10px rgba(245, 158, 11, 0.3)",
                            "0 0 0px rgba(245, 158, 11, 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      />
                    </div>
                  </motion.div>
                </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gold-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-all duration-300"
                      placeholder="Tu empresa"
                    />
                    {/* Input scanning line */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0"
                      whileFocus={{ opacity: 1 }}
                      animate={{
                        scaleX: [0, 1, 0],
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Servicio de interés
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gold-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-all duration-300 appearance-none cursor-pointer"
                    >
                      <option value="" className="text-gray-900">Seleccionar servicio</option>
                      {services.map((service) => (
                        <option key={service} value={service} className="text-gray-900">
                          {service}
                        </option>
                      ))}
                    </select>
                    {/* Select indicator */}
                    <motion.div
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 w-2 h-2 border-r-2 border-b-2 border-gold-400 rotate-45 pointer-events-none"
                      animate={{
                        rotate: [45, 225, 45],
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gold-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-all duration-300 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                  {/* Textarea corner indicators */}
                  {[0, 1, 2, 3].map((corner) => (
                    <motion.div
                      key={corner}
                      className={`absolute w-3 h-3 border border-gold-400/30 ${
                        corner === 0 ? 'top-2 left-2 border-r-0 border-b-0' :
                        corner === 1 ? 'top-2 right-2 border-l-0 border-b-0' :
                        corner === 2 ? 'bottom-2 left-2 border-r-0 border-t-0' :
                        'bottom-2 right-2 border-l-0 border-t-0'
                      }`}
                      animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: corner * 0.2 }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.button
                type="submit"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 30px rgba(245, 158, 11, 0.6)"
                }}
                whileTap={{ scale: 0.98 }}
                className="relative w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-4 rounded-xl font-semibold text-lg flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Button energy effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                
                {/* Button particles */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/60 rounded-full"
                    style={{
                      left: `${10 + (i * 10)}%`,
                      top: `${30 + (i % 2) * 40}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                  />
                ))}
                
                <motion.div
                  className="relative z-10 flex items-center"
                  whileHover={{ x: 2 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Send className="w-5 h-5 mr-2" />
                  </motion.div>
                  Enviar Mensaje
                </motion.div>
              </motion.button>
            </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative space-y-8"
          >
            {/* Contact section background effects */}
            <motion.div
              className="absolute inset-0 rounded-3xl opacity-10"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 60%)",
                  "radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 60%)",
                  "radial-gradient(circle at 20% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 60%)"
                ]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* Floating tech icons */}
            {[Phone, Mail, MapPin].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute text-gold-400/20"
                style={{
                  right: `${10 + (i * 15)}%`,
                  top: `${20 + (i * 25)}%`,
                }}
                animate={{
                  y: [-5, 5, -5],
                  rotate: [0, 360],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 6 + i, repeat: Infinity }}
              >
                {createElement(Icon, { size: 20 })}
              </motion.div>
            ))}
            
            {/* Contact Cards */}
            <div className="relative z-10 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    x: 10,
                    boxShadow: "0 10px 30px rgba(245, 158, 11, 0.2)"
                  }}
                  className="relative group block bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gold-500/20 hover:bg-gray-800/50 hover:border-gold-400/40 transition-all duration-300 overflow-hidden"
                >
                  {/* Card scanning effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Card particles */}
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-gold-400/40 rounded-full opacity-0 group-hover:opacity-100"
                      style={{
                        left: `${20 + (i * 20)}%`,
                        top: `${30 + (i % 2) * 40}%`,
                      }}
                      animate={{
                        y: [-3, 3, -3],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                    />
                  ))}

                  <div className="relative z-10 flex items-center">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-xl flex items-center justify-center mr-4 relative overflow-hidden"
                      whileHover={{ rotate: 5 }}
                    >
                      {/* Icon background effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                        animate={{
                          rotate: [0, 360],
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      />
                      <info.icon className="relative z-10 w-6 h-6 text-white" />
                    </motion.div>
                    <div>
                      <motion.h4 
                        className="text-white font-semibold mb-1"
                        whileHover={{ x: 3 }}
                      >
                        {info.title}
                      </motion.h4>
                      <motion.p 
                        className="text-gray-300"
                        whileHover={{ x: 3 }}
                      >
                        {info.info}
                      </motion.p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative block bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white text-center hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* WhatsApp background effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
              />
              
              {/* WhatsApp particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white/40 rounded-full"
                  style={{
                    left: `${15 + (i * 15)}%`,
                    top: `${20 + (i % 2) * 60}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                />
              ))}
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center justify-center mb-3"
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaWhatsapp className="w-8 h-8 mr-3" />
                  </motion.div>
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    <MessageCircle className="w-8 h-8" />
                  </motion.div>
                </motion.div>
                <h4 className="text-xl font-bold mb-2">¿Necesitas respuesta inmediata?</h4>
                <p className="text-green-100">Chatea con nosotros por WhatsApp</p>
              </div>
            </motion.a>

            {/* Social Media */}
            <motion.div 
              className="relative bg-gray-800/30 backdrop-blur-lg rounded-2xl p-6 border border-gold-500/20 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              {/* Social media background effects */}
              <motion.div
                className="absolute inset-0 opacity-10"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
                    "radial-gradient(circle at 70% 70%, rgba(245, 158, 11, 0.1) 0%, transparent 70%)",
                    "radial-gradient(circle at 30% 30%, rgba(245, 158, 11, 0.1) 0%, transparent 70%)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Corner indicators */}
              {[0, 1, 2, 3].map((corner) => (
                <motion.div
                  key={corner}
                  className={`absolute w-3 h-3 border border-gold-400/30 ${
                    corner === 0 ? 'top-2 left-2 border-r-0 border-b-0' :
                    corner === 1 ? 'top-2 right-2 border-l-0 border-b-0' :
                    corner === 2 ? 'bottom-2 left-2 border-r-0 border-t-0' :
                    'bottom-2 right-2 border-l-0 border-t-0'
                  }`}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: corner * 0.3 }}
                />
              ))}
              
              <div className="relative z-10">
                <motion.h4 
                  className="text-white font-semibold mb-4 text-center"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(245, 158, 11, 0.3)",
                      "0 0 10px rgba(245, 158, 11, 0.5)",
                      "0 0 5px rgba(245, 158, 11, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Síguenos en redes sociales
                </motion.h4>
                
                <div className="flex justify-center space-x-4">
                  {[
                    { icon: FaInstagram, href: '#', color: 'hover:text-gold-400' },
                    { icon: FaLinkedin, href: '#', color: 'hover:text-gold-400' },
                    { icon: FaTwitter, href: '#', color: 'hover:text-gold-400' },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.2, 
                        y: -2,
                        boxShadow: "0 10px 20px rgba(245, 158, 11, 0.3)"
                      }}
                      className={`relative w-12 h-12 bg-gray-700/50 border border-gold-500/20 rounded-xl flex items-center justify-center text-gray-300 ${social.color} transition-all duration-300 overflow-hidden`}
                    >
                      {/* Social icon background effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-gold-400/20 to-transparent opacity-0"
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Social icon energy ring */}
                      <motion.div
                        className="absolute inset-0 rounded-xl border border-gold-400/40 opacity-0"
                        whileHover={{ opacity: 1 }}
                        animate={{
                          scale: [1, 1.2, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      
                      <motion.div
                        whileHover={{ rotate: 5 }}
                        className="relative z-10"
                      >
                        <social.icon className="w-6 h-6" />
                      </motion.div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
