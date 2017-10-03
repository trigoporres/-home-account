const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const cors         = require('cors');

const app = express();

require('./config/database');

var whitelist = [
    'http://localhost:4200',
];
var corsOptions = {
    origin: function(origin, callback){
        var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};
app.use(cors(corsOptions));


app.locals.title = 'Express - Generated with IronGenerator';

require('./config/session.js')(app);
require('./config/express')(app);
require('./passport/serializers');
require('./passport/local');

const authRoutes = require('./routes/auth');
const debt = require('./routes/debtRoutes');
const expenses = require('./routes/expensesRoutes');
const index = require('./routes/index');
const project = require('./routes/projectRoutes');
const user = require('./routes/userRoutes');

app.use('/auth', authRoutes);
app.use('/debt', debt);
app.use('/expenses', expenses);
app.use('/', index);
app.use('/project', project);
app.use('/user', user);

require('./config/error-handler')(app);

module.exports = app;
