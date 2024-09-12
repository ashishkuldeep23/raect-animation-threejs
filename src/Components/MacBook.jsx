import { useGLTF, useScroll, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import * as THREE from "three";
import { smBreakValue } from '../Common/common';

const MacBook = () => {

    const model = useGLTF("./mac.glb")

    const tex = useTexture('./red.jpg')

    let meshes = {}

    model.scene.traverse((child) => {
        if (child) {
            meshes[child.name] = child
        }
    });


    // console.log(meshes)

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);

    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;


    let data = useScroll()

    useFrame(() => {

        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - (data.offset * 90));
    })




    const [position, setPosition] = useState([0, -7, 20])

    useEffect(() => {
        if (window.innerWidth > smBreakValue) {

            setPosition([0, -7, 20])

        } else {

            // // Mobile view ---------->
            setPosition([0, 0, 20])
        }

    }, [])



    return (
        <group
            // position={[0, -7, 20]}
            position={position}
        >

            <primitive object={model.scene} />

        </group>
    )
}

export default MacBook;