import React, { useEffect, useState } from 'react'
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import { CylinderPicMesh } from '../Components/CylinderPicMesh';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { smBreakValue } from '../Common/common';



export const HomePage = () => {

    const [canvasFov, setConvasFov] = useState(35)

    useEffect(() => {
        if (window.innerWidth > smBreakValue) {
            setConvasFov(35)
        } else {
            setConvasFov(50)
        }

    }, [])


    return (

        <div className=' fixed w-full h-[83%] '>
            <div
                className=' h-full w-full bg-zinc-900'
            >
                <Canvas
                    camera={{ fov: canvasFov }}
                >
                    <OrbitControls />
                    <ambientLight />
                    <CylinderPicMesh />
                    <EffectComposer>
                        <Bloom
                            mipmapBlur
                            intensity={7.0}
                            luminanceThreshold={0.5}
                            luminanceSmoothing={0}
                        />
                    </EffectComposer>
                </Canvas>;
            </div >

            <div className=' h-[10%] w-full bg-zinc-900 '>
                <h1 className=' text-white font-[cursive] text-3xl sm:text-5xl text-center font-bold'>I'm Ashish Kuldeep</h1>
            </div>

        </div>

    )
}

