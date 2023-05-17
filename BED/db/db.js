//import mysql library
const mysql = require("mysql");

//declare variable for process.env.
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_NAME = process.env.DB_NAME;
const DB_CNNLIM = process.env.DB_CNNLIM;
const DB_QLIM = process.env.DB_QLIM;
const DB_WAITCNN = process.env.DB_WAITCNN;

const dbconf = {
	host: DB_HOST,
	port: DB_PORT,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
	connectionLimit: DB_CNNLIM,
	queueLimit: DB_QLIM,
	waitForConnection: DB_WAITCNN,
	// retain DATE as a string
	dateStrings: true
}

//create connection between dbConfig.js and .env.development
const connection = mysql.createConnection(dbconf);
const pool  = mysql.createPool(dbconf);

function handlediscnn() {
	console.log('handleDisconnect()');
	connection.destroy();
	connection = mysql.createConnection(db_config)
	connection.connect(function (err) {
		if (err) {
			console.log("err connecting to db - code: ", err.code);
			setTimeout(handlediscnn, 1000);
		} else {
			console.log("connected!")
		}
	})
}

var del = connection._protocol._delegateError;
connection._protocol._delegateError = function (err, sequence) {
	if (err.fatal) {
		console.trace('fatal error: ' + err.message);
	};
	return del.call(this, err, sequence);
};

process.on('uncaughtException', function (err) {
	if (err.code == "PROTOCOL_CONNECTION_LOST") {
		handlediscnn;
	} else {
		throw err;
	};
});

//export the connection
module.exports = connection, pool;