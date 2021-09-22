import React from "react";
import "./Post.css";
import Avatar from "@mui/material/Avatar";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
	return (
		<div className="post">
			<div className="post__avatar">
				<Avatar />
			</div>
			<div className="post__body">
				<div className="post__header">
					<div className="post__headerText">
						<h3>
							Aulia Satrio{" "}
							<span className="post__headerSpecial">
								<VerifiedIcon className="post__badge" /> @coderaulia
							</span>
						</h3>
					</div>
					<div className="post__headerDescription">
						<p>Hello world, welcome to my twats</p>
					</div>
				</div>
				<img
					src="https://media4.giphy.com/media/QYkX9IMHthYn0Y3pcG/giphy.gif?cid=ecf05e47v8m71o192bjok8vil075ej7hvdnan7qj6iprhywa&rid=giphy.gif&ct=g"
					alt=""
				/>
				<div className="post__footer">
					<ChatBubbleOutlineIcon fontSize="small" />
					<RepeatIcon fontSize="small" />
					<FavoriteBorderIcon fontSize="small" />
					<PublishIcon fontSize="small" />
				</div>
			</div>
		</div>
	);
}

export default Post;
