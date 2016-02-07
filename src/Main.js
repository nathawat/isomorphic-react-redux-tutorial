import React, { Component } from 'react';

require('es6-promise').polyfill();
require('isomorphic-fetch');

import ArticleList from './ArticleList';
import Article from './Article';
import SearchBar from './SearchBar';

const API_URL = 'https://api.stackexchange.com/2.2/';

function fetchData(url, callback) {
	fetch(url)
	  	.then(response => {
	    	if (response.status >= 400) {
	      		throw new Error("Bad response from server");
	    	}
	    	return response.json();
	  	})
	  	.then(data => {
	    	callback(data);
	  	});
}

export default class Main extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			articles: []
		}

		this.getSearchResults = this.getSearchResults.bind(this);

		this.getLatestArticles();
	}

	getLatestArticles() {
		fetchData(`${API_URL}questions?order=desc&sort=activity&site=stackoverflow`, (data) => {
			this.setState({
				articles: data.items
			});
		});
	}

	getSearchResults(keyword) {
		fetchData(`${API_URL}search/advanced?order=desc&sort=activity&site=stackoverflow&q=${keyword}`, (data) => {
			this.setState({
				articles: data.items
			});
		});
	}

	render() {
		return (
			<div>
				<SearchBar getSearchResults={this.getSearchResults} />
				<ArticleList articles={this.state.articles} />
			</div>
		);
	}
}