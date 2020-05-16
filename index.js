const express = require('express');
const app = express();

app.set('view engine', 'pug');

// serve static files from the `public` folder
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Homepage'
  });
});

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
