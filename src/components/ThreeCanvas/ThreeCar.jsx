import * as THREE from "three";


function Tire(props){
    const geo = new THREE.CylinderGeometry();

    return <mesh {...props} geometry={geo} scale={[0.1, 0.3, 0.3]} rotation-x={90*Math.PI/180}>
        <axesHelper scale={5}/>
        <meshStandardMaterial color="black"/>
    </mesh>;
}

function Top(props){
    const geo = new THREE.BoxGeometry();
    return <mesh {...props} geometry={geo} scale={[0.6, 0.8, 0.8]}>
        <axesHelper scale={5}></axesHelper>
        <meshStandardMaterial color="white"/>
        <FrontWindow/>
        <SideWindow position-x={[-0.2]}/>
        <SideWindow position-x={[0.2]}/>
    </mesh>
}

function FrontWindow(props){
    const geo = new THREE.BoxGeometry();
    return <mesh {...props} geometry={geo} scale={[1.001, 0.6, 0.8]}>
        <meshStandardMaterial color="black"/>
    </mesh>;
}

function SideWindow(props){
    const geo = new THREE.BoxGeometry();
    return <mesh {...props} geometry={geo} scale={[0.35, 0.6, 1.001]}>
        <meshStandardMaterial color="black"/>
    </mesh>
}


function ThreeCar(props) {
    return <mesh {...props} scale={[0.3, 0.08, 0.15]} >
        <axesHelper/>
        <boxGeometry/>
        <meshStandardMaterial color="gray"/>
        <Top position={[0, 0.8, 0]}/>
        <Tire position={[-0.3, -0.5, -0.4]}/>
        <Tire position={[-0.3, -0.5, 0.4]}/>
        <Tire position={[0.3, -0.5, -0.4]}/>
        <Tire position={[0.3, -0.5, 0.4]}/>
    </mesh>
}

export default ThreeCar