import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

type ContactEntryProps = {
	className?: string;
}

const ContactEntry = ({ className = "" }: ContactEntryProps) => {
	return (
		<FontAwesomeIcon icon = { faEnvelope } className = { "w-5 h-5 hover:text-accent" } />
	);
}

export default ContactEntry;