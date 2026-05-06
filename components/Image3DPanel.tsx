'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

interface Image3DPanelProps {
  imageUrl?: string;
}

function RotatingPanel({ imageUrl }: Image3DPanelProps) {
  const panelRef = useRef<THREE.Mesh>(null);
  const textureRef = useRef<THREE.Texture | null>(null);

  useFrame(() => {
    if (panelRef.current) {
      panelRef.current.rotation.y += 0.005;
    }
  });

  // Load texture
  if (imageUrl && !textureRef.current) {
    const loader = new THREE.TextureLoader();
    loader.load(imageUrl, (texture) => {
      textureRef.current = texture;
      if (panelRef.current && panelRef.current.material instanceof THREE.MeshStandardMaterial) {
        panelRef.current.material.map = texture;
        panelRef.current.material.needsUpdate = true;
      }
    });
  }

  return (
    <mesh ref={panelRef} position={[0, 0, 0]} scale={[4, 3, 0.1]}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial
        color={imageUrl ? 0xffffff : 0x1a6cff}
        emissive={imageUrl ? 0x000000 : 0x3d9bff}
        map={textureRef.current}
        metalness={0.5}
        roughness={0.2}
      />
    </mesh>
  );
}

function FrameDecoration() {
  return (
    <group>
      {/* Frame edges */}
      <mesh position={[0, 0, 0.15]}>
        <torusGeometry args={[2.1, 0.1, 8, 32]} />
        <meshPhongMaterial color={0x00c9a7} emissive={0x06e8bc} />
      </mesh>
    </group>
  );
}

export function Image3DPanel({ imageUrl }: Image3DPanelProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 75 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.8} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.6} color={0x00c9a7} />
      
      <RotatingPanel imageUrl={imageUrl} />
      <FrameDecoration />
      
      <OrbitControls 
        enableZoom={true}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
}
