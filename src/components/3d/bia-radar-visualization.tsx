import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import type * as THREE from "three";

export function BIARadarVisualization() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.4}>
      <Sphere
        ref={meshRef}
        args={[1.2, 64, 64]}
        scale={hovered ? 1.1 : 1}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color="#3b82f6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0.2}
          metalness={0.7}
        />
      </Sphere>

      {/* Radar waves effect */}
      <Float
        speed={2}
        rotationIntensity={0.1}
        floatIntensity={0.2}
        position={[0, 0, 0]}
      >
        <mesh>
          <torusGeometry args={[2, 0.05, 16, 100]} />
          <meshStandardMaterial color="#60a5fa" transparent opacity={0.3} />
        </mesh>
      </Float>

      <Float
        speed={1.8}
        rotationIntensity={0.1}
        floatIntensity={0.3}
        position={[0, 0, 0]}
      >
        <mesh>
          <torusGeometry args={[2.5, 0.03, 16, 100]} />
          <meshStandardMaterial color="#93c5fd" transparent opacity={0.2} />
        </mesh>
      </Float>
    </Float>
  );
}
