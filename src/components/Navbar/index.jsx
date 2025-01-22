import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Navbar = () => {
	const [currentTab, setCurrentTab] = useState('');
	const [menu_icon, setMenuIcon] = useState("bx bx-menu-alt-left");
	const navbar = useRef();
	const menu = useRef();

	useEffect(() => {
		setCurrentTab('home');
	}, []);
	const open_menu = () => {
		if (menu.current.classList.contains("active")) {
			menu.current.classList.remove("active");
			setMenuIcon("bx bx-menu-alt-left");
		} else {
			menu.current.classList.add("active");
			setMenuIcon("bx bx-x");
		}
	};

	return (
		<div id="navbar" ref={navbar}>
			<div id="ham-menu" onClick={open_menu}>
				<i className={menu_icon}></i>
			</div>

			<div className="navbar-left">
				<Link to="/" onClick={() => setCurrentTab("home")}>
					<div className="name">kamiri</div>
				</Link>
			</div>

			<div className="navbar-right">
				{/* Home */}
				<Link to="/" onClick={() => setCurrentTab("home")}>
					<div
						className={`link${currentTab == "home" ? " current-tab" : ""}`}
					>
						Home
					</div>
				</Link>

				{/* Projects */}
				<Link to="/projects" onClick={() => setCurrentTab("projects")}>
					<div
						className={`link${currentTab == "projects" ? " current-tab" : ""}`}
					>
						Projects
					</div>
				</Link>

				{/* Certifications */}
				<Link to="/certifications" onClick={() => setCurrentTab("certifications")}>
					<div
						className={`link${currentTab == "certifications" ? " current-tab" : ""}`}
					>
						Certifications
					</div>
				</Link>

				{/* Contact */}
				<Link to="/contact" onClick={() => setCurrentTab("contact")}>
					<div
						className={`link${currentTab == "contact" ? " current-tab" : ""}`}
					>
						Contact
					</div>
				</Link>
			</div>

			{/* Mobile navbar */}
			<div ref={menu} id="menu">
				<Link to="/">
					<div className="link" onClick={open_menu}>
						Home
					</div>
				</Link>

				<Link to="/projects">
					<div className="link" onClick={open_menu}>
						Projects
					</div>
				</Link>

				<Link to="/certifications">
					<div className="link" onClick={open_menu}>
						Certifications
					</div>
				</Link>

				<Link to="/contact">
					<div className="link" onClick={open_menu}>
						Contact
					</div>
				</Link>
			</div>
		</div>
	);
};
export default Navbar;
