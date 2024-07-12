import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame, extend, useThree } from "@react-three/fiber";
import { EffectComposer, OutlinePass, RenderPass } from "@react-three/postprocessing";
import { BoxGeometry, MeshStandardMaterial, Mesh } from "three";
import { useEffectfulState } from "@react-three/drei";

extend({ EffectComposer, OutlinePass, RenderPass });

function Outline({ selectedObject }) {
  const composer = useRef();
  const { scene, camera, gl, size } = useThree();

  useEffect(() => {
    composer.current.setSize(size.width, size.height);
  }, [size]);

  useFrame(() => composer.current.render(), 1);

  return (
    <effectComposer ref={composer}>
      <renderPass attachArray="passes" scene={scene} camera={camera} />
      <outlinePass
        attachArray="passes"
        args={[size.width, size.height, scene, camera]}
        selectedObjects={selectedObject ? [selectedObject] : []}
        visibleEdgeColor="white"
        edgeStrength={10}
      />
    </effectComposer>
  );
}

export function Box(props) {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * (active ? 2 : 1);
  });

  return (
    <>
      <mesh
        {...props}
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
      {hovered && <Outline selectedObject={meshRef.current} />}
    </>
  );
}

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  );
}
