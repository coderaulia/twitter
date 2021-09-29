import React from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";

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
			<Post
				displayName="Coderaulia"
				username="coderaulia"
				verified={true}
				text="What's up??"
				avatar="https://media4.giphy.com/media/QYkX9IMHthYn0Y3pcG/giphy.gif?cid=ecf05e47v8m71o192bjok8vil075ej7hvdnan7qj6iprhywa&rid=giphy.gif&ct=g"
				image="https://media4.giphy.com/media/QYkX9IMHthYn0Y3pcG/giphy.gif?cid=ecf05e47v8m71o192bjok8vil075ej7hvdnan7qj6iprhywa&rid=giphy.gif&ct=g"
			/>
		</div>
	);
}

export default Timeline;
