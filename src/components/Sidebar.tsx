import Image from "next/image";
import Separator from "@/components/Separator";
import Tile from "@/components/Tile";
import {GithubLink, LinkedInLink} from "@/components/SocialIcons";
import ContactEntry from "@/components/ContactEntry";

const Sidebar: React.FC = () => {
    return <Tile className="
        sticky self-start
        top-[60px] w-fit min-w-max
        flex flex-col justify-center items-center
        border-dashed
    ">
        <Image
            src="/images/profile.png"
            alt="Profile Picture"
            width={150} height={150}
            className="rounded-3xl"
        />
        <h1 className="mt-[15px] text-center box-border text-2xl font-bold"> Benjamin Johnson </h1>
        <p className="text-xs"> Student | Computer Engineer </p>
        <Separator className = { "my-[15px]" }/>
        <ContactEntry />
        <Separator className = { "my-[15px]" }/>

        <ul className="flex items-center gap-4">
            <li><GithubLink link = "https://github.com/benjisu03" /></li>
            <li><LinkedInLink link = "https://www.linkedin.com/in/benjamin-johnson-ia/" /></li>
        </ul>
    </Tile>;
}

export default Sidebar;