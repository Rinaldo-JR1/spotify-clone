import {Play} from "lucide-react";
import React from "react";

interface albumProps {
    name: string;
    image: string;
    artist?: string;
}

export const Album: React.FC<albumProps> = ({name, image, artist}) => {
    return (
            <a href="#"
               className={"bg-white/5 group rounded flex items-center overflow-hidden hover:bg-white/10 transition-colors"}>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={image} width={88} height={88} alt={`capa-${image}`}></img>
                <div className="flex flex-col ml-2">
                    <strong>{name}</strong>
                    <p className={"text-zinc-400 text-sm mt-1"}>{artist}</p>
                </div>
                <button
                    className={"w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible"}>
                    <Play/>
                </button>
            </a>
    )
}