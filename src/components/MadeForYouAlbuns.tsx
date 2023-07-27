import React from "react";
import Image from "next/image";

export const MadeForYouAlbuns = () => {
    return (
        <a className={"bg-white/5 p-4 rounded-md hover:bg-white/10 flex flex-col gap-2 "}>
            <Image src="/hybridTheory.jpg" className={"w-full"} width={120} height={120} alt={"hybrid-theory"}/>
            <strong className={"font-semibold"}>Daily Mix 1</strong>
            <span className={"text-sm text-zinc-400"}>Linkin Park, Lil peep, Lil uzi, Kayne West e outros</span>
        </a>
    )
}