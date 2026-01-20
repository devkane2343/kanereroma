"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import * as THREE_NS from "three"

function DigitalGrid() {
  const gridRef = useRef<THREE.GridHelper>(null)

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.y = -2 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <>
      <gridHelper ref={gridRef} args={[20, 20, "#3b82f6", "#1e40af"]} position={[0, -2, 0]} />
      <gridHelper args={[20, 20, "#3b82f6", "#1e40af"]} position={[0, -2, 0]} rotation={[Math.PI / 2, 0, 0]} />
    </>
  )
}

function NetworkNodes() {
  const groupRef = useRef<THREE.Group>(null)

  const nodes = useMemo(() => {
    const nodePositions: [number, number, number][] = []
    for (let i = 0; i < 15; i++) {
      nodePositions.push([(Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8])
    }
    return nodePositions
  }, [])

  const lines = useMemo(() => {
    const lineObjects: THREE.Line[] = []
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const distance = Math.sqrt(
          Math.pow(nodes[i][0] - nodes[j][0], 2) +
            Math.pow(nodes[i][1] - nodes[j][1], 2) +
            Math.pow(nodes[i][2] - nodes[j][2], 2),
        )
        if (distance < 4) {
          const points = [new THREE_NS.Vector3(...nodes[i]), new THREE_NS.Vector3(...nodes[j])]
          const geometry = new THREE_NS.BufferGeometry().setFromPoints(points)
          const material = new THREE_NS.LineBasicMaterial({ color: "#3b82f6", transparent: true, opacity: 0.3 })
          const line = new THREE_NS.Line(geometry, material)
          lineObjects.push(line)
        }
      }
    }
    return lineObjects
  }, [nodes])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {nodes.map((position, i) => (
        <mesh key={i} position={position}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.5} />
        </mesh>
      ))}
      {lines.map((line, i) => (
        <primitive key={i} object={line} />
      ))}
    </group>
  )
}

function DataParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 200

  const { positions, velocities } = useMemo(() => {
    const pos = new Float32Array(particleCount * 3)
    const vel = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
      vel[i * 3 + 1] = Math.random() * 0.02 + 0.01
    }
    return { positions: pos, velocities: vel }
  }, [])

  useFrame(() => {
    if (particlesRef.current) {
      const pos = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += velocities[i * 3 + 1]
        if (pos[i * 3 + 1] > 10) {
          pos[i * 3 + 1] = -10
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#60a5fa" transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

function WireframeCubes() {
  const group1Ref = useRef<THREE.Group>(null)
  const group2Ref = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (group1Ref.current) {
      group1Ref.current.rotation.x = state.clock.getElapsedTime() * 0.2
      group1Ref.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
    if (group2Ref.current) {
      group2Ref.current.rotation.x = -state.clock.getElapsedTime() * 0.15
      group2Ref.current.rotation.z = state.clock.getElapsedTime() * 0.25
    }
  })

  return (
    <>
      <group ref={group1Ref} position={[-4, 2, -3]}>
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshBasicMaterial color="#3b82f6" wireframe />
        </mesh>
      </group>
      <group ref={group2Ref} position={[4, -2, -4]}>
        <mesh>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshBasicMaterial color="#60a5fa" wireframe />
        </mesh>
      </group>
    </>
  )
}

export function ThreeScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[10, 10, 5]} intensity={0.5} />
        <pointLight position={[0, 5, 5]} intensity={0.8} color="#3b82f6" />
        <pointLight position={[0, -5, -5]} intensity={0.5} color="#1e40af" />

        <DigitalGrid />
        <NetworkNodes />
        <DataParticles />
        <WireframeCubes />
      </Canvas>
    </div>
  )
}
