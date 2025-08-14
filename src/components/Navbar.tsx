import { useState, useEffect, createElement } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Heart, Star, Music } from 'lucide-react'

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
    { name: 'Carta de Amor', href: '#carta' },
    { name: 'Nuestros Recuerdos', href: '#galeria' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        isScrolled
          ? 'bg-gradient-to-r from-rose-900/95 to-pink-900/95 backdrop-blur-md shadow-2xl border-b border-rose-400/20'
          : 'bg-gradient-to-r from-rose-900/80 to-pink-900/80 backdrop-blur-sm'
      }`}
    >
      {/* Romantic background effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-300/20"
            style={{
              left: `${10 + i * 12}%`,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            animate={{
              y: [-2, 2, -2],
              opacity: [0.2, 0.5, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          >
            <Heart className="w-3 h-3 fill-current" />
          </motion.div>
        ))}

        {/* Romantic scanning beam */}
        <motion.div
          className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rose-400/40 to-transparent"
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />

        {/* Sparkle effects */}
        {[Star, Music].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-rose-400/10"
            style={{
              left: `${25 + (i * 50)}%`,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
            animate={{
              rotate: [0, 360, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 8 + i * 2, repeat: Infinity }}
          >
            {createElement(Icon, { size: 14 })}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo romántico */}
          <motion.div
            className="flex items-center space-x-3 relative cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => scrollToSection('#hero')}
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 0 rgba(244, 114, 182, 0)',
                    '0 0 20px rgba(244, 114, 182, 0.5)',
                    '0 0 0 rgba(244, 114, 182, 0)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-12 h-12 bg-gradient-to-br from-rose-400/20 to-pink-600/20 rounded-full flex items-center justify-center overflow-hidden border border-rose-300/30"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360, 0],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <Heart className="w-6 h-6 text-rose-400 fill-rose-400" />
                </motion.div>
              </motion.div>
            </div>
            
            <div className="relative">
              <motion.span 
                className="text-2xl font-bold bg-gradient-to-r from-rose-300 to-pink-300 bg-clip-text text-transparent"
                animate={{
                  textShadow: [
                    "0 0 10px rgba(244, 114, 182, 0.3)",
                    "0 0 20px rgba(244, 114, 182, 0.6)",
                    "0 0 10px rgba(244, 114, 182, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Nuestro Amor
              </motion.span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="relative"
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="relative text-rose-200 hover:text-rose-300 font-medium transition-all duration-300 group"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-rose-400/10 to-transparent opacity-0 rounded-lg -m-2 p-2"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  <span className="relative z-10">{item.name}</span>
                  
                  <motion.span 
                    className="absolute left-0 bottom-0 h-0.5 bg-gradient-to-r from-rose-400 to-pink-500"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Floating heart on hover */}
                  <motion.div
                    className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100"
                    animate={{
                      y: [0, -5, 0],
                      scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-3 h-3 text-rose-400 fill-rose-400" />
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative text-rose-200 hover:text-rose-300 transition-colors p-2"
            >
              <div className="absolute inset-0 bg-rose-400/10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 rounded-lg border border-rose-400/30 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
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
          className="lg:hidden overflow-hidden bg-gradient-to-br from-rose-900/95 to-pink-900/95 border-t border-rose-400/20 relative backdrop-blur-md"
        >
          {/* Mobile menu romantic effects */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${20 + i * 20}%`,
                  top: `${30 + i * 15}%`,
                }}
                animate={{
                  scale: [0.5, 1, 0.5],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                }}
              >
                <Heart className="w-2 h-2 text-rose-300/30 fill-rose-300/20" />
              </motion.div>
            ))}
          </div>
          
          <div className="relative z-10 px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  x: 5,
                  backgroundColor: "rgba(244, 114, 182, 0.1)"
                }}
                className="relative"
              >
                <button
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-rose-200 hover:text-rose-300 font-medium transition-all duration-300 rounded-lg overflow-hidden"
                >
                  <div className="absolute left-0 top-0 w-1 h-full bg-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">{item.name}</span>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}

export default Navbar
