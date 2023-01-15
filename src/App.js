import "./App.css";
import Form from "./components/Form";
import Tutorial from "./components/Tutorial";

const App = () => {
	const handleLink = () => {
		alert("Work in progress...");
	};

	return (
		<div className="App">
			<h1>Welcome to Latin Translator App</h1>
			<small>
				by{" "}
				<a
					target="_blank"
					rel="noreferrer"
					href="https://stefanp.netlify.app/">
					Stephanus Constantinus
				</a>
				, created in January 2023
			</small>
			<p>
				If you happen to not find the suitable translation, kindly check my
				second translator app{" "}
				<a
					onClick={handleLink}
					href="#">
					here
				</a>
				.
			</p>
			<Form />
			<Tutorial />
		</div>
	);
};

export default App;
