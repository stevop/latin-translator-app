import "./App.css";

const App = () => {
	const submitHandler = () => {};

	return (
		<div className="App">
			<h1>Welcome to Translator App</h1>
			<h2>by Stephanus</h2>
			<p>Scroll down to see how the app works.</p>
			<form onSubmit={submitHandler}>
				<fieldset>
					<legend>
						<label htmlFor="text">Search for a word:</label>
					</legend>
					<input
						id="text"
						type="text"
					/>
					<button type="submit">Search</button>
				</fieldset>
			</form>
		</div>
	);
};

export default App;
