import React from "react";
import Description from "./Description";

class ChannelListItem extends React.Component {

    // CONSTRUCTOR
	constructor(props) {
		super(props);
        this.state = {
            "more": false
        };
	}

    // TEXT CUTTER
    textCutter(i, text) {

		if(text.length < i || this.state.more === true) return text;

        var shorter = text.substr(0, i);
        if (/^\S/.test(text.substr(i))) {
            return shorter.replace(/\s+\S*$/, "");
		}

        return shorter;
    }

    // TOGGLE MORE
    toggleMore() {
        this.setState({
            "more": !this.state.more
        });
    }

    // RENDER
	render() {

        // more is active, show "less" button
        var moreOrLessTxt = (this.state.more === true) ? "less" : "more";
        var descriptionTxt = this.textCutter(200, this.props.text);

        // show a more or less button
        var moreOrLess;
        if(descriptionTxt.length !== this.props.text.length || this.state.more === true) {
            moreOrLess = <a href="javascript:void(0);" onClick={this.toggleMore.bind(this)}>[{moreOrLessTxt}]</a>;
        }

		return (
            <p className="channel-description">
                {descriptionTxt}
                &nbsp;{moreOrLess}
            </p>
		);
	}
}

export default ChannelListItem;
