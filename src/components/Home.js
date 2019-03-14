import React, { Component } from 'react';
import '../styles/App.css';
import Map from './Map';
import cities from './cityData';
import { Button } from 'rebass';
const uri = process.env.REACT_APP_TWITTER_URI

class Home extends Component {
	constructor() {
		super();
		// Define the initial state:
		this.state = {
			city: 'default',
			center: { lat: 40.7127, lng: -74.0059 },
			zoom: 13,
			tweets: null
		};
	}

	renderCity = (e) => {
		e.preventDefault();
		let city = e.target.textContent;
		let cityData = cities[e.target.dataset.index];
		this.setState({
			city: city,
			center: { lat: cityData.lat, lng: cityData.lng },
			zoom: cityData.zoom
		});
		this.grabTweets(cityData.lat,cityData.lng,cityData.miles)
	};

	grabTweets = (lat, lng, m) => {
		return fetch(`${uri}&geocode=${lat},${lng},${m}mi`)
			.then((res) => res.json())
			.then((r) => {
				console.log('res', r);
				let tweets = JSON.stringify(r.statuses.map(status => status.user.name))
				document.getElementById("tweets").innerHTML = `${tweets}`

				return this.setState({
					tweets: r.statuses
				});
			})
			.catch((err) => console.error(err));
	}


	render() {
		const { tweets } = this.state;
		console.log('state', this.state.center);
		return (
			<div className="App">
				<header className="App-header">
					<h1> Pick a City</h1>
					<CityList renderCity={this.renderCity} />
				</header>
				<div id="tweets"></div>
				<div id="map">
					<Map
						city={this.state.city}
						center={this.state.center}
						zoom={this.state.zoom}
					/>
				</div>
			</div>
		);
	}
}

const CityButton = (props) => {
	return (
		<Button
			data-index={props.index}
			onClick={props.renderCity}
			color="white"
			bg="#282c34"
			mx={0.5}>
			{props.name}
		</Button>
	);
};

const CityList = (props) => {
	return cities.map((city, index) => (
		<CityButton name={city.name} index={index} renderCity={props.renderCity} />
	));
};

export default Home;
