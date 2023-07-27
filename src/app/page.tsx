
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
                        <Album image={"https://m.media-amazon.com/images/I/91nXuH6lzKL.__AC_SX300_SY300_QL70_ML2_.jpg"} name={"72 Seasons"} artist={"Metallica"}/>
                        <Album image={"https://m.media-amazon.com/images/I/81nFF-rXdRL._UF1000,1000_QL80_.jpg"} name={"ASTROWORLD"} artist={"Travis Scott"}/>
                        <Album image={"https://i.scdn.co/image/ab67616d0000b273f7db43292a6a99b21b51d5b4"} name={"Goodbye & Good Ribbance"} artist={"Juice WRLD"}/>
                    </div>
                    <h2 className={"font-semibold text-xl mt-10"}>Made for You</h2>
                    <div className={"grid grid-cols-5 gap-4 mt-4"}>
                        <MadeForYouAlbuns image={"https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb1908e1a8b79abf71d5598944/1/en/default"} playlistName={"Daily Mix 1"} artists={"Juice WRLD, Bilie Eilish, Evanecence, Three Days Grace e outros"}/>
                        <MadeForYouAlbuns image={"https://m.media-amazon.com/images/I/91nXuH6lzKL.__AC_SX300_SY300_QL70_ML2_.jpg"} playlistName={"Aqui é do Rock"} artists={"Metallica, Slipknot, Evanescence, Disturbed e outros"} />
                        <MadeForYouAlbuns image={"https://akamai.sscdn.co/uploadfile/letras/albuns/0/4/4/9/604961509544091.jpg"} playlistName={"Tear Drop"} artists={"Lil peep, Juice WRLD, Lil Tracy, XXX Tentacion e outros"}/>
                        <MadeForYouAlbuns image={"https://m.media-amazon.com/images/I/71xVCe-X5ZL._UF350,350_QL50_.jpg"} playlistName={"Headbanger"} artists={"Slipknot, Distuberd, Korn, Ghost e outros"}/>
                        <MadeForYouAlbuns image={"https://thisis-images.scdn.co/37i9dQZF1DZ06evO1kxsTC-default.jpg"} playlistName={"This is Lil Peep"} artists={"Lil peep, Lil tracy"}/>
                    </div>
                </main>
            </div>
            <footer className={"bg-zinc-800 border-zinc-700 pX-6 py-4 flex items-center justify-between"}>
                <PlayerComponent/>
            </footer>
        </div>
    )
}
