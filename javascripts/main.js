// think of main js as the gateway
// data from files is directed here and then everything is sent to app.js (compiler)

console.log('make movie');

const dataGatekeeper = require('./data-gatekeeper');

dataGatekeeper.initializer();
