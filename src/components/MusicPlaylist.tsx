import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Volume2, VolumeX, Music, SkipForward, SkipBack, Repeat, Shuffle, List, X } from 'lucide-react'

const MusicPlaylist = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [currentSong, setCurrentSong] = useState(0)
  const [isShuffled, setIsShuffled] = useState(false)
  const [isRepeating, setIsRepeating] = useState(false)
  const [showPlaylist, setShowPlaylist] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const audioRef = useRef<HTMLAudioElement>(null)

  // Lista de canciones románticas para Jass ❤️
  const playlist = [
    {
      id: 1,
      title: "Nuestra Canción Principal",
      artist: "Para Jass ❤️",
      src: "/music/love-song.m4a",
      duration: "♪♪♪"
    },
    {
      id: 2,
      title: "Canción del Corazón",
      artist: "Nuestros Recuerdos",
      src: "/music/song2.mp3",
      duration: "♪♪♪"
    },
    {
      id: 3,
      title: "Melodía de Amor",
      artist: "Momentos Especiales",
      src: "/music/song3.mp3",
      duration: "♪♪♪"
    },
    {
      id: 4,
      title: "Dulce Serenata",
      artist: "Solo para Ti",
      src: "/music/song4.mp3",
      duration: "♪♪♪"
    },
    {
      id: 5,
      title: "Eternamente Tuyo",
      artist: "Con Todo mi Amor",
      src: "/music/song5.mp3",
      duration: "♪♪♪"
    }
    // ¡Playlist romántica completa! 💕
  ]

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume
    }
  }, [volume])

  useEffect(() => {
    const audio = audioRef.current
    if (audio) {
      const updateTime = () => setCurrentTime(audio.currentTime)
      const updateDuration = () => setDuration(audio.duration)
      
      audio.addEventListener('timeupdate', updateTime)
      audio.addEventListener('loadedmetadata', updateDuration)
      audio.addEventListener('ended', handleSongEnd)

      return () => {
        audio.removeEventListener('timeupdate', updateTime)
        audio.removeEventListener('loadedmetadata', updateDuration)
        audio.removeEventListener('ended', handleSongEnd)
      }
    }
  }, [currentSong])

  const handleSongEnd = () => {
    if (isRepeating) {
      // Repetir la canción actual
      if (audioRef.current) {
        audioRef.current.currentTime = 0
        audioRef.current.play()
      }
    } else {
      // Ir a la siguiente canción
      nextSong()
    }
  }

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

  const nextSong = () => {
    let nextIndex
    if (isShuffled) {
      nextIndex = Math.floor(Math.random() * playlist.length)
    } else {
      nextIndex = (currentSong + 1) % playlist.length
    }
    setCurrentSong(nextIndex)
    
    // Auto-play la siguiente canción si estaba reproduciendo
    setTimeout(() => {
      if (isPlaying && audioRef.current) {
        audioRef.current.play()
      }
    }, 100)
  }

  const previousSong = () => {
    const prevIndex = currentSong === 0 ? playlist.length - 1 : currentSong - 1
    setCurrentSong(prevIndex)
    
    // Auto-play la canción anterior si estaba reproduciendo
    setTimeout(() => {
      if (isPlaying && audioRef.current) {
        audioRef.current.play()
      }
    }, 100)
  }

  const selectSong = (index: number) => {
    setCurrentSong(index)
    setShowPlaylist(false)
    
    // Auto-play la canción seleccionada si estaba reproduciendo
    setTimeout(() => {
      if (isPlaying && audioRef.current) {
        audioRef.current.play()
      }
    }, 100)
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value)
    setCurrentTime(newTime)
    if (audioRef.current) {
      audioRef.current.currentTime = newTime
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const currentTrack = playlist[currentSong]

  return (
    <>
      {/* Audio element */}
      <audio
        ref={audioRef}
        src={currentTrack?.src}
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Floating Music Player */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        className="fixed bottom-6 right-6 z-40"
      >
        {/* Main Player */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gradient-to-br from-rose-500/90 to-pink-600/90 backdrop-blur-sm border border-white/20 rounded-2xl p-4 shadow-2xl text-white min-w-[320px]"
        >
          {/* Song Info */}
          <div className="flex items-center space-x-3 mb-3">
            <motion.div
              animate={{ rotate: isPlaying ? 360 : 0 }}
              transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
              className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0"
            >
              <Music className="w-6 h-6" />
            </motion.div>
            
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm truncate">{currentTrack?.title}</h3>
              <p className="text-white/80 text-xs truncate">{currentTrack?.artist}</p>
            </div>

            <button
              onClick={() => setShowPlaylist(!showPlaylist)}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <List className="w-4 h-4" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="mb-3">
            <div className="flex items-center space-x-2 text-xs mb-1">
              <span>{formatTime(currentTime)}</span>
              <div className="flex-1 bg-white/20 rounded-full h-1">
                <motion.div
                  className="bg-white rounded-full h-full"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>
              <span>{formatTime(duration)}</span>
            </div>
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer opacity-0 absolute"
            />
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center space-x-4 mb-3">
            <button
              onClick={() => setIsShuffled(!isShuffled)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                isShuffled ? 'bg-white/30 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <Shuffle className="w-4 h-4" />
            </button>

            <button
              onClick={previousSong}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={togglePlay}
              className="w-12 h-12 bg-white/30 hover:bg-white/40 rounded-full flex items-center justify-center transition-colors"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-0.5" />}
            </motion.button>

            <button
              onClick={nextSong}
              className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsRepeating(!isRepeating)}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                isRepeating ? 'bg-white/30 text-white' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <Repeat className="w-4 h-4" />
            </button>
          </div>

          {/* Volume Control */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleMute}
              className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
            
            <div className="flex-1 bg-white/20 rounded-full h-2 relative">
              <motion.div
                className="bg-white rounded-full h-full"
                style={{ width: `${volume * 100}%` }}
              />
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
          </div>
        </motion.div>

        {/* Playlist Modal */}
        <AnimatePresence>
          {showPlaylist && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-full right-0 mb-4 bg-white/95 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-2xl p-4 min-w-[300px] max-h-[300px] overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-800">Lista de reproducción</h3>
                <button
                  onClick={() => setShowPlaylist(false)}
                  className="w-6 h-6 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center"
                >
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>

              <div className="space-y-2">
                {playlist.map((song, index) => (
                  <motion.div
                    key={song.id}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => selectSong(index)}
                    className={`p-3 rounded-xl cursor-pointer transition-colors ${
                      index === currentSong
                        ? 'bg-rose-100 border border-rose-200'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        index === currentSong ? 'bg-rose-500 text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index === currentSong && isPlaying ? (
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                          >
                            <Music className="w-4 h-4" />
                          </motion.div>
                        ) : (
                          <span className="text-xs font-medium">{index + 1}</span>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className={`font-medium text-sm truncate ${
                          index === currentSong ? 'text-rose-700' : 'text-gray-800'
                        }`}>
                          {song.title}
                        </p>
                        <p className={`text-xs truncate ${
                          index === currentSong ? 'text-rose-600' : 'text-gray-600'
                        }`}>
                          {song.artist}
                        </p>
                      </div>
                      
                      <span className={`text-xs ${
                        index === currentSong ? 'text-rose-600' : 'text-gray-500'
                      }`}>
                        {song.duration}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Floating Musical Notes */}
      {isPlaying && (
        <div className="fixed inset-0 pointer-events-none z-30">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100, -200],
                opacity: [0, 1, 0],
                x: [0, Math.random() * 100 - 50],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: '100%',
              }}
            >
              <Music className="w-6 h-6 text-rose-400/60" />
            </motion.div>
          ))}
        </div>
      )}
    </>
  )
}

export default MusicPlaylist
