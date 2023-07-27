import React from "react";
import {Play, Repeat, Shuffle, SkipBack, SkipForward} from "lucide-react";

export const Buttons = () => {
    return(
        <div className={"flex items-center gap-6"}>
            <Shuffle size={20} className={"text-zinc-200"}/>
            <SkipBack/>
            <button
                className={"w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto "}>
                <Play/>
            </button>
            <SkipForward/>
            <Repeat/>
        </div>
    )
}