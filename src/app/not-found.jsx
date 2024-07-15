"use client"

import { FileSearch } from "@phosphor-icons/react";
import Link from "next/link";

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-6xl font-bold text-myColor-primary mb-3">404 | NOT FOUND</h1>
            <FileSearch size={32} className="text-myColor-accent mb-3"/>
            <h3 className="text-xl font-bold text-myColor-accent">NT BANG LU GA NEMU</h3>
            <Link href="/" className="text-myColor-primary hover:text-myColor-accent transition-all">
                Kembali Ke Halaman Utama
            </Link>"
        </div>
    )
}

export default Page;