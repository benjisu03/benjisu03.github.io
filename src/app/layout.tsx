import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

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
				className = {
					`antialiased 
					${InterFont.className} 
					w-screen min-h-screen 
					flex items-start justify-center
					p-[60px] bg-background`
				}
			>
				{ children }
			</body>
		</html>
	);
}
