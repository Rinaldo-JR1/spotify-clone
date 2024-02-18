import React from "react";
import Image from "next/image";

export const Music = () => {
    return (
        <>
            <Image src="/meteora.jpg" width={60} height={60} className="ml-2" alt={"meteora"}/>
            <div className={"flex flex-col gap-1"}>
                <strong className={"font-semibold font-normal"}>Numb</strong>
                <span className={"text-xs text-zinc-500"}>Linkin Park</span>
            </div>
        </>
    )
}
