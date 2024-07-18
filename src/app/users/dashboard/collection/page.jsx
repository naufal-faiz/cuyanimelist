import Header from "@/components/Dashboard/header"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <section className="mt-4 px-4 w-full">
            <Header title="My Collection"/>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <Link href="/" className="relative border-2 border-myColor-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-myColor-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-myColor-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-myColor-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-myColor-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-myColor-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
                <Link href="/" className="relative border-2 border-myColor-accent">
                    <Image src="" alt="" width={350} height={350} className="w-full"/>
                    <div className="absolute flex justify-center items-center bottom-0 w-full bg-myColor-accent h-16">
                        <h5 className="text-xl text-center">Judul Anime</h5>
                    </div>
                </Link>
            </div>
        </section>
    )
}

export default Page