import React, {useEffect, useRef, useState} from "react";
import Image from "next/image"
import {animate, AnimatePresence, motion, useMotionValue} from "framer-motion";
import useMeasure from "react-use-measure";


const icons = [
	"/icons/blender.png",
	"/icons/bevy.svg",
	"/icons/rust.png",
	"/icons/blender.png",
	"/icons/bevy.svg",
	"/icons/rust.png",
	"/icons/blender.png",
	"/icons/bevy.svg",
	"/icons/rust.png",
];

type IconProps = {
	image: string;

}

const Icon = ({image}: IconProps) => {
	const [showOverlay, setShowOverlay] = useState<boolean>(false);

	return (
		<motion.div
			className = {"relative overflow-hidden h-[100px] min-w-[100px] rounded-xl flex justify-center items-center"}
			onHoverStart = {() => setShowOverlay(true)}
			onHoverEnd   = {() => setShowOverlay(false)}
		>
			<AnimatePresence>
				{showOverlay && (
					<motion.div
						className = {"absolute inset-0 z-10 flex justify-center items-center"}
						initial = {{opacity: 0}}
						animate = {{opacity: 1}}
						exit    = {{opacity: 0}}
					>
						<div className = {"absolute bg-black pointer-events-none opacity-50 h-full w-full"}/>
						<motion.h1
							className = {"bg-foreground font-semibold text-xs z-10 px-2 py-1 rounded-full flex items-center ga-[0.5ch] hover:opacity-75"}
							initial = {{y: 10}}
							animate = {{y:  0}}
							exit    = {{y: 10}}
						>
							<span>Explore Now</span>
						</motion.h1>
					</motion.div>
				)}
			</AnimatePresence>
			<Image src = {image} alt = {image} fill style = {{objectFit: "contain"}} />
		</motion.div>
	);
}

type IconCarouselProps = {
	className?: string;
}

const IconCarousel = ({className = ""}: IconCarouselProps) => {
	const [ref, { width }] = useMeasure();
	const xTranslation = useMotionValue(0);
	const gapPx = 100; // Tailwind gap-4 = 1rem = 16px

	useEffect(() => {
		if (width === 0) return;

		const totalScroll = width + gapPx;

		const controls = animate(xTranslation, [0, -totalScroll], {
			ease: "linear",
			duration: 30,
			repeat: Infinity,
		});

		return () => controls.stop();
	}, [width]);

	return (
		<div className={`overflow-hidden w-full ${className}`}>
			<motion.div
				className="flex"
				style={{ x: xTranslation }}
			>
				<div ref={ref} className = "flex" style={{ gap: `${gapPx}px` }}>
					{icons.map((image, i) => (
						<Icon key={i} image={image} />
					))}
				</div>
				<div className = "flex" style={{ gap: `${gapPx}px`, marginLeft: `${gapPx}px` }}> {/* Add left margin to match the gap */}
					{icons.map((image, i) => (
						<Icon key={`clone-${i}`} image={image} />
					))}
				</div>
			</motion.div>
		</div>
	);
}

export default IconCarousel;