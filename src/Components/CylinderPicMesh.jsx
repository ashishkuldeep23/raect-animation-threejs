import { useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react'
import * as THREE from "three"



// const IMAGE_URL = "./pic.png";
const IMAGE_URL = "https://res.cloudinary.com/dlvq8n2ca/image/upload/v1725190534/qyitfcdli9rc2ndbdiwy.png";

export const CylinderPicMesh = () => {

    const tex = useTexture(IMAGE_URL);

    const cyl = useRef(null)

    useFrame((_, detla) => {
        cyl.current.rotation.y -= 0.01
    });

    return (

        <group
            rotation={[0, 1.4, 0.5]}
            position={[0, 0.15, 0]}
        >
            <mesh ref={cyl}
            >
                <cylinderGeometry args={[1, 1.15, 1.7, 60, 60, true]} />
                <meshStandardMaterial
                    map={tex}
                    side={THREE.DoubleSide}
                    transparent
                />
            </mesh>

        </group>

    )
}
