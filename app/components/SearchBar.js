import React from "react";

class SearchBar extends React.Component {

    // COMPONENT DID MOUNT
    componentDidMount() {

        $(window).on("keydown", function(e){
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
        if(e.keyCode === 27 || e.target.value.length === 0) {

            e.target.value = "";
            this.props.history.pushState(null, "/by-" + this.props.sortBy);
            return;
        }

        var v = e.target.value;
        this.props.history.replaceState(null, "/by-" + this.props.sortBy + "/search/" + encodeURIComponent(v));
    }

    // CHANGE SORT
    changeSort(e) {
        $(window).trigger("changeSort", {"sortBy": e.target.value});
    }

    // RENDER
	render() {
		return (
            <div className="row search-row">
				<div className="col-md-4"></div>
                <div className="col-md-4">
                    <div className="form-group label-floating is-empty">
                        <label className="control-label">Search for ...</label>
                        <input className="form-control" type="text" id="search-bar" onKeyUp={this.keyUp.bind(this)} />
                        <span className="material-input"></span>
                    </div>

                    <div className="form-group sort-group">
                        <label className="sort-label control-label">Sort by:</label>
                        <input type="radio" onClick={this.changeSort.bind(this)} className="sort-option" name="sortby" value="subscribers" defaultChecked={this.props.sortBy === "subscribers"} /> Subscribers
                        <input type="radio" onClick={this.changeSort.bind(this)} className="sort-option" name="sortby" value="upload" defaultChecked={this.props.sortBy === "upload"} /> Last upload
                        <input type="radio" onClick={this.changeSort.bind(this)} className="sort-option" name="sortby" value="newest" defaultChecked={this.props.sortBy === "newest"} /> Newest
                    </div>
                </div>
				<div className="col-md-4"></div>
            </div>
		);
	}
}

export default SearchBar;
