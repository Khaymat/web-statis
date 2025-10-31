'use client'

import { useState, useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three-fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import * as random from 'maath/random/dist/maath-random.esm'

interface GalaxyProps {
  onStarClick: (index: number) => void
  resetCamera: boolean
}

export default function Galaxy({ onStarClick, resetCamera }: GalaxyProps) {
  const ref = useRef<any>()
  const { camera } = useThree()
  const [activeStar, setActiveStar] = useState<number | null>(null)
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

  const targetPosition = useRef(new THREE.Vector3())
  const initialCameraPosition = useRef(new THREE.Vector3(0, 0, 5))

  useEffect(() => {
    if (resetCamera) {
      setActiveStar(null)
    }
  }, [resetCamera])

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }

    if (activeStar !== null) {
      const starPosition = new THREE.Vector3().fromArray(sphere, activeStar * 3)
      targetPosition.current.copy(starPosition).multiplyScalar(1.2)
    } else {
      targetPosition.current.copy(initialCameraPosition.current)
    }

    camera.position.lerp(targetPosition.current, 0.02)
    state.camera.lookAt(0, 0, 0)
  })

  const handleStarClick = (index: number) => {
    if (activeStar === index) {
      setActiveStar(null)
    } else {
      setActiveStar(index)
      onStarClick(index)
    }
  }

  return (
    <>
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
          <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>

      {Array.from({ length: 5000 / 3 }).map((_, i) => (
        <mesh
          key={i}
          position={[sphere[i * 3], sphere[i * 3 + 1], sphere[i * 3 + 2]]}
          onClick={() => handleStarClick(i)}
        >
          <sphereGeometry args={[0.01, 16, 16]} />
          <meshBasicMaterial color="white" transparent opacity={0} />
        </mesh>
      ))}
    </>
  )
}
