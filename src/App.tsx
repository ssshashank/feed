import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

const FeedApp = () => (
	<div className='mt-10 text-3xl mx-auto max-w-6xl'>
		<div>Name: feed</div>
		<div>Framework: react</div>
		<div>Language: TypeScript</div>
		<div>CSS: Tailwind</div>
	</div>
);

export default FeedApp;
ReactDOM.render(<FeedApp />, document.getElementById("app"));
