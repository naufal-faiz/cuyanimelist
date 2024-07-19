"use client"

import { FileSearch } from "@phosphor-icons/react";
import {useRouter} from "next/navigation";

const Page = () => {
const router = useRouter()

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold text-myColor-primary mb-3">404 | NOT FOUND</h1>
            <FileSearch size={32} className="text-myColor-accent mb-3"/>
            <h3 className="text-xl font-bold text-myColor-accent">NT BANG LU GA NEMU</h3>
            <button onClick={() => router.back()} className="text-myColor-primary hover:text-myColor-accent transition-all">
                Kembali Ke Halaman Utama
            </button>"
        </div>
    )
}

export default Page;