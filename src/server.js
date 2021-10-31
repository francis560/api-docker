const app = require('./index');



app.listen( app.get('port'), (req, res) => {
    console.log('Server on port', app.get('port'));
});




module.exports = app;