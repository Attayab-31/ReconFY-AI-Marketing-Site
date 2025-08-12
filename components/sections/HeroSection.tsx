'use client'

import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Text3D, Float, Stars } from '@react-three/drei'
import Button from '@/components/ui/Button'
import { getDemoUrl, getAppUrl } from '@/config/website'

// 3D Logo Component
function Logo3D() {
  return (
    <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.4}>
      <Text3D
        font="/fonts/helvetiker_regular.typeface.json"
        size={1}
        height={0.2}
        curveSegments={8}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-2.5, 0, 0]}
      >
        RECONFY
        <meshStandardMaterial color="#01a4b7" />
      </Text3D>
    </Float>
  )
}

// Particle System Component - Optimized for performance
function ParticleSystem() {
  const particleCount = 60 // Reduced for better performance
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 16,
      (Math.random() - 0.5) * 16
    ] as [number, number, number],
    size: Math.random() * 0.08 + 0.03,
    speed: Math.random() * 0.3 + 0.1
  }))

  return (
    <group>
      {particles.map((particle) => (
        <Float key={particle.id} speed={particle.speed} rotationIntensity={0.3} floatIntensity={0.2}>
          <mesh position={particle.position}>
            <sphereGeometry args={[particle.size, 6, 6]} />
            <meshStandardMaterial color="#38bdf8" transparent opacity={0.5} />
          </mesh>
        </Float>
      ))}
    </group>
  )
}

// Geometric Shapes Component - Optimized for performance
function GeometricShapes() {
  return (
    <group>
      {/* Floating Cubes */}
      <Float speed={1} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh position={[-3, 2, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#01a4b7" transparent opacity={0.6} />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.4}>
        <mesh position={[3, -2, 0]}>
          <boxGeometry args={[0.4, 0.4, 0.4]} />
          <meshStandardMaterial color="#38bdf8" transparent opacity={0.6} />
        </mesh>
      </Float>

      {/* Floating Spheres */}
      <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.3}>
        <mesh position={[0, 3, 0]}>
          <sphereGeometry args={[0.25, 12, 12]} />
          <meshStandardMaterial color="#018a9a" transparent opacity={0.6} />
        </mesh>
      </Float>

      <Float speed={1.3} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh position={[0, -3, 0]}>
          <sphereGeometry args={[0.25, 12, 12]} />
          <meshStandardMaterial color="#0ea5e9" transparent opacity={0.6} />
        </mesh>
      </Float>
    </group>
  )
}

export default function HeroSection() {
  const scrollToFeatures = () => {
    const featuresElement = document.getElementById('features')
    if (featuresElement) {
      window.scrollTo({
        top: featuresElement.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }



  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background 3D Canvas - Optimized */}
      <div className="absolute inset-0 z-0">
        <Canvas 
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: false,
            stencil: false,
            depth: true
          }}
          dpr={[1, 1.5]} // Reduced for better performance
          performance={{ min: 0.5 }}
        >
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={0.8} />
          <pointLight position={[-10, -10, -10]} intensity={0.4} />

          <Suspense fallback={null}>
            <Logo3D />
            <ParticleSystem />
            <GeometricShapes />
            <Stars radius={80} depth={40} count={1500} factor={3} saturation={0} fade speed={0.8} />
          </Suspense>

          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.3}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          className="text-5xl md:text-7xl font-display font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transform Your Business with{' '}
          <span className="bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent">
            Intelligent Profit Analysis
          </span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Optimize commissions, track profits, and manage workflows with AI-powered insights. 
          Make data-driven decisions that boost your bottom line.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" onClick={() => window.open(getAppUrl(), '_blank')}>
            Start Free Trial
          </Button>
          <Button variant="outline" size="lg" onClick={() => window.open(getDemoUrl(), '_blank')}>
            Watch Demo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}