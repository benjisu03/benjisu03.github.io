'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import {useState} from "react";

type ContactEntryProps = {
	className?: string;
}

const ContactEntry = ({ className = "" }: ContactEntryProps) => {
	const [copied, setCopied] = useState(false);
	const email = 'contact@benjamin-johnson.dev';

	const handleCopy = async () => {
		await navigator.clipboard.writeText(email);
		setCopied(true);

		// Reset after 2 seconds
		setTimeout(() => setCopied(false), 1000);
	};

	return (
		<div className = {"flex flex-row gap-[5px] items-center relative group cursor-pointer"} onClick={handleCopy}>
			<FontAwesomeIcon icon = { faEnvelope } className = { "w-5 h-5" } />
			<p className = { "text-xs" }>{email}</p>

			<div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2
                  bg-gray-800 text-white text-xs rounded px-2 py-1
                  opacity-0 group-hover:opacity-100 transition-opacity duration-200
                  pointer-events-none whitespace-nowrap">
				{copied ? 'Copied!' : 'Click to copy'}
			</div>
		</div>
	);
}

export default ContactEntry;