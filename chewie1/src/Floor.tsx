import React from 'react';
import { useLoader } from '@react-three/fiber';
import { PlaneGeometry, MeshStandardMaterial } from 'three';

export function Floor() {
  const geometry = new PlaneGeometry(100, 100);
  const material = new MeshStandardMaterial({ color: 'green' });

  return (
    <mesh geometry={geometry} material={material} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
      <primitive object={geometry} attach="geometry" />
      <primitive object={material} attach="material" />
      <PlaneGeometry args={[100, 100]} />
      <meshStandardMaterial color={'green'} />
      onClick={(event) => {
        window.Chewie.onComponentClicked("/src/Floor.tsx");
      }}
    </mesh>
  );
}