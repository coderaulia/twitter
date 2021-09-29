import React, { useState, useEffect } from "react";
import "./Timeline.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "../firebase";

function Timeline() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		// using post from firebase
		db.collection("posts").onSnapshot((snapshot) =>
			// looping document
			setPosts(snapshot.docs.map((doc) => doc.data()))
		);
	}, []);

	return (
		<div className="timeline">
			{/* Header */}
			<div className="timeline__header">
				<h2>Home</h2>
			</div>

			{/* Tweet Box */}
			<TweetBox />

			{/* Post */}
			{/* creating firebase database, creating firebase data collection, and adding value matching to all the props */}

			{posts.map((post) => (
				<Post
					key={post.text}
					displayName={post.displayName}
					username={post.username}
					verified={post.verfied}
					text={post.text}
					avatar={post.avatar}
					image={post.image}
				/>
			))}
		</div>
	);
}

export default Timeline;
