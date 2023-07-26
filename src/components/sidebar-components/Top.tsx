import {Home as HomeIcon, Library, Search} from "lucide-react";

export const TopBar = () => {
    return (
        <nav className={"space-y-4 mt-6"}>

            <a href={""} className={"flex items-center gap-3 text-sm font-semibold text-zinc-200"}>
                <HomeIcon/>
                Home
            </a>
            <a href={""} className={"flex items-center gap-3 text-sm font-semibold text-zinc-200"}>
                <Search/>
                Search
            </a>
            <a href={""} className={"flex items-center gap-3 text-sm font-semibold text-zinc-200"}>
                <Library/>
                Library
            </a>
        </nav>
    )
}