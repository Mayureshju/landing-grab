"use client";

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import { DeliveryPerson } from './DeliveryPerson';

const DeliveryBox: React.FC = () => {
  const groupRef = useRef<Group>(null);
    const boxRef = useRef<Mesh>(null);
  const tapeRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      groupRef.current.position.y = Math.sin(t * 1.5) * 0.03 + 0.7;
      groupRef.current.rotation.x = Math.sin(t * 1.5) * 0.02;
    }
  });

  return (
    <>
      <DeliveryPerson />
      
      <group ref={groupRef} position={[0, 0.7, 0.4]} scale={0.4} rotation={[0, 0, 0]}>
        <mesh ref={boxRef} scale={[1.5, 1, 1]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#e2b97c" roughness={0.7} metalness={0.1} />
        </mesh>

        <mesh position={[0, 0, 0.501]} scale={[1.51, 0.1, 0.01]}>
          <boxGeometry />
          <meshStandardMaterial color="#8b4513" roughness={0.5} />
        </mesh>
        <mesh position={[0, 0, -0.501]} scale={[1.51, 0.1, 0.01]}>
          <boxGeometry />
          <meshStandardMaterial color="#8b4513" roughness={0.5} />
        </mesh>

        <mesh ref={tapeRef} position={[0, 0, 0]} scale={[1.51, 0.1, 1.01]}>
          <boxGeometry />
          <meshStandardMaterial color="#8b4513" roughness={0.5} />
        </mesh>

        <mesh position={[0, 0.2, 0.501]} scale={[0.4, 0.4, 0.01]}>
          <planeGeometry />
          <meshStandardMaterial color="#0284c7" roughness={0.3} metalness={0.4} />
        </mesh>

        <mesh position={[-0.4, -0.2, 0.501]} scale={[0.5, 0.3, 0.01]}>
          <planeGeometry />
          <meshStandardMaterial color="white" roughness={0.3} />
        </mesh>

        <mesh position={[0.751, 0, 0]} scale={[0.01, 1.01, 1.01]}>
          <boxGeometry />
          <meshStandardMaterial color="#d4a666" roughness={0.7} />
        </mesh>
        <mesh position={[-0.751, 0, 0]} scale={[0.01, 1.01, 1.01]}>
          <boxGeometry />
          <meshStandardMaterial color="#d4a666" roughness={0.7} />
        </mesh>
      </group>
    </>
  );
};

export default DeliveryBox;