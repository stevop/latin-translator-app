import "./App.css";
import Form from "./components/Form";
import Tutorial from "./components/Tutorial";

const App = () => {
	return (
		<div className="App">
			<h1>Welcome to Latin Translator App</h1>
			<small>
				by{" "}
				<a
					target="_blank"
					rel="noreferer"
					href="https://stefanp.netlify.app/">
					Stephanus Constantinus
				</a>
				, created in January 2023
			</small>
			<p>
				1. Checkout the <a href="#tutorial">tutorial section</a> to see how the
				app works.
			</p>
			<p>
				2. If you happen to not find the suitable translation, kindly check my
				second translator app <a href="#">here</a>.
			</p>
			<Form />
			<Tutorial />
		</div>
	);
};

export default App;
