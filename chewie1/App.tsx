import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./src/Box";
import { Sphere } from "./src/Sphere";
import { Torus } from "./src/Torus";

export default function Scene() {
  return (
    <div>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Box
          position={[0, -2, 0]}
          color="orange"
          hoveredColor="yellow"
          clickedColor="red"
        />
        <Box
          position={[1.2, -2, 0]}
          color="orange"
          hoveredColor="yellow"
          clickedColor="purple"
        />
        <Sphere />
        <Torus position={[-1.2, -2, 0]} color="blue" hoveredColor="lightblue" clickedColor="darkblue" />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

