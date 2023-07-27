
import { ChevronLeft, ChevronRight} from "lucide-react";
import {Album} from '@/components/Album'
import {Sidebar} from "@/components/Sidebar";
import React from "react";
import {MadeForYouAlbuns} from "@/components/MadeForYouAlbuns";
import {PlayerComponent} from "@/components/PlayerComponent";

export default function Home() {
    return (
        <div className={"h-screen flex flex-col"}>
            <div className={"flex flex-1"}>
                <Sidebar/>
                <main className={"flex-1 p-6"}>
                    <div className={"flex items-center gap-3"}>
                        <button className={"rounded-full bg-black/40 p-1"}>
                            <ChevronLeft/>
                        </button>
                        <button className={"rounded-full bg-black/40 p-1"}>
                            <ChevronRight/>
                        </button>
                    </div>
                    <h1 className={"font-semibold text-3xl mt-10"}>Bom dia</h1>
                    <div className={"grid grid-cols-3 gap-4 mt-4"}>
                        <Album image={"https://i.scdn.co/image/ab67706c0000da8404095a89155bdcc01e3960a0"} name={"Musicas curtidas"}/>
                        <Album image={"https://m.media-amazon.com/images/I/51Oyrjlw5+L._UF1000,1000_QL80_.jpg"} name={"Hybrid Theory"} artist={"Linkin Park"}/>
                        <Album image={"https://m.media-amazon.com/images/I/71-G9C36s2L._UF1000,1000_QL80_.jpg"} name={"Come Over When You're Sober Pt.1"} artist={"Lil Peep"}/>
                        <Album image={"https://upload.wikimedia.org/wikipedia/pt/8/83/Linkin_park-meteora_a.jpg"} name={"Meteora"} artist={"Linkin Park"}/>
                        <Album image={"https://m.media-amazon.com/images/I/51Oyrjlw5+L._UF1000,1000_QL80_.jpg"} name={"Hybrid Theory"}/>
                        <Album image={"https://m.media-amazon.com/images/I/51Oyrjlw5+L._UF1000,1000_QL80_.jpg"} name={"Hybrid Theory"}/>
                    </div>
                    <h2 className={"font-semibold text-xl mt-10"}>Made for You</h2>
                    <div className={"grid grid-cols-5 gap-4 mt-4"}>
                        <MadeForYouAlbuns/>
                        <MadeForYouAlbuns/>
                        <MadeForYouAlbuns/>
                        <MadeForYouAlbuns/>
                        <MadeForYouAlbuns/>
                    </div>
                </main>
            </div>
            <footer className={"bg-zinc-800 border-zinc-700 pX-6 py-4 flex items-center justify-between"}>
                <PlayerComponent/>
            </footer>
        </div>
    )
}
