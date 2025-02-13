const express = require('express');
const os = require('os');

const app = express();

app.get('/', (req, res) => {
    const hostname = os.hostname();

    const ip = require('dns').lookup(hostname, (err, address) => {
        if (err) {
            res.status(500).send('Error IP');
        } else {
            res.send(`${hostname} -- ${address}`)
        }
    })
})

app.listen(3000, "0.0.0.0", () => {
    console.log('server is running on 3000');
})