// components/FloatingLogos.tsx
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
import { useRef } from 'react'

const FloatingLogo = ({ children, position, color }: any) => {
  const ref = useRef<THREE.Group>(null!)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    ref.current.position.y = position[1] + Math.sin(time * 0.5) * 0.2
    ref.current.rotation.y = time * 0.2
  })

  return (
    <group ref={ref} position={position}>
      <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
        size={0.5}
        height={0.1}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {children}
        <meshStandardMaterial color={color} />
      </Text3D>
    </group>
  )
}

export const FloatingLogos = () => {
  return (
    <div className="w-full h-64 md:h-96 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FloatingLogo position={[-3, 1, 0]} color="#F7DF1E">JS</FloatingLogo>
        <FloatingLogo position={[3, -1, 0]} color="#3178C6">TS</FloatingLogo>
        <FloatingLogo position={[0, 2, 0]} color="#61DAFB">React</FloatingLogo>
        <FloatingLogo position={[0, -2, 0]} color="#000000">Next</FloatingLogo>
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
      </Canvas>
    </div>
  )
}