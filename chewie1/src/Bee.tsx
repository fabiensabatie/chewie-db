import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { GLTF } from "three-stdlib";

interface GLTFResult extends GLTF {
  nodes: any;
  materials: any;
}

const Bee = (props: JSX.IntrinsicElements["group"]) => {
  const group = useRef<any>();
  const { nodes, materials, animations } = useGLTF("/src/ee.glb") as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta;
    }
  });

  React.useEffect(() => {
    if (actions) {
      actions["yourAnimationName"].play(); // Replace with the actual animation name from your GLB file
    }
  }, [actions]);

  return (
    <group ref={group} {...props} dispose={null}
      onClick={(event) => {
        window.Chewie.onComponentClicked("/src/Bee.tsx");
      }}>
      <primitive object={nodes.Scene} />
    </group>
  );
};

useGLTF.preload("Bee.glb");

export default Bee;
