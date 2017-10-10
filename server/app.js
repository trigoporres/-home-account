const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const cors         = require('cors');
const dotenv       = require('dotenv').config();
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
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
require('./passport/serializers');
require('./passport/local');

const authRoutes = require('./routes/auth');
const debt = require('./routes/debtRoutes');
const expenses = require('./routes/expensesRoutes');
const project = require('./routes/projectRoutes');

app.use('/auth', authRoutes);
app.use('/user/:id/project', project);
app.use('/user/:id/debt', debt);
app.use('/user/:id/expenses', expenses);
app.all('/*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

require('./config/error-handler')(app);

module.exports = app;
