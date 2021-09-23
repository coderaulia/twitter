import React from "react";
import "./Widget.css";
import {
	TwitterTimelineEmbed,
	TwitterShareButton,
	TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widget() {
	return (
		<div className="widgets">
			<div className="widgets__input">
				<SearchIcon className="widgets__searchIcon" />
				<input placeholder="Search Twitter" type="text" />
			</div>

			<div className="widgets__widgetContainer">
				<h2>What's happening</h2>

				<TwitterTweetEmbed tweetId={"1441069968351801350"} />

				<TwitterTimelineEmbed
					sourceType="profile"
					screenName="coderaulia"
					options={{ height: 400 }}
				/>

				<TwitterShareButton
					url={"https://facebook.com/auliasatriowibowo"}
					options={{ text: "follow me on twitter!", via: "coderaulia" }}
				/>
			</div>
		</div>
	);
}

export default Widget;
