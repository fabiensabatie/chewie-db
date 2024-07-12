import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export function Sphere(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * (active ? 2 : 1);
    meshRef.current.position.y = Math.abs(Math.sin(state.clock.elapsedTime * (active ? 2 : 1))) * 2;
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => {
        setActive(!active);
        window.Chewie.onComponentClicked("/src/Sphere.tsx");
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
}