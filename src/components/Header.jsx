import Switch from "./Switch";

const Header = () => {
	return (
		<header className="header">
			<div className="container header__container">
				<div>
					<h1 className="header__heading">Social Media Dashboard</h1>
					<span className="header__followers">Total Followers: 23,004</span>
				</div>
				<div className="header__switch-container">
					<span className="switch-container__text">Dark Mode</span>
					<Switch />
				</div>
			</div>
		</header>
	);
};

export default Header;
