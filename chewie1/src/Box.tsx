const [color, setColor] = useState('pink');
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => {
        setActive(!active);
        setColor('pink'); // Set color to green when clicked
        window.Chewie.onComponentClicked("/src/Box.tsx");
      }}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <boxGeometry args={[2, 2]} />
      <meshStandardMaterial color={hovered ? "purple" : color} />
    </mesh>
  );