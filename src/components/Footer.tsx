import { motion } from 'framer-motion'
import { ArrowUp, Heart, Code, Zap, Database, Cpu, Globe, Shield } from 'lucide-react'
import { FaWhatsapp, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa'
import { createElement } from 'react'
import { COMPANY_INFO, SOCIAL_LINKS } from '../config/constants'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    servicios: [
      { name: 'Desarrollo Web', href: '#services' },
      { name: 'Diseño de Logos', href: '#services' },
      { name: 'Edición de Video', href: '#services' },
      { name: 'Identidad Visual', href: '#services' },
      { name: 'Consultoría Tech', href: '#services' }
    ],
    empresa: [
      { name: 'Nosotros', href: '#' },
      { name: 'Portafolio', href: '#portfolio' },
      { name: 'Blog', href: '#' },
      { name: 'Contacto', href: '#contact' },
      { name: 'Testimonios', href: '#' }
    ],
    legal: [
      { name: 'Términos de Servicio', href: '#' },
      { name: 'Política de Privacidad', href: '#' },
      { name: 'Cookies', href: '#' },
      { name: 'GDPR', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: FaWhatsapp, href: SOCIAL_LINKS.whatsapp, color: 'hover:text-green-400' },
    { icon: FaInstagram, href: SOCIAL_LINKS.instagram, color: 'hover:text-gold-400' },
    { icon: FaLinkedin, href: SOCIAL_LINKS.linkedin, color: 'hover:text-gold-400' },
    { icon: FaTwitter, href: SOCIAL_LINKS.twitter, color: 'hover:text-gold-400' }
  ]

  return (
    <footer className="bg-gray-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Optimized digital rain effect - reduced from 50 to 12 */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-gold-400/20 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              height: '300px',
            }}
            animate={{
              y: [-300, 600], // Fixed value instead of window.innerHeight
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear"
            }}
          />
        ))}

        {/* Holographic grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `
              linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>

        {/* Floating tech elements */}
        {[Code, Zap, Database, Cpu, Globe, Shield].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-400/10"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${10 + (i * 10)}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 360],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8 + i, repeat: Infinity }}
          >
            {createElement(Icon, { size: 32 })}
          </motion.div>
        ))}

        {/* Energy orbs */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gold-400/5 to-gold-600/5 rounded-full"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-gold-400/5 to-gold-600/5 rounded-full"
        />

        {/* Scanning beams */}
        <motion.div
          className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
          animate={{
            y: [0, 400, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
          animate={{
            y: [0, -400, 0],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 4 }}
        />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1 relative"
            >
              {/* Company section background effects */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent opacity-0 hover:opacity-100 rounded-2xl transition-opacity duration-300"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
              />
              
              {/* Corner indicators */}
              {[0, 1].map((corner) => (
                <motion.div
                  key={corner}
                  className={`absolute w-4 h-4 border-2 border-gold-400/30 ${
                    corner === 0 ? 'top-2 left-2 border-r-0 border-b-0' :
                    'bottom-2 right-2 border-l-0 border-t-0'
                  }`}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: corner * 1.5 }}
                />
              ))}
              
              <div className="relative z-10">
                <motion.div 
                  className="flex items-center space-x-3 mb-6"
                  whileHover={{ x: 3 }}
                >
                  <motion.div 
                    className="relative w-12 h-12 bg-gradient-to-br from-gold-500/10 to-gold-600/10 rounded-xl flex items-center justify-center overflow-hidden"
                    whileHover={{ rotate: 5 }}
                  >
                    {/* Logo background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Logo energy ring */}
                    <motion.div
                      className="absolute inset-0 rounded-xl border border-gold-300/40"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    <img 
                      src="/logooo.png" 
                      alt="J&C Studios Logo" 
                      className="relative z-10 w-10 h-10 object-contain"
                    />
                  </motion.div>
                  
                  <motion.span 
                    className="text-2xl font-display font-bold text-white"
                    animate={{
                      textShadow: [
                        "0 0 5px rgba(245, 158, 11, 0.3)",
                        "0 0 10px rgba(245, 158, 11, 0.5)",
                        "0 0 5px rgba(245, 158, 11, 0.3)"
                      ]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    Studios
                  </motion.span>
                </motion.div>
                
                <motion.p 
                  className="text-gray-400 mb-6 leading-relaxed"
                  whileHover={{ x: 2 }}
                >
                  {COMPANY_INFO.description}
                </motion.p>

                <div className="space-y-3">
                  <motion.div 
                    className="flex items-center text-gray-400"
                    whileHover={{ x: 3, color: "#f59e0b" }}
                  >
                    <motion.div
                      animate={{
                        rotate: [0, 10, -10, 0],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <FaEnvelope className="w-4 h-4 mr-3 text-gold-400" />
                    </motion.div>
                    <span>{COMPANY_INFO.email}</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center text-gray-400"
                    whileHover={{ x: 3, color: "#f59e0b" }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <FaPhone className="w-4 h-4 mr-3 text-gold-400" />
                    </motion.div>
                    <span>{COMPANY_INFO.phone}</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              {/* Services section background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-gold-400/3 to-transparent opacity-0 hover:opacity-100 rounded-2xl transition-opacity duration-300"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
              />
              
              {/* Scanning line for services */}
              <motion.div
                className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.8, 0],
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              />
              
              <div className="relative z-10">
                <motion.h3 
                  className="text-white font-bold text-lg mb-6"
                  animate={{
                    textShadow: [
                      "0 0 5px rgba(245, 158, 11, 0.3)",
                      "0 0 8px rgba(245, 158, 11, 0.5)",
                      "0 0 5px rgba(245, 158, 11, 0.3)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Servicios
                </motion.h3>
                
                <ul className="space-y-3">
                  {footerLinks.servicios.map((link, index) => (
                    <motion.li 
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.a
                        href={link.href}
                        whileHover={{ 
                          x: 5,
                          color: "#f59e0b"
                        }}
                        className="text-gray-400 hover:text-gold-400 transition-all duration-300 flex items-center group relative"
                      >
                        {/* Hover indicator */}
                        <motion.span 
                          className="w-2 h-2 bg-gold-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"
                          whileHover={{
                            scale: [1, 1.3, 1],
                          }}
                          transition={{ duration: 0.5, repeat: Infinity }}
                        />
                        
                        {/* Link particle effect */}
                        <motion.div
                          className="absolute -left-1 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gold-400/60 rounded-full opacity-0 group-hover:opacity-100"
                          animate={{
                            scale: [0, 1, 0],
                          }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                        
                        <span className="relative">{link.name}</span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Company */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Empresa</h3>
              <ul className="space-y-3">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-gold-400 transition-colors duration-200 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-gold-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-white font-bold text-lg mb-6">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Recibe las últimas noticias sobre diseño y tecnología
              </p>
              
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-gray-800/50 border border-gold-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-all"
                />
                <motion.button
                  type="submit"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(251, 191, 36, 0.4)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-gold-500 to-gold-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Suscribirse
                </motion.button>
              </form>

              {/* Social Media */}
              <div className="flex space-x-3 mt-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-10 h-10 bg-gray-800/50 border border-gold-500/20 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:bg-gold-500/10`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-white/10 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
                <p className="text-gray-400 flex items-center">
                  © {COMPANY_INFO.year} {COMPANY_INFO.name}. Hecho con <Heart className="w-4 h-4 mx-1 text-red-500" /> en Perú
                </p>
                <div className="flex space-x-6">
                  {footerLinks.legal.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="text-gray-400 hover:text-gold-400 transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(251, 191, 36, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
