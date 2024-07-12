import { Canvas, useFrame } from "@react-three/fiber";
import { Box } from "./src/Box";
import { Sphere } from "./src/Sphere";
import { Floor } from "./src/Floor";

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Box position={[-1.2, 0, 0]} color="orange" hoveredColor="yellow" clickedColor="red" />
      <Box position={[1.2, 0, 0]} color="orange" hoveredColor="yellow" clickedColor="purple" />
      <Sphere />
      <Floor />
    </Canvas>
  );
}