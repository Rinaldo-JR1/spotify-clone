import React from "react";
import Image from "next/image";

export const Music = () => {
    return (
        <>
            <Image src="/hybridTheory.jpg" width={56} height={56} alt={"hybrid-theory"}/>
            <div className={"flex flex-col gap-1"}>
                <strong className={"font-semibold font-normal"}>Numb</strong>
                <span className={"text-xs text-zinc-500"}>Linkin Park</span>
            </div>
        </>
    )
}
