import {Music} from "@/components/player-components/Music";
import React from "react";
import {Player} from "@/components/player-components/Player";
import {AuxButtons} from "@/components/player-components/AuxButtons";
export const PlayerComponent = () => {
    return (
        <>
            <div className={"flex items-center gap-3"}>
                <Music/>
            </div>
            <div className={"flex flex-col items-center gap-2"}>
                <Player/>
            </div>
            <div className={"flex items-center gap-2"}>
                <AuxButtons/>
            </div>
        </>
    )
}