'use client'

import dynamic from 'next/dynamic'

const GalaxyView = dynamic(() => import('@/app/components/GalaxyView'), {
  ssr: false,
  loading: () => <p className="text-white text-center">Loading experience...</p>,
})

export default function GalaxyPage() {
  return <GalaxyView />
}
