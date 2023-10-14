const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const validation = require('./validation');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

const server = http.createServer((req, res) => {
    // console.log("req", req)
})

app.listen(port, () => {
    console.log("server is running on", port)
})

app.use(bodyParser.json());

const allowedOrigins = ['http://localhost:4200'];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));
/** ============================================================================================= */
let coffee = [];

app.get('/api/coffee', (req, res) => {
    res.json(coffee);
});

app.post('/api/coffee', (req, res) => {
    try {
        // let coffee = []; 
        // console.log("coffee req=", req)
        const newCoffee = req.body;
        console.log("newCoffee", newCoffee)
        const schemaValidation = validation.schemaVal(newCoffee)
        if (schemaValidation) {
            coffee.push(newCoffee);
            res.status(201).json(newCoffee);
        } else {
            res.status(500).json("schema validation error")
        }
    } catch (e) {
        res.status(500).json(e)
    }
});

app.get('/api/coffee/:id', (req, res) => {
    console.log("req.params.id", req.params.id)
    const isCoffee = coffee.find((c) => c.id == req.params.id);
    if (!isCoffee) {
        res.status(404).json({
            error: 'Coffee not found'
        });
    } else {
        res.json(isCoffee);
    }
});

app.put('/api/coffee/:id', (req, res) => {
    const updatedCoffee = req.body;
    const index = coffee.findIndex((c) => c.id == req.params.id);
    if (index === -1) {
        res.status(404).json({
            error: 'Coffee not found'
        });
    } else {
        coffee[index] = updatedCoffee;
        res.json(updatedCoffee);
    }
});

app.delete('/api/coffee/:id', (req, res) => {
    const index = coffee.findIndex((c) => c.id == req.params.id);
    if (index === -1) {
        res.status(404).json({
            error: 'Coffee not found'
        });
    } else {
        coffee.splice(index, 1);
        res.status(204).send();
    }
});

/** ============================================================================================= */
let addon = [];

app.get('/api/addon', (req, res) => {
    res.json(addon);
});

app.post('/api/addon', (req, res) => {
    try {
        const newAddon = req.body;
        console.log("newAddon", newAddon)
        const schemaValidation = validation.schemaVal(newAddon)
        if (schemaValidation) {
            addon.push(newAddon);
            res.status(201).json(newAddon);
        } else {
            res.status(500).json("schema validation error")
        }
    } catch (e) {
        res.status(500).json(e)
    }
});

app.get('/api/addon/:id', (req, res) => {
    console.log("req.params.id", req.params.id)
    const isaAddon = addon.find((c) => c.id == req.params.id);
    if (!isAddon) {
        res.status(404).json({
            error: 'addon not found'
        });
    } else {
        res.json(isAddon);
    }
});

app.put('/api/addon/:id', (req, res) => {
    const updatedAddon = req.body;
    const index = addon.findIndex((c) => c.id == req.params.id);
    if (index === -1) {
        res.status(404).json({
            error: 'addon not found'
        });
    } else {
        addon[index] = updatedAddon;
        res.json(updatedAddon);
    }
});

app.delete('/api/addon/:id', (req, res) => {
    const index = addon.findIndex((c) => c.id == req.params.id);
    if (index === -1) {
        res.status(404).json({
            error: 'addon not found'
        });
    } else {
        addon.splice(index, 1);
        res.status(204).send();
    }
});
/** ============================================================================================= */

app.post('/api/calTotalPrice', (req, res) => {
    const { coffeeId, addons } = req.body;
  
    const selectedCoffeeType = coffee.find((c) => c.id == coffeeId);
  
    if (!selectedCoffeeType) {
      return res.status(404).json({ error: 'Coffee type not found' });
    }

    let total = selectedCoffeeType.price;
  
    if (addons && addons.length > 0) {
      for (const addOn of addons) {
        const selectedAddon = addon.find((a) => a.id == addOn);
        if (selectedAddon) {
          total += selectedAddon.price;
        }
      }
    }
  
    res.json({ total });
  });
