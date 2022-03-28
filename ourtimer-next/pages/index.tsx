import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { Screen } from '../src/components'
import { ScreenContext } from '../src/contexts'
import { DataSpecKey, dataSpecs, getDataSpec, getSavedDataSpecKey, setSavedDataSpecKey } from '../src/dataSpecs'

const Home: NextPage = () => {
  const [ dataSpecKey, setDataSpecKey ] = useState<DataSpecKey | null>(null)

  function changeDataSpec (key: DataSpecKey): void {
    setDataSpecKey(key)
    setSavedDataSpecKey(key)
  }

  function resetDataSpec (): void {
    changeDataSpec(dataSpecs[0].key)
  }

  useEffect(() => {
    changeDataSpec(getSavedDataSpecKey())
  }, [])

  if(!dataSpecKey) {
    return (
      <div className="w-screen flex flex-col items-center gap-y-5">
        <pre>Mounting...</pre>
      </div>
    )
  }

  const dataSpec = getDataSpec(dataSpecKey)

  if (!dataSpec) {
    return (
      <div className="w-screen flex flex-col items-center gap-y-5">
        <pre>Error: Unknown DataSpec</pre>
        <button onClick={ resetDataSpec }>Reset cache</button>
      </div>
    )
  }

  return (
    <div className="h-full w-full fixed top-0 left-0 m-0 p-0 bg-stone-900">
      <ScreenContext.Provider value={dataSpec}>
        <Screen
          onSelectDataSpec={ changeDataSpec }
        />
      </ScreenContext.Provider>
    </div>
  )
}

export default Home
