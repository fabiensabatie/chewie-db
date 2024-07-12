import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export function Sphere(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the rotation update loop
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * (active ? 2 : 1);
  });
  // Return the 3D Sphere
  return (
    <mesh {...props}
      ref={meshRef}
      scale={active ? 1.2: 1}
      onClick={(event) => {
        setActive(!active);
        window.Chewie.onComponentClicked("/src/Sphere.tsx");
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color={active ? props.clickedColor : (hovered ? props.hoveredColor : props.color)} />
    </mesh>
  );
}
