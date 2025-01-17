import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export function Torus(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * (active ? 2 : 1);
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => {
        setActive(!active);
        window.Chewie.onComponentClicked("/src/Torus.tsx");
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <torusGeometry args={[1, 0.4, 16, 100]} />
      <meshStandardMaterial
        color={active ? props.clickedColor : hovered ? props.hoveredColor : props.color}
      />
    </mesh>
  );
}
