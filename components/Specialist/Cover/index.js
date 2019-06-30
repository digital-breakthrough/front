import React from "react";
import Autosuggest from "react-autosuggest";
import SpecialistCoverImg from "../../../static/specialistCover.jpg";
import Link from "next/link";

import "./index.scss";

const specialisations = [
	{
		id: 0,
		label: "Системный архитектор"
	},
	{
		id: 1,
		label: "Программист java"
	},
	{
		id: 2,
		label: "Программист c#"
	},
	{
		id: 3,
		label: "Php разработчик"
	},
	{
		id: 4,
		label: "C разработчик"
	},
	{
		id: 5,
		label: "Oracle разработчик"
	},
	{
		id: 6,
		label: "SQL разработчик"
	},
	{
		id: 8,
		label: "Системный аналитик"
	},
	{
		id: 9,
		label: "Тестировщик по"
	},
	{
		id: 10,
		label: "Менеджер информационного отдела"
	}
];

const getSuggestions = value => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0
		? []
		: specialisations.filter(
			lang => lang.label.toLowerCase().slice(0, inputLength) === inputValue
		);
};

const getSuggestionValue = suggestion => suggestion.label;
const renderSuggestion = suggestion => (
	<div key={suggestion.id}>{suggestion.label}</div>
);

class SpecialistCover extends React.Component {
	constructor() {
		super();

		this.state = {
			value: "",
			suggestions: []
		};
	}

	onChange = (event, { newValue }) => {
		this.setState({
			value: newValue
		});
	};

	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
			suggestions: getSuggestions(value)
		});
	};

	onSuggestionsClearRequested = () => {
		this.setState({
			suggestions: []
		});
	};

	render() {
		const { value, suggestions } = this.state;

		const inputProps = {
			placeholder: 'Например, программист',
			value,
			onChange: this.onChange
		};

		return (
			<div className="specialist-cover">
				<img src={SpecialistCoverImg} />
				<div className="title">Для специалистов</div>
				<div className="select-specialisation">
					<label>
						Укажи свою профессию
			</label>
					<Autosuggest
						suggestions={suggestions}
						onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
						onSuggestionsClearRequested={this.onSuggestionsClearRequested}
						getSuggestionValue={getSuggestionValue}
						renderSuggestion={renderSuggestion}
						inputProps={inputProps}
					/>
				</div>
				<div className="subtitle">
					Покажи на сколько ты крут, подтверди свои компетенции
        </div>
				<Link href="/#">
					<a className="btn-test">
						Подтвердить
			</a>
				</Link>
			</div>
		);
	}
}

export default SpecialistCover;
