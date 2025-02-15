"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';

export function DeliveryPerson() {
  const group = useRef<Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      const t = state.clock.elapsedTime;
      
      // Natural walking animation with smooth transitions
      group.current.position.y = Math.sin(t * 2) * 0.02; // Subtle body bounce
      
      // Enhanced body movement
      if (group.current.children[1]) { // Body
        group.current.children[1].rotation.z = Math.sin(t * 2) * 0.02;
        group.current.children[1].rotation.x = Math.sin(t * 2) * 0.01; // Slight forward/backward tilt
      }
      
      // More natural arms movement
      if (group.current.children[2] && group.current.children[3]) { // Arms
        const armSwing = Math.sin(t * 2) * 0.05;
        const armTwist = Math.sin(t * 2) * 0.02; // Slight rotation along arm axis
        group.current.children[2].rotation.z = -Math.PI / 6 + armSwing;
        group.current.children[2].rotation.y = armTwist;
        group.current.children[3].rotation.z = Math.PI / 6 - armSwing;
        group.current.children[3].rotation.y = -armTwist;
      }
      
      // Legs movement
      if (group.current.children[4] && group.current.children[5]) { // Legs
        const legSwing = Math.sin(t * 2) * 0.15;
        group.current.children[4].rotation.x = legSwing;
        group.current.children[5].rotation.x = -legSwing;
      }
    }
  });

  return (
    <group ref={group} position={[0, -0.5, 0]} scale={0.6}>
      {/* Head remains the same */}
      <group position={[0, 1.7, 0]}>
        <mesh>
          <sphereGeometry args={[0.22, 32, 32]} />
          <meshStandardMaterial color="#E6B89C" roughness={0.6} />
        </mesh>
        <mesh position={[0.22, 0, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#E6B89C" roughness={0.6} />
        </mesh>
        <mesh position={[-0.22, 0, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="#E6B89C" roughness={0.6} />
        </mesh>
        <mesh position={[0.08, 0.05, 0.18]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.1} />
        </mesh>
        <mesh position={[-0.08, 0.05, 0.18]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.1} />
        </mesh>
        <mesh position={[0, -0.02, 0.2]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#E6B89C" roughness={0.7} />
        </mesh>
        <mesh position={[0, -0.1, 0.18]} rotation={[0.2, 0, 0]}>
          <boxGeometry args={[0.1, 0.02, 0.01]} />
          <meshStandardMaterial color="#c1665a" roughness={0.6} />
        </mesh>
      </group>
      
      {/* Enhanced neck with muscles */}
      <group position={[0, 1.5, 0]}>
        <mesh>
          <cylinderGeometry args={[0.08, 0.1, 0.2, 16]} />
          <meshStandardMaterial color="#E6B89C" roughness={0.7} />
        </mesh>
        {/* Neck muscles */}
        <mesh position={[0.06, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
          <cylinderGeometry args={[0.02, 0.02, 0.18, 8]} />
          <meshStandardMaterial color="#E6B89C" roughness={0.7} />
        </mesh>
        <mesh position={[-0.06, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <cylinderGeometry args={[0.02, 0.02, 0.18, 8]} />
          <meshStandardMaterial color="#E6B89C" roughness={0.7} />
        </mesh>
      </group>

      {/* Enhanced torso with better muscle definition */}
      <group position={[0, 1, 0]}>
        {/* Chest */}
        <mesh position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.32, 0.35, 0.4, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} metalness={0.1} />
        </mesh>
        {/* Shoulders */}
        <mesh position={[0.3, 0.3, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} metalness={0.1} />
        </mesh>
        <mesh position={[-0.3, 0.3, 0]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} metalness={0.1} />
        </mesh>
        {/* Upper back */}
        <mesh position={[0, 0.2, -0.1]} rotation={[0.1, 0, 0]}>
          <boxGeometry args={[0.5, 0.3, 0.1]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} metalness={0.1} />
        </mesh>
        {/* Abdomen */}
        <mesh position={[0, -0.1, 0]}>
          <cylinderGeometry args={[0.35, 0.32, 0.4, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} metalness={0.1} />
        </mesh>
        {/* Lower back */}
        <mesh position={[0, -0.1, -0.1]} rotation={[-0.1, 0, 0]}>
          <boxGeometry args={[0.4, 0.3, 0.1]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} metalness={0.1} />
        </mesh>
      </group>
      
      {/* Enhanced arms with better muscle definition */}
      <group position={[0.4, 1.3, 0]}>
        {/* Shoulder muscle */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} />
        </mesh>
        {/* Upper arm with bicep */}
        <mesh rotation={[0, 0, -Math.PI / 6]}>
          <cylinderGeometry args={[0.08, 0.07, 0.4, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} />
        </mesh>
        {/* Bicep bulge */}
        <mesh position={[0.1, -0.1, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} />
        </mesh>
        {/* Elbow joint */}
        <mesh position={[0.15, -0.15, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} />
        </mesh>
        {/* Forearm with muscle definition */}
        <mesh position={[0.25, -0.25, 0]} rotation={[0, 0, -Math.PI / 6]}>
          <cylinderGeometry args={[0.07, 0.06, 0.35, 16]} />
          <meshStandardMaterial color="#E6B89C" roughness={0.7} />
        </mesh>
        {/* Enhanced hand with fingers */}
        <group position={[0.35, -0.35, 0]}>
          {/* Palm */}
          <mesh>
            <boxGeometry args={[0.12, 0.08, 0.04]} />
            <meshStandardMaterial color="#E6B89C" roughness={0.7} />
          </mesh>
          {/* Thumb */}
          <mesh position={[-0.04, 0, 0.03]} rotation={[0, -Math.PI / 4, 0]}>
            <capsuleGeometry args={[0.015, 0.05]} />
            <meshStandardMaterial color="#E6B89C" roughness={0.7} />
          </mesh>
          {/* Fingers */}
          {[...Array(4)].map((_, i) => (
            <mesh
              key={i}
              position={[0.04, 0.03 - i * 0.02, 0]}
              rotation={[0, 0, Math.PI / 8]}
            >
              <capsuleGeometry args={[0.012, 0.06]} />
              <meshStandardMaterial color="#E6B89C" roughness={0.7} />
            </mesh>
          ))}
        </group>
      </group>

      {/* Mirror the enhanced arm for the left side */}
      <group position={[-0.4, 1.3, 0]}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} />
        </mesh>
        <mesh rotation={[0, 0, Math.PI / 6]}>
          <cylinderGeometry args={[0.08, 0.07, 0.4, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} />
        </mesh>
        <mesh position={[-0.1, -0.1, 0]}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} />
        </mesh>
        <mesh position={[-0.15, -0.15, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#2563eb" roughness={0.6} />
        </mesh>
        <mesh position={[-0.25, -0.25, 0]} rotation={[0, 0, Math.PI / 6]}>
          <cylinderGeometry args={[0.07, 0.06, 0.35, 16]} />
          <meshStandardMaterial color="#E6B89C" roughness={0.7} />
        </mesh>
        <group position={[-0.35, -0.35, 0]} rotation={[0, Math.PI, 0]}>
          <mesh>
            <boxGeometry args={[0.12, 0.08, 0.04]} />
            <meshStandardMaterial color="#E6B89C" roughness={0.7} />
          </mesh>
          <mesh position={[-0.04, 0, 0.03]} rotation={[0, -Math.PI / 4, 0]}>
            <capsuleGeometry args={[0.015, 0.05]} />
            <meshStandardMaterial color="#E6B89C" roughness={0.7} />
          </mesh>
          {[...Array(4)].map((_, i) => (
            <mesh
              key={i}
              position={[0.04, 0.03 - i * 0.02, 0]}
              rotation={[0, 0, Math.PI / 8]}
            >
              <capsuleGeometry args={[0.012, 0.06]} />
              <meshStandardMaterial color="#E6B89C" roughness={0.7} />
            </mesh>
          ))}
        </group>
      </group>
      
      {/* Legs */}
      <group position={[0.2, 0.4, 0]}>
        <mesh>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#1f2937" roughness={0.6} />
        </mesh>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.11, 0.09, 0.6, 16]} />
          <meshStandardMaterial color="#1f2937" roughness={0.6} />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#1f2937" roughness={0.6} />
        </mesh>
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[0.09, 0.07, 0.5, 16]} />
          <meshStandardMaterial color="#1f2937" roughness={0.6} />
        </mesh>
        <mesh position={[0, -1.15, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#1f2937" roughness={0.6} />
        </mesh>
      </group>

      <group position={[-0.2, 0.4, 0]}>
        <mesh>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial color="#1f2937" roughness={0.6} />
        </mesh>
        <mesh position={[0, -0.3, 0]}>
          <cylinderGeometry args={[0.11, 0.09, 0.6, 16]} />
          <meshStandardMaterial color="#1f2937" roughness={0.6} />
        </mesh>
        <mesh position={[0, -0.6, 0]}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#1f2937" roughness={0.6} />
        </mesh>
        <mesh position={[0, -0.9, 0]}>
          <cylinderGeometry args={[0.09, 0.07, 0.5, 16]} />
          <meshStandardMaterial color="#1f2937" roughness={0.6} />
        </mesh>
        <mesh position={[0, -1.15, 0]}>
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshStandardMaterial color="#1f2937" roughness={0.6} />
        </mesh>
      </group>
      
      {/* Shoes */}
      <group position={[0.2, -0.8, 0]}>
        <mesh position={[0, 0, 0.1]}>
          <boxGeometry args={[0.2, 0.12, 0.35]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </mesh>
        <mesh position={[0, -0.06, 0.1]}>
          <boxGeometry args={[0.22, 0.02, 0.37]} />
          <meshStandardMaterial color="#27272a" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.06, 0.15]}>
          <boxGeometry args={[0.16, 0.01, 0.2]} />
          <meshStandardMaterial color="#e5e5e5" roughness={0.4} />
        </mesh>
      </group>
      
      <group position={[-0.2, -0.8, 0]}>
        <mesh position={[0, 0, 0.1]}>
          <boxGeometry args={[0.2, 0.12, 0.35]} />
          <meshStandardMaterial color="#0f172a" roughness={0.8} />
        </mesh>
        <mesh position={[0, -0.06, 0.1]}>
          <boxGeometry args={[0.22, 0.02, 0.37]} />
          <meshStandardMaterial color="#27272a" roughness={0.6} />
        </mesh>
        <mesh position={[0, 0.06, 0.15]}>
          <boxGeometry args={[0.16, 0.01, 0.2]} />
          <meshStandardMaterial color="#e5e5e5" roughness={0.4} />
        </mesh>
      </group>
      
      {/* Cap */}
      <group position={[0, 1.95, 0]}>
        <mesh>
          <cylinderGeometry args={[0.23, 0.23, 0.15, 32]} />
          <meshStandardMaterial color="#2563eb" roughness={0.5} />
        </mesh>
        <mesh position={[0.12, 0, 0.12]} rotation={[0.1, -0.4, 0]}>
          <boxGeometry args={[0.3, 0.02, 0.2]} />
          <meshStandardMaterial color="#2563eb" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0, 0.24]} rotation={[0, 0, 0]}>
          <planeGeometry args={[0.15, 0.08]} />
          <meshStandardMaterial color="#ffffff" roughness={0.4} metalness={0.2} />
        </mesh>
      </group>
      
      {/* Logos */}
      <mesh position={[0, 1.1, 0.36]}>
        <planeGeometry args={[0.4, 0.4]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} metalness={0.2} />
      </mesh>
      
      <mesh position={[0.25, 1.2, 0.36]}>
        <planeGeometry args={[0.4, 0.15]} />
        <meshStandardMaterial color="#ffffff" roughness={0.4} />
      </mesh>
    </group>
  );
}