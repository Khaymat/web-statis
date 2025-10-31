'use client'

import dynamic from 'next/dynamic'

const GalaxyPage = dynamic(() => import('@/app/galaxy/page'), {
  ssr: false,
  loading: () => <p className="text-white text-center">Loading galaxy...</p>,
})

export default function EasterEggView() {
  return <GalaxyPage />
}
