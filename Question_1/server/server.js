const app = require('./src/app');
const config = require('./config/index');

app.listen(config.PORT, () => {
    console.log(`Average Calculator microservice listening at http://localhost:${config.PORT}`);
});