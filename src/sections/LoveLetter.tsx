import { motion } from 'framer-motion'
import { Heart, Mail, Pen, Sparkles, Star } from 'lucide-react'

const LoveLetter = () => {
  return (
    <section id="carta" className="relative py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Floating hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Heart className="w-3 h-3 text-rose-300/40 fill-rose-300/40" />
          </motion.div>
        ))}

        {/* Sparkles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            <Sparkles className="w-4 h-4 text-pink-400/30" />
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-6"
          >
            <Mail className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Mi Carta de Amor
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Las palabras que mi corazón necesita decirte
          </p>
        </motion.div>

        {/* Letter Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Letter Paper */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Paper texture */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 24px, #ccc 25px)`
            }}></div>

            {/* Decorative border */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 30px rgba(244, 114, 182, 0.2)",
                  "0 0 60px rgba(244, 114, 182, 0.4)",
                  "0 0 30px rgba(244, 114, 182, 0.2)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 border-4 border-gradient-to-r from-rose-200 to-pink-200 rounded-2xl"
            />

            <div className="relative p-8 md:p-12">
              {/* Date */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-right mb-8"
              >
                <p className="text-gray-500 italic">
                  {new Date().toLocaleDateString('es-ES', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </motion.div>

              {/* Greeting */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-display text-gray-800 flex items-center">
                  Para mi hermosa Jass
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Heart className="w-6 h-6 ml-2 text-rose-500 fill-rose-500" />
                  </motion.div>
                </h3>
              </motion.div>

              {/* Letter Content */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="text-lg"
                >
                  Mi querida Jass,
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.1 }}
                  className="text-lg"
                >
                  Hoy quiero detener el tiempo y contarte todo lo que llevo en el corazón. 
                  Cada día a tu lado es un regalo que atesoro profundamente. Tu sonrisa 
                  ilumina mis mañanas y tu amor me da fuerzas para ser mejor persona.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.3 }}
                  className="bg-gradient-to-r from-rose-50 to-pink-50 p-6 rounded-xl border-l-4 border-rose-400 relative overflow-hidden"
                >
                  {/* Decorative elements */}
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-2 right-2 w-6 h-6 text-rose-300/50"
                  >
                    <Star className="w-full h-full fill-current" />
                  </motion.div>
                  
                  <p className="text-lg italic text-rose-800 relative z-10">
                    "En este aniversario quiero recordarte que eres la melodía más hermosa 
                    de mi vida, la razón por la que cada día tiene sentido y el amor que 
                    quiero celebrar por toda la eternidad."
                  </p>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="text-lg"
                >
         
                  
                  Recuerdo perfectamente nuestro primer encuentro, como si fuera ayer. 
                  Desde ese momento supe que había encontrado algo especial. Nuestros 
                  recuerdos juntos son tesoros que guardo con cariño: nuestras risas, 
                  nuestras aventuras, incluso nuestras pequeñas discusiones que nos 
                  han hecho crecer como pareja.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.7 }}
                  className="text-lg"
                >
                  Quiero que sepas que mi amor por ti crece cada día. Eres mi compañera 
                  de vida, mi mejor amiga, mi confidente y mi gran amor. Gracias por 
                  amarme tal como soy, por apoyar mis sueños y por construir conmigo 
                  este hermoso futuro que tenemos por delante.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.9 }}
                  className="text-center py-6"
                >
                  <p className="text-xl font-semibold text-rose-600">
                    Te amo infinitamente y para siempre
                  </p>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7] 
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="flex justify-center mt-4"
                  >
                    <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 2.1 }}
                  className="text-right"
                >
                  <p className="text-lg">
                    Con todo mi amor,
                  </p>
                  <motion.div
                    animate={{ 
                      textShadow: [
                        "0 0 10px rgba(244, 114, 182, 0.3)",
                        "0 0 20px rgba(244, 114, 182, 0.6)",
                        "0 0 10px rgba(244, 114, 182, 0.3)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-2xl font-display font-bold text-rose-600 mt-2"
                  >
                    Dario
                  </motion.div>
                </motion.div>
              </div>

              {/* Decorative pen */}
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  x: [0, 2, -2, 0],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-4 right-4"
              >
                <Pen className="w-6 h-6 text-rose-400" />
              </motion.div>
            </div>
          </div>

          {/* Floating decorations around letter */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 360, 0],
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute -top-4 -left-4 w-8 h-8 bg-rose-400 rounded-full opacity-20"
          />
          
          <motion.div
            animate={{
              y: [0, 10, 0],
              rotate: [0, -360, 0],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-400 rounded-full opacity-30"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default LoveLetter
