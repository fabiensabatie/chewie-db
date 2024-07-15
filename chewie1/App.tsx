import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Box } from "./src/Box";
import { Sphere } from "./src/Sphere";
import { Torus } from "./src/Torus";
import { Menu } from './src/Menu';

export default function Scene() {
  const [elements, setElements] = useState([
    { type: 'Box', props: { position: [-1.2, -2, 0], color: 'green', hoveredColor: 'yellow', clickedColor: 'red' } },
    { type: 'Box', props: { position: [1.2, -2, 0], color: 'green', hoveredColor: 'yellow', clickedColor: 'green' } },
    { type: 'Torus', props: { position: [0, -2, 0], color: 'blue', hoveredColor: 'lightblue', clickedColor: 'darkblue' } }
  ]);

  const addElement = (type) => {
    const position = (type === 'Box') ? [Math.random() * 4 - 2, Math.random() * 4 - 2, 0] : [0, Math.random() * 4 - 2, 0];
    setElements([...elements, { type, props: { position, color: 'white', hoveredColor: 'grey', clickedColor: 'black' } }]);
  };

  return (
    <div>
      <Canvas>
        <ambientLight intensity={Math.PI / 2} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        {elements.map((element, index) => {
          const Element = element.type === 'Box' ? Box : element.type === 'Sphere' ? Sphere : Torus;
          return <Element key={index} {...element.props} />;
        })}
        <OrbitControls />
      </Canvas>
      <Menu addElement={addElement} />
    </div>
  );
}