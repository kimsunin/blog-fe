"use client"
import {useEffect, useRef} from "react";
import {OrbitControls} from "@react-three/drei";
import {useControls} from "leva";

function ThreeElement() {
    const meshRef = useRef();
    const wireMeshRef = useRef();

    const {radius, widthSegments, heightSegments} = useControls({
        radius: {value: 1, min: 0.1, max: 5, step: 0.01},
        widthSegments: {value: 32, min: 3, max: 256, step: 1},
        heightSegments: {value: 32, min: 3, max: 256, step: 1}
    });


    useEffect(() => {
        wireMeshRef.current.geometry = meshRef.current.geometry;
    }, [radius, widthSegments, heightSegments]);

    return <>
        <OrbitControls/>
        <ambientLight intensity={0.1}/>
        <directionalLight position={[2, 1, 3]} intensity={0.5}/>
        <mesh ref={meshRef}>
            <sphereGeometry args={[radius, widthSegments, heightSegments]}/>
            <meshStandardMaterial/>
        </mesh>
        <mesh ref={wireMeshRef}>
            <meshStandardMaterial emissive="white" wireframe={true}/>
        </mesh>
    </>;
}

export default ThreeElement