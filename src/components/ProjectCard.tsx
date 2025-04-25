export enum CardCorner {
	TopLeft = "rounded-tl-2xl",
	TopRight = "rounded-tr-2xl",
	BottomLeft = "rounded-bl-2xl",
	BottomRight = "rounded-br-2xl"
}

type ProjectCardProps = {
	corner: CardCorner;
	name: string;
	description: string;
	image: string;
	className?: string;
}

const ProjectCard = ({ corner, name, description, image, className = "" }: ProjectCardProps) => {
	return (
		<div
			className={`
	            ${className}
	            relative
	            p-[15px]
	            bg-background
	            border border-border ${corner}
	            shadow-xl
	        `}
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className = {`absolute inset-0 bg-[linear-gradient(to_bottom,_rgba(0,0,0,0.5)_0%,_rgba(0,0,0,0)_50%)] ${corner}`}></div>
			<div className="relative z-10 text-white font-bold text-xl">{name}</div>
			<div className="relative z-10 text-white text-xs">{description}</div>
		</div>
	);
}

export default ProjectCard;