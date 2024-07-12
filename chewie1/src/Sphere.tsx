import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export function Sphere(props) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the rotation update loop
  const gravity = -9.81;
  const velocity = useRef(0.1);
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * (active ? 2 : 1);
    // Bounce mechanics: Update the position based on velocity
    velocity.current += gravity * delta; // updating velocity with gravity
    meshRef.current.position.y += velocity.current * delta; // updating position with velocity
    // Bounce off the floor
    if (meshRef.current.position.y <= 0) {
      // Reset position to 0 (floor level)
      meshUITextField.current.position.y = 0;
      // Reverse velocity for bounce with dampening effect
      velocity.current = -velocity.current * 0.85;
    }
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