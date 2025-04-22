// components/NeonGrid.tsx
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export const NeonGrid = ({ intensity = 0 }) => {
  const gridRef = useRef()
  
  useFrame((state) => {
    // Use the intensity value to adjust grid properties
    gridRef.current.material.opacity = 0.2 + intensity * 0.3
    gridRef.current.material.emissiveIntensity = 0.5 + intensity * 0.5
  })

  return (
    <mesh ref={gridRef}>
      {/* Your grid geometry and material */}
    </mesh>
  )
}