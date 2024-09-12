// import React from 'react'
import { Canvas } from "@react-three/fiber";
import MacBook from "../Components/MacBook"
import { Environment, OrbitControls, ScrollControls } from "@react-three/drei";
import { useEffect, useState } from "react";
import { smBreakValue } from "../Common/common";



// // // This is screen sizw for lagre display

const MacBookScreen = () => {

    const [canvasFov, setConvasFov] = useState(35)
    const [position, setPosition] = useState([0, -2, 60])

    useEffect(() => {
        if (window.innerWidth > smBreakValue) {
            setConvasFov(35)

        } else {
            setConvasFov(50)
            setPosition([0,-2, 100])
        }

    }, [])



    return (


        <div className=' fixed w-full h-[100%] '>
            <div
                className=' h-full w-full bg-zinc-900'
            >

                <div className=" absolute text-white top-12 left-1/2 -translate-x-1/2 font-['Helvetica'] text-center ">
                    <h3 className=" text-2xl sm:text-7xl tracking-tighter font-[700]">macbook pro.</h3>
                    <p>scroll to see</p>
                </div>

                <Canvas

                    // camera={{ fav: 5, position: [0, -2, 120] }}

                    camera={{
                        fov: canvasFov,
                        // position: [0, -2, 60]
                        // position: [0, -10, 160]
                        position: position
                    }}

                >
                    {/* <OrbitControls /> */}


                    <Environment files={["https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"]} />

                    <ScrollControls pages={3}>

                        <MacBook />
                    </ScrollControls>


                </Canvas>
            </div>
        </div>
    )
}

export default MacBookScreen;