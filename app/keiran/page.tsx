import Image from "next/image";
import { FaLinkedin, FaGithub, FaXTwitter, FaUpwork } from "react-icons/fa6";
import { SiGooglecalendar } from "react-icons/si";
import { Globe, Award } from "lucide-react";
import keiranPic from "../images/Keiran1 Small.jpeg";

export default function KeiranPage() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
            {/* animated multi-tone gradient background */}
            <div className="absolute inset-0 animate-gradient-shift opacity-90" />
            {/* dark overlay for text contrast */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />



            <div className="relative max-w-md w-full text-center space-y-8 p-8">
                {/* Profile image */}
                <div className="flex justify-center">
                    <Image
                        src={keiranPic}
                        alt="Keiran Flynn"
                        width={140}
                        height={140}
                        className="rounded-full border-4 border-blue-500 shadow-lg"
                        priority
                    />
                </div>

                {/* Name and tagline */}
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tight drop-shadow-md">
                        Keiran Flynn
                    </h1>
                    <p className="text-neutral-400 text-lg">
                        Solidity & Next.js Developer
                    </p>
                    <p className="text-neutral-400 text-lg">
                        Building{" "}
                        <a
                            href="https://www.flow402.com"
                            target="_blank"
                            className="text-blue-400 hover:text-blue-300 underline font-medium"
                        >
                            Flow402
                        </a>{" "}
                        (x402 pay-per-call gateway)
                    </p>
                </div>

                {/* Links */}
                <div className="space-y-3 text-left">
                    <a
                        href="https://www.linkedin.com/in/keiran-flynn/"
                        target="_blank"
                        className="flex items-center gap-3 bg-neutral-800/80 hover:bg-neutral-700 py-3 px-4 rounded-xl font-medium transition"
                    >
                        <FaLinkedin className="text-blue-400 text-xl" /> LinkedIn
                    </a>

                    <a
                        href="https://github.com/KeiranCPFlynn/"
                        target="_blank"
                        className="flex items-center gap-3 bg-neutral-800/80 hover:bg-neutral-700 py-3 px-4 rounded-xl font-medium transition"
                    >
                        <FaGithub className="text-xl" /> GitHub
                    </a>

                    <a
                        href="https://x.com/0xFlynnx"
                        target="_blank"
                        className="flex items-center gap-3 bg-neutral-800/80 hover:bg-neutral-700 py-3 px-4 rounded-xl font-medium transition"
                    >
                        <FaXTwitter className="text-xl" /> X (Twitter)
                    </a>

                    <a
                        href="https://profiles.cyfrin.io/u/freelymoving/achievements/advanced-foundry"
                        target="_blank"
                        className="flex items-center gap-3 bg-neutral-800/80 hover:bg-neutral-700 py-3 px-4 rounded-xl font-medium transition"
                    >
                        <Award className="w-5 h-5 text-yellow-400" /> Cyfrin Profile
                    </a>

                    <a
                        href="https://www.upwork.com/freelancers/~0153fe5c47f099cec6?mp_source=share"
                        target="_blank"
                        className="flex items-center gap-3 bg-neutral-800/80 hover:bg-neutral-700 py-3 px-4 rounded-xl font-medium transition"
                    >
                        <FaUpwork className="text-xl text-green-400" /> Upwork
                    </a>

                    <a
                        href="https://cal.com/keiran-flynn-backbeat/15min"
                        target="_blank"
                        className="flex items-center gap-3 bg-neutral-800/80 hover:bg-neutral-700 py-3 px-4 rounded-xl font-medium transition"
                    >
                        <SiGooglecalendar className="text-xl text-blue-400" /> Book 15-Min Call
                    </a>

                    <a
                        href="https://www.flow402.com"
                        target="_blank"
                        className="flex items-center gap-3 bg-neutral-800/80 hover:bg-neutral-700 py-3 px-4 rounded-xl font-medium transition"
                    >
                        <Globe className="w-5 h-5 text-blue-300" /> Flow402 Website
                    </a>
                </div>

                {/* Footer */}
                <div className="text-neutral-500 text-sm mt-10 space-y-1">
                    <p>Based in Phuket, Thailand 🌴</p>
                    <p>
                        <a
                            href="mailto:freelymoving@gmail.com"
                            className="hover:text-blue-300 underline"
                        >
                            freelymoving@gmail.com
                        </a>
                    </p>
                    <p>
                        <a
                            href="mailto:keiran@backbeateducation.com"
                            className="hover:text-blue-300 underline"
                        >
                            keiran@backbeateducation.com
                        </a>
                    </p>
                </div>
            </div>
        </main>
    );
}
