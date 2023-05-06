import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./main (2).css";
import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

function Navbr() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	const handleLinkClick = (event) => {
		event.preventDefault();
		const targetId = event.target.getAttribute("href");
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: "smooth" });
		}
		showNavbar(); // Close the navigation menu after clicking on a link
	};

	return (
		<header>
			<img src="./LOGO.jpg" alt="" className="logo-img"/>
			<nav ref={navRef}>
				<Link to='/' >Home</Link>
				<a href="#Bk" onClick={handleLinkClick}  > Book Your Ride</a>
				<a href='#Fleet' onClick={handleLinkClick} >Our Fleet</a>
				<a href="#Test" onClick={handleLinkClick} >Testimonial</a>
				<a href="#FAQ" onClick={handleLinkClick} > Learn More</a>
				<a href="#Contact" onClick={handleLinkClick} >Contact us</a>
				<a href="#About" onClick={handleLinkClick} >About us</a>
				<button className="ded">Log In</button>
				<button className="ded">Register</button>
				<button className="nav-btn nav-close-btn" onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbr;
