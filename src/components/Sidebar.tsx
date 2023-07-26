import {TopBar} from "@/components/sidebar-components/Top";
import {Buttons} from "@/components/sidebar-components/Buttons";
import {Bottom} from "@/components/sidebar-components/Bottom";
export const Sidebar = () => {
    return (
            <aside className={"w-72 bg-zinc-950 p-6"}>
                <Buttons/>
                <TopBar/>
                <Bottom/>
            </aside>

    )
}