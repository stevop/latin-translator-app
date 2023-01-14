import "./Form.css";
import { useEffect, useState } from "react";

const Form = () => {
	const [word, setWord] = useState("");
	const [data, setData] = useState("");
	// if data exists, set switch to true and display data
	const [switcher, setSwitcher] = useState(false);

	const fetchFirstData = async (term) => {
		return await fetch(
			`https://www.latin-is-simple.com/api/vocabulary/search/?query=${term}&forms_only=false`
		)
			.then((response) => response.json())
			.then((data) => setData(data))
			.catch((err) => console.error(err));
	};

	const submitHandler = (e) => {
		e.preventDefault();
	};

	useEffect(() => {
		data ? setSwitcher(true) : setSwitcher(false);
		fetchFirstData(word);
		console.log(data);
	}, [word]);

	return (
		<div className="Form">
			<form onSubmit={submitHandler}>
				<fieldset>
					<legend>
						<label htmlFor="text">Search for a word: {word}</label>
					</legend>
					<input
						id="text"
						type="text"
						onChange={(e) => setWord(e.target.value)}
					/>
					<button type="submit">Search</button>
				</fieldset>
			</form>
			{switcher && <div className="Form-data"></div>}
		</div>
	);
};

export default Form;
