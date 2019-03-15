const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const cors = require('cors');
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.post('/encode', (req, res)=> {
    res.send({"encodedText": Vigenere.Cipher(req.body.password).crypt(req.body.encodeText)});
});

app.post('/decode', (req, res)=> {
    res.send({"decodedText": Vigenere.Decipher(req.body.password).crypt(req.body.decodeText)});
});

app.listen(port, () => {
    console.log('We"re live on http:localhost:' + port)
});