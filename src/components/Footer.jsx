import React from "react";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="container">
				<div className="footer__attribution">
					<span className="attribution__frontend-mentor">
						{"Challenge by "}
						<a
							href="https://www.frontendmentor.io?ref=challenge"
							target="_blank"
							className="attribution__link"
						>
							Frontend Mentor
						</a>
					</span>
					<span className="attribution__author">
						{"Coded by "}
						<a
							href="https://jsamuelap.github.io"
							target="_blank"
							className="attribution__link"
						>
							JSamuel
						</a>
					</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
