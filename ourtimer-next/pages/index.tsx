import type { NextPage } from 'next'
import { TimerContainer } from '../src/components'

// TODO: Lens flare splashes

const Home: NextPage = () => (
  <div className="h-full w-full fixed top-0 left-0 m-0 p-0 bg-stone-900">
    <TimerContainer
      startTime={ 0 }
      galleryUrls={ [] }
      logoUrl="/oles_victoria_logo.png"
    />
  </div>
)

export default Home
