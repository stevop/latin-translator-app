import "./Form.css";
import { useState } from "react";

const Form = () => {
	const [word, setWord] = useState(null);
	const [query, setQuery] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (!query) return;

		const fetchData = async () => {
			const response = await fetch(
				`https://www.latin-is-simple.com/api/vocabulary/search/?query=${query}&forms_only=false`
			);
			const data = await response.json();
			setWord(data);
			// console.log(data);
		};
		fetchData();
	};

	return (
		<div className="Form">
			<form onSubmit={submitHandler}>
				<fieldset>
					<legend>
						<label htmlFor="text">Search for a word: {query}</label>
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
