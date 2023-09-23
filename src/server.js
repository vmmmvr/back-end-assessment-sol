const {app} = require("./app/app");
const routes = require("./api/routes")

app.use('/', routes)
app.listen('2000', () => console.log('app is running on port 2000'));