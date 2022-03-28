import { findIndex } from 'ramda'

export const dataSpecs: DataSpec[] = [
  {
    key: 'VictoriaOles',
    logoUrl: '/oles_victoria_logo.svg',
    galleryUrls: [
      '/IMG_5527 2.bb4e9f92.png',
      '/IMG_5765.518a1540.png',
      '/IMG_5766.5c5f37a0.png',
      '/lp_image.2965205a.png',
    ],
    startTime: 1636231620000,
  },
  {
    key: 'MarkoMinja',
    logoUrl: '/marko_minja_logo.svg',
    galleryUrls: [
      '/274808002_998658917713949_3226857673579248529_n.jpg',
      '/274787122_139163838589666_2090130431360998068_n.jpg',
      '/274808180_478428867242424_1796974341138344377_n.jpg',
    ],
    startTime: 1634755278000,
  }
]

export const getIndexForSpec = (key: DataSpecKey): number | -1 => (
  findIndex((i) => i.key === key, dataSpecs)
)

export const getDataSpec = (key: DataSpecKey): DataSpec | null => {
  const specIndex = getIndexForSpec(key)

  if(specIndex === -1) {
    return null
  }

  return dataSpecs[specIndex]
}

export const setSavedDataSpecKey = (key: DataSpecKey): void => {
  localStorage.setItem('dataSpecKey', key)
}

export const getSavedDataSpecKey = (): DataSpecKey => (
  <DataSpecKey | null> localStorage.getItem('dataSpecKey') || getDefaultDataSpec()
)

export const getDefaultDataSpec = (): DataSpecKey => (
  dataSpecs[0].key
)

export type DataSpecKey = 'MarkoMinja' | 'VictoriaOles'

export interface DataSpec {
  key: DataSpecKey
  logoUrl: string
  galleryUrls: string[]
  startTime: number
}