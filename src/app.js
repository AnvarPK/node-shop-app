const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDir = require('./utils/path');
// const { engine } = require ('express-handlebars');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// app.engine('hbs', engine({
//     extname: 'hbs',
//     layoutsDir: path.join(rootDir, 'views', 'hbs', 'layouts'),
//     defaultLayout: 'main',
// }));
app.set('view engine', 'ejs');
app.set('views', path.join(rootDir, 'views', 'ejs'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use('/', shopRoutes);

app.use((req, res, next) => {
    res.render('404', { docTitle: 'Page Not Found', path: '/*' });
})

app.listen(3000);