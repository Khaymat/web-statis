'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function FlowerModel() {
  const { scene } = useGLTF('/flower.glb')
  return <primitive object={scene} />
}

export default function FlowerScene() {
  return (
    <div className="w-full h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <FlowerModel />
        <OrbitControls />
      </Canvas>
    </div>
  )
}