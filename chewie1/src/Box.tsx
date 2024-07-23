import React from "react"; import { Mesh } from "@react-three/fiber"; import { BoxBufferGeometry, MeshStandardMaterial } from "three";

interface BoxProps { position: number[]; }

export default function Box({ position }: BoxProps) { return ( <Mesh> <BoxBufferGeometry /> <MeshStandardMaterial color="purple" /> </Mesh> ); }