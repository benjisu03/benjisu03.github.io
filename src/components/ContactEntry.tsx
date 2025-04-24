import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

type ContactEntryProps = {
	className?: string;
}

const ContactEntry = ({ className = "" }: ContactEntryProps) => {
	return (
		<div className = { "flex items-center gap-[10px]" }>
			<FontAwesomeIcon icon = { faEnvelope } className = { "w-5 h-5" } />
			<div className = { "flex flex-col" }>
				<p className = { "text-xs" }>Email</p>
				<p className = { "text-sm" }>benj2003@iastate.edu</p>
			</div>
		</div>
	);
}

export default ContactEntry;