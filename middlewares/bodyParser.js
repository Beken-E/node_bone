const bodyParser = require('body-parser');

const bodyParserMiddleware = (app) => {
    if (!app) throw new Error(`Ошибка передан пустой параметр: app`);
    
    app.use(bodyParser.json({ limit: '100mb' }));
    app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
}

module.exports = bodyParserMiddleware;