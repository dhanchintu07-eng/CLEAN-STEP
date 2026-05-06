'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

function AnimatedText3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
      groupRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Center>
        <Text3D
          font="/fonts/inter_semibold.wasm"
          size={1.5}
          height={0.2}
          curveSegments={32}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[0, 0, 0]}
        >
          CREOVATE
          <meshPhongMaterial
            args={[
              {
                color: 0x1a6cff,
                emissive: 0x3d9bff,
                shininess: 100,
              },
            ]}
          />
        </Text3D>
      </Center>
    </group>
  );
}

function FloatingCube() {
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (cubeRef.current) {
      cubeRef.current.rotation.x += 0.005;
      cubeRef.current.rotation.y += 0.008;
    }
  });

  return (
    <mesh ref={cubeRef} position={[3, 2, -5]}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshPhongMaterial
        color={0x00c9a7}
        emissive={0x06e8bc}
        shininess={100}
      />
    </mesh>
  );
}

function FloatingSphere() {
  const sphereRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y += 0.004;
      sphereRef.current.position.y = Math.sin(Date.now() * 0.0008) * 1;
    }
  });

  return (
    <mesh ref={sphereRef} position={[-3, 1, -5]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshPhongMaterial
        color={0xff6b35}
        emissive={0xff8855}
        shininess={100}
      />
    </mesh>
  );
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 75 }}
      style={{ width: '100%', height: '100%', background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color={0x00c9a7} />
      
      <AnimatedText3D />
      <FloatingCube />
      <FloatingSphere />
      
      <OrbitControls 
        enableZoom={false}
        autoRotate
        autoRotateSpeed={2}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
      />
    </Canvas>
  );
}
