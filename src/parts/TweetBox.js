import React from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";

function TweetBox() {
	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar />
					<input placeholder="What's poppin guys?" type="text" />
				</div>
				<input
					className="tweetBox__imageInput"
					placeholder="Enter image URL if needed"
					type="text"
				/>
				<Button className="tweetBox__tweet">Tweet</Button>
			</form>
		</div>
	);
}

export default TweetBox;
