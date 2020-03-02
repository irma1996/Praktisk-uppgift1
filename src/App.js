import React from 'react';
import SearchCity from './components/SearchCity';
import WeatherReport from './components/WeatherReport';

class App extends React.Component {
	state = {
	errorMessage: false,
	report: null,
	name: "",
	myData: null
	};
	onChange = e => {
	this.setState({
	name: e.target.value
	});
	};

	handleApi = e => {
	e.preventDefault();
	fetch(
	`http://api.openweathermap.org/data/2.5/weather?q=${this.state.name}&units=metric&appid=a9f6719e37f20890ebff5d91724dec1f`
	)
	.then(response => response.json())
	.then(data => {
	this.setState({
	myData: data,
	report: true
	});
	console.log(data);
	});
	};

	render() {
	return (
	<div id="app">
	<div className="container my-5">
	<h1 className="text-center mb-5">
	<span role="img" aria-label="Weather?">
	🌦❔
	</span>
	</h1>

	<SearchCity
	onChange={this.onChange}
	handleApi={this.handleApi}
	/>

	{this.state.report ? (
	<WeatherReport data={this.state.myData} />
	) : (
	""
	)}
	</div>
	</div>
	);
	}
   }

export default App;
