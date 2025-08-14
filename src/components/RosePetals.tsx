import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Petal {
  id: number
  x: number
  y: number
  rotation: number
  scale: number
  duration: number
  delay: number
}

const RosePetals = () => {
  const [petals, setPetals] = useState<Petal[]>([])

  useEffect(() => {
    // Crear pétalos iniciales
    const initialPetals: Petal[] = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: -50,
      rotation: Math.random() * 360,
      scale: Math.random() * 0.5 + 0.5,
      duration: Math.random() * 3 + 4,
      delay: Math.random() * 2
    }))
    
    setPetals(initialPetals)

    // Agregar nuevos pétalos cada cierto tiempo
    const interval = setInterval(() => {
      setPetals(prev => {
        const newPetals = Array.from({ length: 3 }, (_, i) => ({
          id: Date.now() + i,
          x: Math.random() * window.innerWidth,
          y: -50,
          rotation: Math.random() * 360,
          scale: Math.random() * 0.5 + 0.5,
          duration: Math.random() * 3 + 4,
          delay: 0
        }))
        
        // Mantener solo los últimos 20 pétalos para rendimiento
        return [...prev.slice(-17), ...newPetals]
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          initial={{
            x: petal.x,
            y: petal.y,
            rotate: petal.rotation,
            scale: petal.scale,
          }}
          animate={{
            y: window.innerHeight + 100,
            x: petal.x + (Math.sin(petal.id) * 100),
            rotate: petal.rotation + 360,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            ease: "easeOut",
            repeat: Infinity,
          }}
        >
          {/* Pétalo de rosa SVG */}
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            className="text-rose-400/70"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Pétalos más grandes ocasionales */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`large-${i}`}
          className="absolute"
          animate={{
            x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
            y: [-50, window.innerHeight + 100],
            rotate: [0, 720],
            scale: [0.8, 1.2, 0.6],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 8,
            delay: i * 3,
            ease: "easeOut",
            repeat: Infinity,
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            className="text-pink-300/50"
            fill="currentColor"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Efectos de brillo ocasionales */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute w-2 h-2"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            delay: i * 4,
            repeat: Infinity,
          }}
        >
          <div className="w-full h-full bg-rose-400 rounded-full blur-sm"></div>
        </motion.div>
      ))}
    </div>
  )
}

export default RosePetals
