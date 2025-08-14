import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react'

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
  }

  return (
    <>
      {/* Audio element - Cambia la ruta por tu archivo M4A */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/music/love-song.m4a" type="audio/mp4" />
        <source src="/music/love-song.mp3" type="audio/mpeg" />
        Tu navegador no soporta el elemento de audio.
      </audio>

      {/* Music Control Panel */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-r from-rose-500/20 to-pink-600/20 backdrop-blur-md rounded-2xl border border-rose-300/30 p-4 shadow-xl"
        >
          {/* Music visualizer decoration */}
          <div className="flex items-center justify-center mb-3">
            <motion.div
              animate={isPlaying ? {
                scale: [1, 1.2, 1],
                rotate: [0, 360, 0],
              } : {}}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-rose-400"
            >
              <Music className="w-6 h-6" />
            </motion.div>
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            {/* Play/Pause Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={togglePlay}
              className="w-12 h-12 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </motion.button>

            {/* Volume Control */}
            <div className="flex items-center space-x-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMute}
                className="text-rose-400 hover:text-rose-300 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </motion.button>

              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-16 h-1 bg-rose-300/30 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #f472b6 0%, #f472b6 ${volume * 100}%, rgba(244, 114, 182, 0.3) ${volume * 100}%, rgba(244, 114, 182, 0.3) 100%)`
                }}
              />
            </div>
          </div>

          {/* Music info */}
          <motion.div
            animate={isPlaying ? { opacity: 1 } : { opacity: 0.7 }}
            className="mt-3 text-center"
          >
            <p className="text-xs text-rose-200 font-medium">
              {isPlaying ? "Reproduciendo..." : "Pausado"}
            </p>
            <p className="text-xs text-rose-300/70">
              Nuestra canción especial
            </p>
          </motion.div>

          {/* Floating musical notes when playing */}
          {isPlaying && (
            <div className="absolute -top-2 -left-2 pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    x: [0, Math.sin(i) * 10, 0],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  className="absolute text-rose-400"
                  style={{
                    left: `${i * 15}px`,
                  }}
                >
                  ♪
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>

      {/* Welcome message for music */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="fixed bottom-6 left-6 z-40"
      >
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-rose-300/30 max-w-xs">
          <div className="flex items-center space-x-3">
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Music className="w-5 h-5 text-rose-400" />
            </motion.div>
            <div>
              <p className="text-sm text-white font-medium">
                🎵 Música de fondo
              </p>
              <p className="text-xs text-rose-200">
                Haz clic en el reproductor para escuchar nuestra canción
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Custom CSS for slider */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #f472b6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #f472b6;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }
        `
      }} />
    </>
  )
}

export default BackgroundMusic
