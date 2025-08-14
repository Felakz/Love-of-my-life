import Hero from '../sections/Hero'
import LoveLetter from '../sections/LoveLetter'
import PhotoGallery from '../sections/PhotoGallery'
import AnniversaryCounter from '../sections/AnniversaryCounter'
import SurpriseLetters from '../sections/SurpriseLetters'
import MusicPlaylist from '../components/MusicPlaylist'
import RosePetals from '../components/RosePetals'

const Home = () => {
  return (
    <div>
      <Hero />
      <LoveLetter />
      <PhotoGallery />
      <AnniversaryCounter />
      <SurpriseLetters />
      <MusicPlaylist />
      <RosePetals />
    </div>
  )
}

export default Home
