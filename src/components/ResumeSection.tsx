import React from "react";

type ResumeSectionProps = {
	children?: React.ReactNode;
	className?: string;
}

const ResumeSection = ({ children, className = "" }: ResumeSectionProps) => {
	return (
		<div className={`
            ${className}
            p-[30px]
            bg-foreground
            border border-border rounded-2xl
            shadow-xl
        `}>
			{ children }
		</div>
	);
}

export default ResumeSection;