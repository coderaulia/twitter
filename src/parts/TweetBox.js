import React, { useState } from "react";
import "./TweetBox.css";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import db from "../firebase";

function TweetBox() {
	const [tweetMessage, setTweetMessage] = useState("");
	const [tweetImage, setTweetImage] = useState("");

	const sendTweet = (e) => {
		e.preventDefault();

		db.collection("posts").add({
			displayName: "Coderaulia",
			username: "coderaulia",
			verified: true,
			text: tweetMessage,
			image: tweetImage,
			avatar:
				"https://media4.giphy.com/media/QYkX9IMHthYn0Y3pcG/giphy.gif?cid=ecf05e47v8m71o192bjok8vil075ej7hvdnan7qj6iprhywa&rid=giphy.gif&ct=g",
		});

		setTweetMessage("");
		setTweetImage("");
	};

	return (
		<div className="tweetBox">
			<form>
				<div className="tweetBox__input">
					<Avatar />
					<input
						onChange={(e) => setTweetMessage(e.target.value)}
						value={tweetMessage}
						placeholder="What's poppin guys?"
						type="text"
					/>
				</div>
				<input
					value={tweetImage}
					onChange={(e) => setTweetImage(e.target.value)}
					className="tweetBox__imageInput"
					placeholder="Enter image URL if needed"
					type="text"
				/>
				<Button
					type="submit"
					onClick={sendTweet}
					className="tweetBox__tweet"
				>
					Tweet
				</Button>
			</form>
		</div>
	);
}

export default TweetBox;
