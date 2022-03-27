import type { NextPage } from 'next'
import { Screen } from '../src/components'

// TODO: Lens flare splashes

const Home: NextPage = () => (
  <div className="h-full w-full fixed top-0 left-0 m-0 p-0 bg-stone-900">
    <Screen
      startTime={ 1636231620000 }
      galleryUrls={ [
        '/oles_victoria_logo.png',
        '/oles_victoria_logo.png',
        '/oles_victoria_logo.png',
        '/oles_victoria_logo.png',
        '/oles_victoria_logo.png',
      ] }
      logoUrl="/oles_victoria_logo.png"
    />
  </div>
)

export default Home
