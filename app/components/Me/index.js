import React from "react";
import OffsetMenu from "components/OffsetMenu";
import OffsetSocial from "components/OffsetSocial";
import Logo from "components/Logo";
import cookie from "react-cookie";
import MeActions from "actions/MeActions";
import MeStore from "stores/MeStore";
import HistoryChart from "components/HistoryChart/Loadable";
import PositionMap from "components/PositionMap/Loadable";
import $ from "jquery";

import "./Me.css";

class Me extends React.Component {
	constructor(props) {
		super(props);

		this.state = MeStore.getState();
		this.onChange = this.onChange.bind(this);
	}

	// COMPONENT DID MOUNT
	componentDidMount() {
		document.title = "Me | Sailing Channels";
		MeStore.listen(this.onChange);
		MeActions.getMe();
	}

	// COMPONENT WILL UNMOUNT
	componentWillUnmount() {
		MeStore.unlisten(this.onChange);
	}

	// ON CHANGE
	onChange(state) {
		this.setState(state);
	}

	// SAFE PROFILE
	saveProfile(e) {
		e.preventDefault();

		this.setState({
			loading: true
		});

		// save the changes
		$.post("/api/me/profile", {
			mmsi: parseInt($("#mmsi").val()),
			inreach: $("#inreach").val(),
			boatcolor: $("#boatcolor").val(),
			trailnumber: parseInt(Math.min(99999, Math.max(0, parseInt($("#trailnumber").val()))))
		}).done(function() {
			location.reload();
		});
	}

	// SELECT EMBED CODE
	selectEmbedCode(e) {
		e.target.focus();
		e.target.select();
	}

	// CORRENT IN REACH USERNAME
	correctInReachUsername(e) {
		var $e = $(e.target);
		var s = $e.val().split("/");
		var username = s[s.length - 1];
		$e.val(username);
	}

	// RENDER
	render() {
		if (!this.state.me.user) return null;
		var isChannelListed = this.state.me.channel;

		var profile = this.state.me.user.profile || null;
		var channelMapEmbedCode =
			'<iframe src="https://sailing-channels.com/map?channel=' +
			this.state.me.channel.id +
			'" width="100%" height="500px" frameborder="0"></iframe><p>Check out my YouTube channel on <a href="https://sailing-channels.com/channel/' +
			this.state.me.channel.id +
			'" target="_blank">https://sailing-channels.com/channel/' +
			this.state.me.channel.id +
			"</a></p>";

		return (
			<div className="container">
				<OffsetSocial />
				<Logo className="hidden-xs hidden-sm" />
				<OffsetMenu />
				<div className="row content-row">
					<div className="col-md-3" />
					<div className="col-md-6">
						<h1 className="content-h1">
							<img src={this.state.me.user.thumbnail} alt="Thumbnail" width="50" />{" "}
							{this.state.me.user.title}
						</h1>
						{isChannelListed ? (
							<center>
								<a
									target="_blank"
									href={"/channel/" + this.state.me.channel.id}
									className="btn btn-default btn-raised btn-sm"
								>
									<i className="fa fa-desktop" /> Preview channel page
								</a>
							</center>
						) : null}
					</div>
					<div className="col-md-3" />
				</div>

				{/* STATISTICS */}
				{isChannelListed ? (
					<div className="row content-row">
						<div className="col-md-3" />
						<div className="col-md-6">
							<h3>Statistics</h3>
							<p>See how well your channel is performing in the last 7 days:</p>

							<div className="row">
								<div className="col-md-6">
									<center>
										<p>
											<b>Subscribers</b>
										</p>
									</center>
									<HistoryChart
										name="subscribers"
										data={this.state.me.channel.subHist}
									/>
								</div>
								<div className="col-md-6">
									<center>
										<p>
											<b>Views</b>
										</p>
									</center>
									<HistoryChart
										name="views"
										data={this.state.me.channel.viewHist}
									/>
								</div>
							</div>
						</div>
						<div className="col-md-3" />
					</div>
				) : null}

				{isChannelListed ? (
					<div className="row content-row">
						<div className="col-md-3" />
						<div className="col-md-6">
							<h4>On sailing-channels.com</h4>
							<p>
								<b>Today's channel views:</b> {this.state.me.visits_channel}
							</p>
							<p>
								<b>Today's Video views:</b> {this.state.me.visits_videos}
							</p>
						</div>
						<div className="col-md-3" />
					</div>
				) : null}

				{isChannelListed ? (
					<div className="row content-row">
						<div className="col-md-3" />
						<div className="col-md-6">
							<hr />
						</div>
						<div className="col-md-3" />
					</div>
				) : null}

				{/* MMSI */}
				{isChannelListed ? (
					<div className="row content-row">
						<div className="col-md-3" />
						<div className="col-md-6">
							<h3>AIS</h3>
							<p>
								In case you broadcast your positions via AIS, you can store your
								MMSI number here. Your position will be displayed on a map on your
								channel detail page.
							</p>
							<div className="form-horizontal">
								<div className="form-group">
									<label htmlFor="mmsi" className="col-sm-2 control-label">
										AIS MMSI
									</label>
									<div className="col-sm-10">
										<input
											type="number"
											className="form-control"
											id="mmsi"
											defaultValue={profile ? profile.mmsi : ""}
											placeholder="MMSI number"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3" />
					</div>
				) : null}

				{isChannelListed ? (
					<div className="row content-row">
						<div className="col-md-3" />
						<div className="col-md-6">
							<hr />
						</div>
						<div className="col-md-3" />
					</div>
				) : null}

				{/* INREACH */}
				{isChannelListed ? (
					<div className="row content-row">
						<div className="col-md-3" />
						<div className="col-md-6">
							<h3>DeLorme inReach</h3>
							<p>
								If you are using DeLorme's inReach satellite position tracking and
								share your position updates via the "share" page, type your username
								or the link to your shared map into the following field:
							</p>
							<div className="form-horizontal">
								<div className="form-group">
									<label htmlFor="mmsi" className="col-sm-2 control-label">
										inReach Username
									</label>
									<div className="col-sm-10">
										<input
											type="text"
											className="form-control"
											onBlur={this.correctInReachUsername.bind(this)}
											id="inreach"
											defaultValue={profile ? profile.inreach : ""}
											placeholder="https://share.delorme.com/username"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-3" />
					</div>
				) : null}

				{isChannelListed ? (
					<div className="row content-row">
						<div className="col-md-3" />
						<div className="col-md-6">
							<hr />
						</div>
						<div className="col-md-3" />
					</div>
				) : null}

				{/* MAP */}
				{isChannelListed ? (
					<div className="row content-row">
						<div className="col-md-3" />
						<div className="col-md-6">
							<h3>Your boat position</h3>

							<div className="form-horizontal">
								<div className="form-group">
									<label htmlFor="boatcolor" className="col-sm-2 control-label">
										Boat Color
									</label>
									<div className="col-sm-10">
										<input
											type="color"
											className="form-control"
											id="boatcolor"
											defaultValue={
												profile && profile.boatcolor
													? profile.boatcolor
													: "#f1c40f"
											}
											placeholder="E.g. hull color"
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="trailnumber" className="col-sm-2 control-label">
										Show last positions
									</label>
									<div className="col-sm-10">
										<input
											type="number"
											className="form-control"
											min="0"
											max="99999"
											step="1"
											id="trailnumber"
											defaultValue={
												profile && profile.trailnumber
													? profile.trailnumber
													: "100"
											}
										/>
									</div>
								</div>
							</div>

							{this.state.me.user.position ? (
								<div>
									<PositionMap channel={this.state.me.channel.id} />
									<p>&nbsp;</p>
									<p>
										Feel free to <b>embed the map</b> into your website via the
										following HTML code:
										<textarea
											className="embed-code-form-control form-control"
											rows="4"
											value={channelMapEmbedCode}
											onClick={this.selectEmbedCode.bind(this)}
										/>
									</p>
								</div>
							) : null}
						</div>
						<div className="col-md-3" />
					</div>
				) : null}

				{isChannelListed ? (
					<div className="row content-row">
						<div className="col-md-3" />
						<div className="col-md-6">
							<hr />
						</div>
						<div className="col-md-3" />
					</div>
				) : null}

				{/* CONTROLS */}
				<div className="row content-row">
					<div className="col-md-3" />
					<div className="col-md-6">
						<center>
							{isChannelListed ? (
								this.state.loading === true ? (
									<button
										className="btn btn-success btn-raised"
										disabled="disabled"
									>
										<i className="fa fa-spinner fa-pulse" />
									</button>
								) : (
									<button
										onClick={this.saveProfile.bind(this)}
										className="btn btn-success btn-raised"
									>
										<i className="fa fa-check" /> Save
									</button>
								)
							) : null}
							&nbsp;<a href="/logout" title="Sign out" className="btn btn-default btn-raised">
								<i className="fa fa-power-off" /> Sign Out
							</a>
						</center>
					</div>
					<div className="col-md-3" />
				</div>
			</div>
		);
	}
}

export default Me;
