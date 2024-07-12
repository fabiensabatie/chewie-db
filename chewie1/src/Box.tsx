import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

export function Box(props) {
  // This reference will give us direct access to the mesh
  
  const meshRef = useRef();
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
  meshRef.current.rotation.x += delta * (active ? 2 : 1);
});

   const handleClick = () => {
    setActive(!active);
    
    // Create an error to capture the stack trace
    const error = new Error();
    const stack = error.stack;
    
    // Extract the file path and component name from the stack trace
    const match = stack.match(/at\s+(?:.+\s\()?(.*\/([^\/]+\.tsx))/);
    const path = match ? match[1] : "Unknown Path";
    const componentName = "Box"; // You can make this dynamic if needed

    // Call the function with the extracted path and component name
    window.Chewie.onComponentClicked(path, componentName);
  };
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => {
        setActive(!active);
        window.Chewie.onComponentClicked("/src/Box.tsx");
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
}

