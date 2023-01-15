import "./Form.css";
import { useState } from "react";

const Form = () => {
	const inputValue = document.getElementById("text");
	const [word, setWord] = useState(null);
	const [query, setQuery] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (!query) return;

		// creating a fetch function
		const fetchData = async () => {
			const response = await fetch(
				`https://www.latin-is-simple.com/api/vocabulary/search/?query=${query}&forms_only=false`
			);
			const data = await response.json();
			setWord(data);
			// console.log(data);
		};
		// Calling a fetchData
		fetchData();
		// cleaning up the input
		inputValue.value = "";
	};

	return (
		<div className="Form">
			<form onSubmit={submitHandler}>
				<fieldset>
					<legend>
						<label htmlFor="text">
							Searching for a word: <b>{query}</b>
						</label>
					</legend>
					<input
						id="text"
						type="text"
						placeholder="ex. 'portus'"
						onChange={(e) => setQuery(e.target.value)}
					/>
					<button type="submit">Search</button>
				</fieldset>
			</form>
			{word &&
				word.map((oneWord) => {
					return (
						<table key={oneWord.id}>
							<thead>
								<tr>
									<th scope="col">Word</th>
									<th scope="col">Translation</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td
										className="Form-word"
										scope="col">
										{oneWord.full_name}
									</td>
									<td scope="col"> {oneWord.translations_unstructured.en}</td>
								</tr>
							</tbody>
						</table>
					);
				})}
		</div>
	);
};

export default Form;
