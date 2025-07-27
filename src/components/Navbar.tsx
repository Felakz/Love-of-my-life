import { useState, useEffect, createElement } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Code, Zap, Database, Cpu } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'Contacto', href: '#contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 relative overflow-hidden ${
        isScrolled
          ? 'bg-gray-900/90 backdrop-blur-lg shadow-2xl border-b border-gold-500/20'
          : 'bg-transparent'
      }`}
    >
      {/* Navbar background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Optimized digital particles - reduced from 12 to 6 */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-8 bg-gradient-to-b from-transparent via-gold-400/20 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
            }}
            animate={{
              y: [-20, 100, -20],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "linear"
            }}
          />
        ))}

        {/* Scanning beam */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent"
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Optimized floating tech icons - reduced animation complexity */}
        {[Code, Zap].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-gold-400/10"
            style={{
              left: `${30 + (i * 40)}%`,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            animate={{
              y: [-1, 1, -1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 4 + i * 2, repeat: Infinity }}
          >
            {createElement(Icon, { size: 16 })}
          </motion.div>
        ))}
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative flex items-center space-x-2"
          >
            <motion.div 
              className="relative w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg flex items-center justify-center overflow-hidden"
              whileHover={{ rotate: 5 }}
            >
              {/* Logo background effect - static */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              
              {/* Logo energy ring - static */}
              <div className="absolute inset-0 rounded-lg border border-gold-300/40" />
              
              <span className="relative z-10 text-white font-bold text-xl">J&C</span>
            </motion.div>
            
            <span className="text-xl lg:text-2xl font-display font-bold text-white">
              Studios
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -2,
                  textShadow: "0 0 8px rgba(245, 158, 11, 0.6)"
                }}
                className="relative text-gray-300 hover:text-gold-400 font-medium transition-all duration-300 group"
              >
                {/* Nav item background effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-gold-400/10 to-transparent opacity-0 rounded-lg -m-2 p-2"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Nav item particles - static */}
                <div className="absolute -top-1 -right-1 w-1 h-1 bg-gold-400/60 rounded-full opacity-0 group-hover:opacity-100" />
                
                <span className="relative z-10">{item.name}</span>
                
                {/* Enhanced underline effect - static */}
                <motion.span 
                  className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-gold-400 to-gold-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Energy pulse on hover - removed animation */}
                <div className="absolute left-0 bottom-0 w-full h-px bg-gold-400/40 opacity-0 group-hover:opacity-100" />
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* CTA button effects - removed animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100" />
              
              {/* CTA button particles - static */}
              {[...Array(2)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white/60 rounded-full opacity-30"
                  style={{
                    left: `${30 + (i * 40)}%`,
                    top: `${40}%`,
                  }}
                />
              ))}
              
              <span className="relative z-10">Cotizar Proyecto</span>
            </motion.a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative text-gray-300 hover:text-gold-400 transition-colors p-2"
            >
              {/* Menu button background effect - static */}
              <div className="absolute inset-0 bg-gold-400/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              {/* Menu button energy ring - static */}
              <div className="absolute inset-0 rounded-lg border border-gold-400/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div
                animate={isOpen ? { rotate: 180 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
                className="relative z-10"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            open: {
              opacity: 1,
              height: 'auto',
              transition: { duration: 0.3 }
            },
            closed: {
              opacity: 0,
              height: 0,
              transition: { duration: 0.3 }
            }
          }}
          className="lg:hidden overflow-hidden bg-gray-900/95 backdrop-blur-lg border-t border-gold-500/20 relative"
        >
          {/* Mobile menu background effects */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Optimized mobile scanning lines - reduced from 6 to 3 */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-full h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent"
                style={{
                  top: `${25 + (i * 25)}%`,
                }}
                animate={{
                  scaleX: [0, 1, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "linear"
                }}
              />
            ))}
            
            {/* Mobile background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent"
              animate={{
                opacity: [0.05, 0.15, 0.05],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </div>
          
          <div className="relative z-10 px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  x: 5,
                  backgroundColor: "rgba(245, 158, 11, 0.1)"
                }}
                className="relative block px-3 py-2 text-gray-300 hover:text-gold-400 font-medium transition-all duration-300 rounded-lg overflow-hidden"
                onClick={() => setIsOpen(false)}
              >
                {/* Mobile nav item hover effect - static */}
                <div className="absolute left-0 top-0 w-1 h-full bg-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Mobile nav item particles - static */}
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-1 h-1 bg-gold-400/60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <span className="relative z-10">{item.name}</span>
              </motion.a>
            ))}
            
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isOpen ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.4 }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 5px 15px rgba(245, 158, 11, 0.3)"
              }}
              className="relative block mx-3 mt-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white px-6 py-2 rounded-full font-medium text-center overflow-hidden"
              onClick={() => setIsOpen(false)}
            >
              {/* Mobile CTA background effect - static */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative z-10">Cotizar Proyecto</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
