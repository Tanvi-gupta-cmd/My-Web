import { Canvas, useFrame } from "@react-three/fiber";
import {
  Float,
  MeshTransmissionMaterial,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SculpturalOrb({ position, scale = 1, color }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    meshRef.current.rotation.x += delta * 0.12;
    meshRef.current.rotation.y += delta * 0.2;

    meshRef.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.08;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} scale={scale} castShadow>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color={color}
          roughness={0.28}
          metalness={0.12}
        />
      </mesh>
    </Float>
  );
}

function GlassSphere({ position, scale = 1 }) {
  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.8}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[1, 48, 48]} />
        <MeshTransmissionMaterial
          backside
          samples={4}
          resolution={256}
          transmission={0.92}
          thickness={0.5}
          roughness={0.12}
          chromaticAberration={0.025}
          anisotropy={0.1}
          color="#E6EFD9"
        />
      </mesh>
    </Float>
  );
}

function TorusShape({ position }) {
  const ref = useRef();

  useFrame((state, delta) => {
    if (!ref.current) return;

    ref.current.rotation.x += delta * 0.12;
    ref.current.rotation.z += delta * 0.18;
  });

  return (
    <Float speed={1.1} floatIntensity={0.5}>
      <mesh ref={ref} position={position} rotation={[0.8, 0.2, 0.4]}>
        <torusGeometry args={[0.85, 0.16, 24, 100]} />
        <meshStandardMaterial
          color="#45263D"
          roughness={0.3}
          metalness={0.35}
        />
      </mesh>
    </Float>
  );
}

function SceneObjects() {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const targetX = state.pointer.y * 0.12;
    const targetY = state.pointer.x * 0.18;

    groupRef.current.rotation.x = THREE.MathUtils.damp(
      groupRef.current.rotation.x,
      targetX,
      3,
      delta
    );

    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetY,
      3,
      delta
    );
  });

  return (
    <group ref={groupRef}>
      <SculpturalOrb
        position={[-1.1, 0.8, 0]}
        scale={0.72}
        color="#A9BD8B"
      />

      <SculpturalOrb
        position={[1.15, -0.85, -0.4]}
        scale={0.48}
        color="#947789"
      />

      <GlassSphere position={[0.9, 1.05, 0.3]} scale={0.54} />

      <GlassSphere position={[-1.3, -0.8, 0.5]} scale={0.35} />

      <TorusShape position={[0.2, 0.05, -0.6]} />
    </group>
  );
}

export default function Scene3D() {
  return (
    <div className="scene3d">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5.5], fov: 42 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[3, 4, 5]}
          intensity={2.2}
          color="#FFF4EE"
        />

        <pointLight position={[-3, 2, 3]} intensity={35} color="#DCE8C8" />

        <pointLight position={[3, -2, 2]} intensity={18} color="#947789" />

        <SceneObjects />

        <Environment preset="studio" />

        <ContactShadows
          position={[0, -2.2, -0.5]}
          opacity={0.18}
          scale={6}
          blur={2.5}
          far={4}
        />
      </Canvas>
    </div>
  );
}