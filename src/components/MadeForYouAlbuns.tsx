import React from "react";
import Image from "next/image";
interface playlistProp {
    playlistName: string;
    image: string;
    artists?: string;
}
export const MadeForYouAlbuns:React.FC<playlistProp> = ({playlistName,image,artists}) => {
    return (
        <a className={"bg-white/5 p-4 rounded-md hover:bg-white/10 flex flex-col gap-2 "}>
            <img src={image} className={"w-full"} width={100} height={100} alt={image}/>
            <strong className={"font-semibold"}>{playlistName}</strong>
            <span className={"text-sm text-zinc-400"}>{artists}</span>
        </a>
    )
}