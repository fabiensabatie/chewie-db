import React from 'react';
import { useFrame } from '@react-three/fiber';

const Box = (props) => {
  return (
    <mesh {...props} onClick={(event) => {window.Chewie.onComponentClicked("/src/Box.tsx");}}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'red'} />
    </mesh>
  );
};

export { Box };