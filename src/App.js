import "./App.css";
import Form from "./components/Form";
import Tutorial from "./components/Tutorial";

const App = () => {
	return (
		<div className="App">
			<h1>Welcome to Translator App</h1>
			<small>by Stephanus Constantinus</small>
			<p>
				Checkout the <a href="#tutorial">tutorial section</a> to see how the app
				works.
			</p>
			<Form />
			<Tutorial />
		</div>
	);
};

export default App;
