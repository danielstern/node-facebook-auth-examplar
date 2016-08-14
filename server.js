let express = require('express');
let app = new express();
let port = 7777;
app.use(express.static('./app'));
app.listen(port,()=>{console.log(`App listening on port ${port}!`)});
