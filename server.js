const express = require('express');
const app = express();
const port = 80;

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/', require('./router.js'));

app.use(express.static('./asserts'));
app.listen(port, function(err) {
    if(err) {
        console.log('Error in Starting the Server', err);
        return;
    }

    console.log('Server is running on port on 8000!');
});

