"use client"

import { useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { DirectionalLight, Mesh } from "three";
import { Vector3 } from "@react-three/fiber";
import shadow from '../../public/shadow.png'
import Image from "next/image";

interface Donut {
    className: string
    donutScale: Vector3
}

function MeshComponent({ donutScale } : { donutScale: Vector3 }) {
    const fileUrl = "/donut/scene.gltf";
    const mesh = useRef<Mesh>(null!);
    const gltf = useLoader(GLTFLoader, fileUrl);
  
    useFrame(() => {
      mesh.current.rotation.y += 0.001;
      
    });
  
    return (
      <mesh ref={mesh} position={[0, -0.5, 1]} scale={donutScale} rotation={[ 0, 1, 0.5 ]} >
        <primitive object={gltf.scene} />
      </mesh>
    );
}
  
export function Donut({ className, donutScale } : Donut) {

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <Canvas className=''>
                {/* <OrbitControls /> */}
                <ambientLight  />
                {/* <directionalLight position={ localStorage.getItem('theme') === 'dark' ? [0, -8, 10] : [0, -8, 10] } /> */}
                <directionalLight position={[0, -8, 10] } />
                <pointLight position={[1, 2, 1]} scale={[10, 10, 10]} />
                <MeshComponent donutScale={donutScale} />
            </Canvas>

            <div id="donut-shadow" className={`blur-[16px] select-none -translate-y-16 md:-translate-y-0 std-duration`}>
                <Image className="w-72" src={shadow} alt=""  />
            </div>

        </div>
    );
}