import {Canvas} from "@react-three/fiber";
import ThreeElement from "./ThreeElement";


function ThreeCanvas() {
    return <Canvas style={{width: "100%", height: "400px"}} camera={{near: 3.5, far: 6}}
    >;
        <ThreeElement/>
    </Canvas>;
}

export default ThreeCanvas