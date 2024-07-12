import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

export function BouncingSphere() {
  const meshRef = useRef();
  const [position, setPosition] = useState([0, 0, 0]);
  const [velocity, setVelocity] = useState(0.1);

  useFrame(() => {
    if (position[1] < -0.5 && velocity < 0) {
      setVelocity(-velocity * 0.95); // Reverse and dampen the velocity
    }
    setPosition(prevPosition => [prevPosition[0], prevPosition[1] + velocity, prevPosition[2]]);
    setVelocity(velocity - 0.01); // Gravity effect
  });

  return (
    <mesh
      ref={meshRef}
      position={position}
      onClick={() => { setVelocity(0.2); }} // On click increase bounce
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={'skyblue'} />
    </mesh>
  );
}