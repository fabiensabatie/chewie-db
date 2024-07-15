import React, { useState, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as

function SceneContent({ bullets, setBullets, intervalRef }) {
  const { camera } = useThree();

  const startShooting = (event) => {
    const { clientX, clientY } = event;
    const x = (clientX / window.innerWidth) * 2 - 1;
    const y = -(clientY / window.innerHeight) * 2 + 1;
    const direction = new THREE.Vector3(x, y, -1).unproject(camera).sub(camera.position).normalize();
    intervalRef.current = setInterval(() => {
      setBullets((bullets) => [...bullets, { position: camera.position.clone(), direction }]);
    }, 100);
  };

  const stopShooting = () => {
    clearInterval(intervalRef.current);
  };

  return (
    <>
     
      <div onMouseDown={startShooting} onMouseUp={stopShooting} onMouseLeave={stopShooting} style={{ width: '100%', height: '100%', position: 'absolute', top: 0 }} />
    </>
  );
}

export default function Scene() {
  const [bullets, setBullets] = useState([]);
  const intervalRef = useRef();

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <Canvas>
        <SceneContent bullets={bullets} setBullets={setBullets} intervalRef={intervalRef} />
      </Canvas>
    </div>
  );
}