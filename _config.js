var config = {}

// Update to have your correct username and password and changes
config.mongoURI = {
    production: 'mongodb+srv://barchokpatrick:1234@gallery.evbmrye.mongodb.net/?retryWrites=true&w=majority',
    development: 'mongodb+srv://barchokpatrick:1234>@gallery.evbmrye.mongodb.net/?retryWrites=true&w=majority',
    test: 'mongodb+srv://barchokpatrick:1234@gallery.evbmrye.mongodb.net/?retryWrites=true&w=majority',
}
module.exports = config;
var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
