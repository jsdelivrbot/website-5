import React from "react";

class SearchBar extends React.Component {
	// COMPONENT DID MOUNT
	componentDidMount() {
		// intercept browser search ctrl+f
		$(window).on("keydown", function(e) {
			if ((e.ctrlKey || e.metaKey) && e.keyCode === 70) {
				// don't open browser search
				e.preventDefault();

				// focus search bar
				$("#search-bar").focus();

				// scroll up
				window.setTimeout(function() {
					window.scrollTo(0, 0);
				}, 1);
			}
		});
	}

	// COMPONENT WILL UNMOUNT
	componentWillUnmount() {
		$(window).off("keydown");
	}

	// KEY UP
	keyUp(e) {
		// ESC clears selection
		if (e.keyCode === 27) {
			e.target.value = "";
			this.props.history.pushState(null, "/");
			return;
		} else if (e.keyCode === 13) {
			// ENTER triggers search
			var v = e.target.value;
			this.props.history.replaceState(null, "/search/" + encodeURIComponent(v));
		}
	}

	// CHANGE SORT
	changeSort(e) {
		$(window).trigger("changeSort", { sortBy: e.target.value });
	}

	// HIGHLIGHT SORT
	highlightSort(item) {
		//this.props.sortBy = item;
		$(window).trigger("changeSort", { sortBy: item });
	}

	// RENDER
	render() {
		// make sort group invisible when we are searching
		var sortGroupClass = "hidden-xs hidden-sm form-group sort-group";
		if (this.props.query) {
			sortGroupClass += " invisible";
		}

		return (
			<div className="row search-row">
				<div className="col-lg-3 col-md-2 col-sm-2" />
				<div className="col-lg-6 col-md-8 col-sm-8">
					<div className="row">
						<div className="col-lg-1 col-md-1 col-sm-0" />
						<div className="col-lg-10 col-md-10 col-sm-12">
							<div className="form-group label-floating is-empty">
								<label className="control-label">Search for ...</label>
								<input
									className="form-control"
									type="text"
									id="search-bar"
									onKeyUp={this.keyUp.bind(this)}
								/>
								<span className="material-input" />
							</div>
						</div>
						<div className="col-lg-1 col-md-1 col-sm-0" />
					</div>

					<div className={sortGroupClass}>
						<label className="sort-label control-label">Sort by:</label>
						<label className="sortBy-label">
							<input
								id="sortBy-subscribers"
								type="radio"
								onClick={this.changeSort.bind(this)}
								className="sort-option"
								name="sortby"
								value="subscribers"
								defaultChecked={this.props.sortBy === "subscribers"}
							/>
							&nbsp;Subscribers
						</label>
						<label className="sortBy-label">
							<input
								type="radio"
								onClick={this.changeSort.bind(this)}
								className="sort-option"
								name="sortby"
								value="views"
								defaultChecked={this.props.sortBy === "views"}
							/>
							&nbsp;Views
						</label>
						<label className="sortBy-label">
							<input
								type="radio"
								onClick={this.changeSort.bind(this)}
								className="sort-option"
								name="sortby"
								value="upload"
								defaultChecked={this.props.sortBy === "upload"}
							/>
							&nbsp;Last upload
						</label>
						<label className="sortBy-label">
							<input
								type="radio"
								onClick={this.changeSort.bind(this)}
								className="sort-option"
								name="sortby"
								value="founded"
								defaultChecked={this.props.sortBy === "newest"}
							/>
							&nbsp;Founded
						</label>
						<label className="sortBy-label">
							<input
								type="radio"
								onClick={this.changeSort.bind(this)}
								className="sort-option"
								name="sortby"
								value="trending"
								defaultChecked={this.props.sortBy === "trending"}
							/>
							&nbsp;Trending
						</label>
					</div>
				</div>
				<div className="col-lg-3 col-md-2 col-sm-2" />
			</div>
		);
	}
}

export default SearchBar;
