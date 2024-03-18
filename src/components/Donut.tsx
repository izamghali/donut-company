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
    let md = window.matchMedia("(min-width: 768px)").matches;
    let lg = window.matchMedia("(min-width: 976px)").matches;
    let xl = window.matchMedia("(min-width: 1280px)").matches;
    let xxl = window.matchMedia("(min-width: 1536px)").matches;
    let sm = window.matchMedia("(min-width: 480px)").matches;
    
    useFrame(() => {

        // mesh.current.rotation.y += Math.sin(-0.01)
        mesh.current.rotation.z += Math.tan(0.001)
        mesh.current.rotation.x += Math.tan(0.001)
      

        if (sm) {
            mesh.current.scale.x = 12
            mesh.current.scale.y = 12
            mesh.current.scale.z = 12
        } else if (md) {
            mesh.current.scale.x = 16
            mesh.current.scale.y = 16
            mesh.current.scale.z = 16
        } else {
            mesh.current.scale.x = 10
            mesh.current.scale.y = 10
            mesh.current.scale.z = 10
        }
        
      
    });
  
    return (
      <mesh ref={mesh} position={[0, -0.5, 1]} rotation={[ 0, 1, 0.5 ]} >
        <primitive object={gltf.scene} />
      </mesh>
    );
}
  
export function Donut({ className, donutScale } : Donut) {

    return (
        <div className={`flex flex-col items-center ${className}`}>
            <Canvas className='z-10'>
                {/* <OrbitControls /> */}
                <ambientLight  />
                {/* <directionalLight position={ localStorage.getItem('theme') === 'dark' ? [0, -8, 10] : [0, -8, 10] } /> */}
                <directionalLight position={[0, -8, 10] } />
                <pointLight position={[1, 2, 1]} scale={[10, 10, 10]} />
                <MeshComponent donutScale={donutScale} />
            </Canvas>


            <div className="
                absolute bg-std-yellow
                translate-y-40 sm:translate-y-24 md:translate-y-[8rem]
                w-[20rem] h-[20rem]
                sm:w-[25rem] sm:h-[25rem]
                xl:h-[30rem] xl:w-[30rem] 
                border-[5rem] bg-transparent rounded-full 
                std-duration
            ">
                <div className="w-full h-full rounded-full border-[5rem] border-[#f5ca6f]">
                    <div className="w-full h-full bg-white rounded-full"></div>
                </div>
            </div>

            <div id="donut-shadow" className={`blur-[16px] select-none -translate-y-16 md:-translate-y-0 std-duration`}>
                <Image priority className="w-72" src={shadow} alt=""  />
            </div>

        </div>
    );
}