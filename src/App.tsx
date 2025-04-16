import React from "react";
import "./assets/styles/main.css";

import { isCustomWidget } from "@gooddata/sdk-ui-dashboard";

export const methodFromSDK = () => {
	return isCustomWidget({});
};

const App: React.FC = () => {
	return (
		<div>
			<h1>Welcome to the React Vite App</h1>
			<p>This is a simple application bootstrapped with Vite and React.</p>
		</div>
	);
};

export const add = (a: number, b: number): number => {
	return a + b;
};

export default App;
