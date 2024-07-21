"use client"
import {useEffect, useRef} from "react";
import {OrbitControls} from "@react-three/drei";
import {useControls} from "leva";
import * as THREE from "three";


function ThreeElement() {


    return <>
        <OrbitControls/>
        <axesHelper scale={10}></axesHelper>
        <ambientLight intensity={0.2}/>
        <directionalLight position={[0, 1, 0]}/>
        <directionalLight position={[1, 2, 8]} intensity={0.7}/>
        {/*<TorusGeometry position={[-3, 0, 0]}/>*/}
        <PlaneGeometry position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}/>
        <BoxGeometry position={[0, 0, 0]}/>
        {/*<SphereGeometry/>*/}

    </>;
}

function PlaneGeometry(props) {

    const geo = new THREE.PlaneGeometry();
    geo.args = [10, 10]

    return <>
        <mesh {...props} geometry={geo}>
            <meshStandardMaterial/>
        </mesh>
    </>;
}


function BoxGeometry(props) {
    const geo = new THREE.BoxGeometry();;


    return <>
        <mesh {...props} geometry={geo}>
            <meshStandardMaterial/>
        </mesh>
    </>;
}

function SphereGeometry(props) {

    const geo = new THREE.SphereGeometry();
    return <>
        <mesh {...props} geometry={geo}>
            <meshStandardMaterial/>
        </mesh>
    </>;
}




function TorusGeometry(props) {

    const geo = new THREE.TorusGeometry();
    return <>
        <mesh {...props} geometry={geo}>
            <meshStandardMaterial/>
        </mesh>
    </>;
}


export default ThreeElement