type AboutProps = {
	className?: string
}

const text = "It's about the future, isn't it? Of course, from a group of Libyan Nationalists. They wanted me to build them a bomb, so I took their plutonium and in turn gave them a shiny bomb case full of used pinball machine parts. What? What you got under here? Please note that Einstein's clock is in complete synchronization with my control watch.\n" +
	"\n" +
	"This is more serious than I thought. Apparently your mother is amorously infatuated with you instead of your father. Listen, woh. Hello, uh excuse me. Sorry about your barn. I hope you don't mind but George asked if he could take me home. Our first television set, Dad just picked it up today. Do you have a television? C'mon, open up, let me out of here, Yo.\n" +
	"\n" +
	"Give me a hand, Lorenzo. Ow, dammit, man, I sliced my hand. A block passed Maple, that's John F. Kennedy Drive. What did she say? It's your mom, she's tracked you down. Quick, let's cover the time machine. No, no, George, look, it's just an act, right? Okay, so 9:00 you're strolling through the parking lot, you see us struggling in the car, you walk up, you open the door and you say, your line, George. Alright, punk, now-\n" +
	"\n"

const About = ({ className = "" }: AboutProps) => {
	return <div className = {`${className}`}>
		{/*<p>{text}</p>*/}

		{/*<h3 className = "font-bold text-xl">Movie Quotes</h3>*/}
	</div>
}

export default About;