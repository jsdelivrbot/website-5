import React from "react";
import { Link } from "react-router-dom";
import LanguagePicker from "components/LanguagePicker/Loadable";
import $ from "jquery";

import "./OffsetMenu.css";

class OffsetMenu extends React.Component {
	// TOGGLE MENU
	toggleMenu() {
		if (
			$(".offset-menu")
				.find("ul")
				.hasClass("hidden-sm") ||
			$(".offset-menu")
				.find("ul")
				.hasClass("hidden-xs")
		) {
			$(".offset-menu")
				.find("ul")
				.removeClass("hidden-xs hidden-sm");
			$(".offset-menu").addClass("cover-up");
			$(".logo, .search-row").css("opacity", 0);
		} else {
			$(".offset-menu")
				.find("ul")
				.addClass("hidden-xs hidden-sm");
			$(".offset-menu").removeClass("cover-up");
			$(".logo, .search-row").css("opacity", 1);
		}
	}

	// RENDER
	render() {
		return (
			<div>
				<div className="offset-bars hidden-md hidden-lg">
					<div onClick={this.toggleMenu.bind(this)}>
						<i className="fa fa-bars" />
					</div>
				</div>
				<div className="offset-menu">
					<ul className="hidden-xs hidden-sm">
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/topics">
								<span className="label label-success">New</span> Explore by topics
							</Link>
						</li>
						<li>
							<Link to="/how-it-works">How does this work?</Link>
						</li>
						<li>
							<Link to="/suggest">Suggest a channel</Link>
						</li>
						<li>
							<Link to="/contributions">Contributions</Link>
						</li>
						<li>
							<Link to="/support">Support us</Link>
						</li>
						<li>
							<Link to="/privacy">Privacy Policy</Link>
						</li>
						<li>
							<div className="little-space">Channel language</div>
							<LanguagePicker />
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default OffsetMenu;
