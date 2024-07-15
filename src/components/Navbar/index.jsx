import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
    return (
        <header className="bg-myColor-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-3 gap-2">
                <Link href="/" className="font-bold text-2xl px-2">CuyAnimeList</Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar