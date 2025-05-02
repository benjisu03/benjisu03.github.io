import React, {useEffect, useRef, useState} from "react";
import Image from "next/image"
import {animate, AnimatePresence, motion, useMotionValue} from "framer-motion";
import useMeasure from "react-use-measure";
import Icon, {IconProps} from "@/components/Icon";



export type IconCarouselProps = {
	icons: IconProps[];
	gap: number;
	speed: number;
	hoverSpeed: number;
	className?: string;
}

const IconCarousel = ({icons, gap, speed, hoverSpeed, className = ""}: IconCarouselProps) => {
	const [ref, { width }] = useMeasure();
	const xTranslation = useMotionValue(0);

	const default_duration = (icons.length * 2) / speed;
	const hover_duration = (icons.length * 2) / hoverSpeed;

	const [duration, setDuration] = useState(default_duration);

	const [mustFinish, setMustFinish] = useState(false);
	const [rerender, setRerender] = useState(false);

	useEffect(() => {
		let controls;
		const totalScroll = width + gap;

		if(mustFinish) {
			controls = animate(xTranslation, [xTranslation.get(), -totalScroll], {
				ease: "linear",
				duration: duration * (1 - xTranslation.get() / (-totalScroll)),
				onComplete: () => {
					setMustFinish(false);
					setRerender(!rerender);
				}
			})
		} else {
			controls = animate(xTranslation, [0, -totalScroll], {
				ease: "linear",
				duration: duration,
				repeat: Infinity,
				repeatType: "loop",
				repeatDelay: 0
			});
		}

		return () => controls?.stop();
	}, [width, duration, rerender]);

	return (
		<div className={`relative overflow-hidden w-full ${className}`}>
			<div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-foreground to-transparent" />
			<div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-foreground to-transparent"/>
			<motion.div
				className="flex"
				style={{ x: xTranslation }}
				onHoverStart = {() => {
					setMustFinish(true);
					setDuration(hover_duration)
				}}
				onHoverEnd = {() => {
					setMustFinish(true);
					setDuration(default_duration)
				}}
			>
				<div ref={ref} className = "flex" style={{ gap: `${gap}px` }}>
					{icons.map((props, i) => <Icon key = {i} {...props} />)}
				</div>
				<div className = "flex" style={{ gap: `${gap}px`, marginLeft: `${gap}px` }}> {/* Add left margin to match the gap */}
					{icons.map((props, i) => <Icon key={`clone-${i}`} {...props} />)}
				</div>
			</motion.div>
		</div>
	);
}

export default IconCarousel;