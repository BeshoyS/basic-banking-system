const express = require('express');
const dbConn = require('./config/config');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();
const customerRoutes = require('./src/customers/routes/customerRoutes');


dbConn();
app.use(express.json())
app.get('/', (req, res) => res.send('Hello World!'))
app.use(customerRoutes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))