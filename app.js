œconst express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Bonjour les amis comment ça ?œ'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
