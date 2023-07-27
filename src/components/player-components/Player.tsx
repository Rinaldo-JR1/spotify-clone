import React from "react";
import {Buttons} from "@/components/player-components/PlayerButtons/Buttons";
import {Slider} from "@/components/player-components/PlayerButtons/Slider";
import {AuxButtons} from "@/components/player-components/AuxButtons";

export const Player = () => {
    return (
        <>
            <div>
                <Buttons/>
            </div>
            <div className={"flex items-center gap-3"}>
                <Slider/>
            </div>
        </>
    )
}