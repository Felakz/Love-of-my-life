import { motion } from 'framer-motion'
import { Heart, Calendar, Clock, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const AnniversaryCounter = () => {
  const [timeData, setTimeData] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalDays: 0
  })

  // Fecha de inicio de la relación de Dario
  const anniversaryDate = new Date('2025-02-14T00:00:00') // 14 de febrero de 2025

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date()
      const diff = now.getTime() - anniversaryDate.getTime()

      if (diff > 0) {
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
        const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30))
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)
        const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24))

        setTimeData({ years, months, days, hours, minutes, seconds, totalDays })
      }
    }

    calculateTime()
    const interval = setInterval(calculateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const timeUnits = [
    { label: 'Años', value: timeData.years, icon: Calendar, color: 'from-rose-400 to-pink-500' },
    { label: 'Meses', value: timeData.months, icon: Heart, color: 'from-pink-400 to-rose-500' },
    { label: 'Días', value: timeData.days, icon: Star, color: 'from-rose-400 to-purple-500' },
    { label: 'Horas', value: timeData.hours, icon: Clock, color: 'from-pink-400 to-rose-600' }
  ]

  return (
    <section className="relative py-20 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        {/* Floating hearts */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0.3, 0.7, 0.3],
              scale: [0.8, 1.2, 0.8],
              rotate: [0, 360, 0],
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
            <Heart className="w-4 h-4 text-rose-300/40 fill-rose-300/30" />
          </motion.div>
        ))}

        {/* Romantic rays */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96"
        >
          <div className="absolute inset-0 bg-gradient-conic from-rose-300/20 via-transparent to-pink-300/20 rounded-full"></div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              rotate: [0, 10, -10, 0],
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mb-6"
          >
            <Heart className="w-8 h-8 text-white fill-white" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-800 mb-4">
            <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              Nuestro Tiempo Juntos
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Cada segundo a tu lado es un regalo que atesoro
          </p>

          {/* Fecha de inicio personalizable */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="inline-block bg-white/70 backdrop-blur-sm border border-rose-200 rounded-2xl p-4 mb-8"
          >
            <p className="text-gray-700">
              <span className="font-semibold">Desde:</span> {anniversaryDate.toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              ¡{timeData.totalDays} días maravillosos juntos!
            </p>
          </motion.div>
        </motion.div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {timeUnits.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                y: -10
              }}
              className="relative group"
            >
              {/* Card background */}
              <div className="relative overflow-hidden bg-white/80 backdrop-blur-sm border border-rose-200 rounded-3xl p-6 shadow-xl">
                {/* Animated background gradient */}
                <motion.div
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className={`absolute inset-0 bg-gradient-to-br ${unit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Floating icon */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="relative z-10 flex justify-center mb-4"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${unit.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <unit.icon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                {/* Counter value */}
                <motion.div
                  key={unit.value} // Re-anima cuando cambia el valor
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {unit.label}
                  </div>
                </motion.div>

                {/* Decorative elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                  className="absolute top-2 right-2 w-3 h-3 bg-rose-400 rounded-full"
                />
                
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.7 }}
                  className="absolute bottom-2 left-2 w-2 h-2 bg-pink-400 rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live seconds counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-rose-500/10 to-pink-600/10 backdrop-blur-sm border border-rose-300/30 rounded-3xl p-8 relative overflow-hidden">
            {/* Background animation */}
            <motion.div
              animate={{
                x: ['-100%', '100%'],
                opacity: [0, 0.3, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-rose-400/20 to-transparent"
            />

            <div className="relative z-10">
              <p className="text-gray-700 text-lg mb-4">
                En este preciso momento llevamos juntos:
              </p>
              
              <motion.div
                key={timeData.seconds} // Re-anima cada segundo
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.1 }}
                className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent"
              >
                {timeData.minutes.toString().padStart(2, '0')}:
                {timeData.seconds.toString().padStart(2, '0')}
              </motion.div>
              
              <p className="text-gray-600 mt-2">
                Minutos y segundos de amor puro
              </p>

              {/* Heartbeat effect */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 1, repeat: Infinity }}
                className="flex justify-center mt-6"
              >
                <Heart className="w-8 h-8 text-rose-500 fill-rose-500" />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Romantic message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <blockquote className="text-xl md:text-2xl text-gray-700 italic max-w-3xl mx-auto">
            "Cada momento contigo es un tesoro que guardo en mi corazón. 
            El tiempo vuela cuando estoy a tu lado, pero cada segundo vale una eternidad."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}

export default AnniversaryCounter
