import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./styles.scss";

let typed_text = {
	strings: ["Charles Kamiri"],
	typeSpeed: 40,
	loop: false,
	showCursor: false,
};

const TypedSkills = () => {
	// Create reference to store the DOM element containing the animation
	const el = useRef(null);
	// Create reference to store the Typed instance itself
	const typed = useRef(null);

	useEffect(() => {
		const options = {
			strings: [
				"UI/UX Designer.",
				"Backend Engineer.",
				"Pythonista.",
				"Game Developer.",
				"Java (Spring Boot) Developer.",
				"Freelancer.",
				"Consultant.",
				"Database Administrator.",
			],
			typeSpeed: 50,
			backSpeed: 30,
			shuffle: true,
			loop: true,
			backDelay: 3000,
		};

		// elRef refers to the <span> rendered below
		typed.current = new Typed(el.current, options);

		return () => {
			// Make sure to destroy Typed instance during cleanup
			// to prevent memory leaks
			typed.current.destroy();
		};
	}, []);

	return (
		<div className="wrap">
			<div className="type-wrap">
				<span className="typed-span" ref={el} />
			</div>
		</div>
	);
};

const Home = () => {
	const leftSectionRef = useRef(null);
	const rightSectionRef = useRef(null);

	useEffect(() => {
		const typed = new Typed(".typed", typed_text);
		const handleScroll = () => {
			if (rightSectionRef.current && leftSectionRef.current) {
				// Get the scroll position of the wrapping div
				const scrollTop = leftSectionRef.current.scrollTop;
				// Update the `top` style dynamically
				rightSectionRef.current.style.top = `${120 - scrollTop}px`; // Adjust 120 as your base top value
			}
		};

		// Attach the scroll event listener
		const leftSection = leftSectionRef.current;
		leftSection.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			leftSection.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<div id="home">
			<div className="left-section" ref={leftSectionRef}>
				<div className="gr">Hello there, I'm </div>
				<div className="typed"></div>

				{/* More info about myself */}
				<div className="info">
					<p>
						Growing up in a small town in the East African country of Kenya, I
						have always been interested in technology. I was raised in an
						environment where creativity, simplicity and effectiveness were key
						aspects in everyday designs. This has led me to a passion for
						creating and building things that are useful and easy to use and yet
						have some complexity and uniqueness to them.
						<br />
						<br />I have a profound passion in creating beautiful designs and
						user interfaces. I'm also skilled in backend development and I'm
						always looking to learn new things.
					</p>
				</div>
			</div>
			<div className="right-section" ref={rightSectionRef}>
				<img src="images/profile-picture.jpg" alt="" />
				<TypedSkills />

				<a href="files/kamiri-resume.pdf" download="Charles' Resume">
					<button className="resume">Download resume</button>
				</a>
			</div>
		</div>
	);
};

export default Home;
