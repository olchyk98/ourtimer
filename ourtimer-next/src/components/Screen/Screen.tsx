import { useContext } from 'react'
import { ScreenContext } from '../../contexts'
import { DataSpecKey, dataSpecs, getIndexForSpec } from '../../dataSpecs'
import { GalleryCarousel } from '../GalleryCarousel'
import { Logo } from '../Logo'
import { PathMenu } from '../PathMenu'
import { TimerContainer } from '../TimerContainer'

export const Screen = ({ onSelectDataSpec }: ScreenProps): React.ReactElement => {
  const { logoUrl, key: dataSpecKey } = useContext(ScreenContext)

  return (
    <div className="h-full w-full flex flex-col items-center justify-between sm:p-10 px-2 py-5">
      <div className="relative flex gap-y-5 flex-col items-center">
        <PathMenu
          itemsCount={dataSpecs.length}
          selectedIndex={getIndexForSpec(dataSpecKey)}
          onSelect={ (index) => onSelectDataSpec(dataSpecs[index].key) }
          direction="horizontal"
        />
        <Logo
          src={logoUrl}
          height={80}
        />
      </div>
      <TimerContainer />
      <GalleryCarousel
        lifeTime={5e3}
      />
    </div>
  )
}

export interface ScreenProps {
  onSelectDataSpec(key: DataSpecKey): void
}
