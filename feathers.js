

 
    const feathers = require('@feathersjs/feathers');
    const rest = require('@feathersjs/rest-client');

    const app = feathers();

    // const restClient = rest('http://localhost:3030')
    const restClient = rest('https://encaramessi-api.herokuapp.com')
    // const restClient = rest('https://api-eventos.yendo.site')
    const axios = require('axios');

    app.configure(restClient.axios(axios));

    const messages = app.service('messages');
    // const eventosNoAprobados = app.service('eventos-pendientes');

    export default {messages};

 