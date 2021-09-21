import React from "react";
import "./index.css";
import "./App.css";
import Sidebar from "./parts/Sidebar";
import Timeline from "./parts/Timeline";
import Widget from "./parts/Widget";

function App() {
	return (
		<div className="app">
			{/* Sidebar */}
			<Sidebar />

			{/* Timeline */}
			<Timeline />

			{/* Widgets */}
			<Widget />
		</div>
	);
}

export default App;
