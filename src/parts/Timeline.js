import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";

function Timeline() {
	return (
		<div className="timeline">
			{/* Header */}
			<div className="timeline__header">
				<h2>Home</h2>
			</div>

			{/* Tweet Box */}
			<TweetBox />

			{/* Post */}
		</div>
	);
}

export default Timeline;
