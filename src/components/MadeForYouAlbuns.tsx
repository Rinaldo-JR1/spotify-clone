import React from "react";
import Image from "next/image";
export const MadeForYouAlbuns = () => {
    return (
        <a className={"bg-white/5 p-4 rounded hover:"}>
            <Image src="/hybridTheory.jpg" className={"w-full"} width={104} height={104} alt={"hybrid-theory"}/>
        </a>
    )
}