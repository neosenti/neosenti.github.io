import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import type * as THREE from "three";
import { BiaRadarModel } from "./BiaRadarModel";

export function BIARadarVisualization() {
  // This ref remains on the group responsible for ANIMATION
  const pivotRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (pivotRef.current) {
      // This animation logic remains the same
      pivotRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      pivotRef.current.rotation.y += 0.001;
    }
  });

  const baseScale = 0.04;

  return (
    <Float speed={0.4} rotationIntensity={0.1} floatIntensity={0.4}>
      {/* This is the ANIMATION group */}
      <group ref={pivotRef}>
        {/* This NEW group handles the STATIC initial tilt */}
        <group rotation={[-Math.PI / 10, 0, 0]}>
          <BiaRadarModel position={[-0.4, 0, 1.15]} scale={baseScale} />
        </group>
      </group>
    </Float>
  );
}
