var dotenv = require('dotenv');
dotenv.load();
const privateKey = process.env.my_key;
console.log(privateKey);