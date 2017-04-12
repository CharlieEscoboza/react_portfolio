const express = require('express');
const path = require('path');
const { PORT } = require('./config/server');
const app = express();

const { homepage } = require('./routers');

app.set('views', path.resolve(__dirname, '../app/views'));
app.set('view engine', 'js');
app.engine('js',require('express-react-views').createEngine({beautify: true}));

app.use(express.static(path.resolve(__dirname, '../../public')));

app.use('/', homepage);

app.listen(PORT, function () {
  console.log(`App is runing on http://localhost:${PORT}`);
});
