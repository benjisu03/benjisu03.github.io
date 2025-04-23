import Image from "next/image";
import Separator from "@/components/Separator";
import Tile from "@/components/Tile";
import SocialIcons from "@/components/SocialIcons";
import ContactEntry from "@/components/ContactEntry";

const Sidebar: React.FC = () => {
    return <Tile className="
        sticky self-start
        top-[60px] w-fit
        flex flex-col justify-center items-center
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
        <SocialIcons />
    </Tile>;
}

export default Sidebar;