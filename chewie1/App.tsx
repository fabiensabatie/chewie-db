import React from 'react';
import { MeshProps, useFrame } from '@react-three/fiber';

interface PlaneProps extends MeshProps {
  color: string;
}

export const Plane: React.FC<PlaneProps> = ({ color, ...props }) => {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}
      {...props}
      onClick={(event) => {
        window.Chewie.onComponentClicked('/src/Plane.tsx');
      }}
    >
      <planeGeometry args={[5, 5]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};