import NavBar from '@/components/NavBar';
import TitleBar from "@/components/TitleBar";

export default function Home() {
    return (
        <div className="grid grid-rows-[auto_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <TitleBar />
                <NavBar />
                <p>
                    In engineering, ethical dilemmas often arise from the need to balance two competing objectives. Engineers are responsible for finding solutions that align with both goals without compromising our integrity or ethical principles. Navigating these challenges needs more than just technical knowledge, it requires diligence. Getting absorbed in the fine details of our work can sometimes obscure the broader implications of our decisions. By stepping back and adopting a "bird's-eye view," we can better understand the full scope of the situation, enabling more thoughtful and informed decision-making.
                    The IEEE Code of Ethics serves as a vital framework in this process, providing a set of guiding principles to help engineers ensure their actions uphold moral standards. This code emphasizes the importance of prioritizing public welfare, respecting privacy, and acting with integrity in all circumstances.
                    One ethical case study that underscores these challenges involved the use of user data from an Amazon Echo device to assist in solving a crime. The case revolved around a murder investigation in which the Echo, an Internet of Things (IoT) device, might have captured data that could provide insight into the events taking place that night. However, Amazon refused to release the data without a proper warrant, citing the user's right to privacy.
                    This situation highlights a fundamental ethical tension: the balance between protecting individual privacy and serving the public interest, such as solving crimes or ensuring safety. As IoT devices become more prevalent in daily life, this issue is becoming increasingly common and complex.
                    The virtues most relevant to this issue are responsibility, integrity, and honesty. Companies like Amazon and the engineers who design these systems must carefully weigh their ethical obligations in these scenarios. Responsibility involves making thoughtful, deliberate decisions that consider the potential consequences for everyone involved. Integrity means avoiding actions driven by hidden agendas or self-interest, even when put under external pressure. Finally, honesty is crucial in communicating decisions clearly and transparently. Being honest about these choices compels organizations to evaluate their actions because transparency naturally invites scrutiny. This openness increases accountability and prompts engineers to reflect on the ethical implications of their work. By adhering to these principles, engineers can navigate complex ethical dilemmas.
                </p>
            </main>
            <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
                {/* existing content */}
            </footer>
        </div>
    );
}