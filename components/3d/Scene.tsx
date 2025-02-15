"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Sparkles, Environment } from '@react-three/drei';
import DeliveryBox from './DeliveryBox';
import ggh from './belvedere_4k.hdr'

export function Scene() {
  return (
    <div className="w-full h-full">
      <Canvas
        style={{ background: 'transparent' }}
        shadows
      >
        <PerspectiveCamera makeDefault position={[0, 0.5, 4]} fov={45} />
        <OrbitControls 
          enableZoom={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 8}
          maxAzimuthAngle={Math.PI / 8}
          target={[0, 0.5, 0]}
        />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        <spotLight
          position={[0, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={0.8}
          castShadow
        />
        <Sparkles 
          count={50}
          scale={4}
          size={2}
          speed={0.4}
          opacity={0.1}
        />
  <Environment files={ggh} background={false} />

        <DeliveryBox />
      </Canvas>
    </div>
  );
}