import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sphere } from "./src/Sphere";
import { Menu } from './src/Menu';
import * as THREE from 'three';

function Bullet({ position, direction }) {
  const ref = React.useRef();
  useFrame(() => {
    ref.current.position.x += direction.x * 0.1;
    ref.current.position.y += direction.y * 0.1;
    ref.current.position.z += direction.z * 0.1;
  });
  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.1, 32, 32]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
}

export default function Scene() {
  const [bullets, setBullets] = useState([]);

  const handleClick = (event) => {
    const { x, y } = event.point;
    const direction = new THREE.Vector3(x, y, -1).normalize();
    setBullets([...bullets, { position: [0, 0, 0], direction }]);
  };

  return (
    <div onClick={handleClick} style={{ width: '100vw', height: '100vh' }}>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {bullets.map((bullet, index) => (
          <Bullet key={index} position={bullet.position} direction={bullet.direction} />
        ))}
        <OrbitControls />
      </Canvas>
      <Menu addElement={() => {}} />
    </div>
  );
}