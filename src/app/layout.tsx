import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Sidebar from "@/components/Sidebar";
import { Inter } from "next/font/google";

const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});

const InterFont = Inter({
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: "Benjamin Johnson",
	description: "",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body
				className={`antialiased min-h-screen p-[60px] bg-background ${InterFont.className}`}
			>
				{ children }
			</body>
		</html>
	);
}
