import URI from './URI';
import axios from 'axios';

export default class API {
	constructor(url,params) {
		this.url = URI[url];
		this.params = params;
	}

	getURL() {
		return this.url;
	}

	getResponse() {
		return axios({
		  method: 'post',
		  url: this.url,
		  data: this.params,
		}).then(result => {
			return result.data;
		}).catch(error => {
			return error;
		});
	}
}