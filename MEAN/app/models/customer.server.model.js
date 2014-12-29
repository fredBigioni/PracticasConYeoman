'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
	name: {
		type: String,
		default: '',
		required: 'Please fill Customer name',
		trim: true
	},
	address: {
		type: String,
		default: '',
		required: 'Please fill Customer address'
	},
	state: {
		type: String,
		default: '',
		required: 'Please fill Customer state'
	},
	country: {
		type: String,
		default: '',
		required: 'Please fill Customer country'
	},
	created: {
		type: Date,
		default: Date.now
	},
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Customer', CustomerSchema);