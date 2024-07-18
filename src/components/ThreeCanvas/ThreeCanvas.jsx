import {Canvas} from "@react-three/fiber";
import ThreeElement from "./ThreeElement";


function ThreeCanvas() {
    return <Canvas style={{width: "100%", height: "400px"}}
        /*camera={{fov:75,near:1, far:20, position:[7,7,7]}}*/
    >;
        <ThreeElement/>
    </Canvas>;
}

export default ThreeCanvas