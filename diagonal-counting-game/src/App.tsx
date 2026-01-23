import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	const onClickSample = () => {
		setCount((prev) => prev + 1);
	};

	return (
		<>
			<p>Hello {count}</p>
			<button onClick={onClickSample}> Click ME </button>
		</>
	);
}

export default App;
