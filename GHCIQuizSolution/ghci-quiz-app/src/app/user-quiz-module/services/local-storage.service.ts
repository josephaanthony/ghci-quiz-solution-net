import _ from 'lodash';

declare var localStorage;

export class LocalStorageService {
	private localStorageData;
	private storageCategory = '#ghci-mean#';

	constructor() {
		let initialValue = {};
		try {
			initialValue = JSON.parse(localStorage.getItem(this.storageCategory));
		} catch (error) {
			// Ignore Error
		}

		if(_.isEmpty(initialValue)) {
			initialValue = {};
		}

		this.localStorageData = {};
		this.localStorageData[this.storageCategory] = initialValue;
		localStorage.setItem(this.storageCategory, JSON.stringify(initialValue));
	}

	setItem(key, value) {
		this.localStorageData[this.storageCategory][key] = value;
		localStorage.setItem(this.storageCategory, JSON.stringify(this.localStorageData[this.storageCategory]));
	}

	getItem(key) {
		return this.localStorageData[this.storageCategory][key];
	}
}
