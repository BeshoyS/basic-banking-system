const mongoose = require('mongoose');
const customerSchema = require('../schema/customerSchema');

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;