import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "./src/Box";
import { Sphere } from "./src/Sphere";

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      undefined
      <Sphere />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0,-1.0,0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color={'dimgray'} />
      </mesh>
    </Canvas>
  );
}