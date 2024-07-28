import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";


export function Box(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [color, setColor] = useState('red');
  
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * (active ? 2 : 1);
    meshRef.current.position.y = Math.abs(Math.sin(state.clock.elapsedTime * (active ? 3 : 2))) * 2;
  });
const [color, setColor] = useState('pink');
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => {
const [color, setColor] = useState('pink');
        window.Chewie.onComponentClicked("/src/Box.tsx");
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1]} />
      <meshStandardMaterial color={hovered ? "purple" : color} />
    </mesh>
  );
}
