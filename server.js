const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const fakeDatabase = {
    users: [
        {
            uid: '1',
            name: 'Siân',
            email: 'sian@coffeeshop.com',
            password: 'redux',
            birthday: 'Close to mine',
            favDrink: 'Americano',
            joined: new Date()
        },
        {
            uid: '2',
            name: 'Matt',
            email: 'matt@coffeeshop.com',
            password: 'placeholder',
            birthday: 'Some time this millennium. God I\'m old',
            favDrink: 'Cappuccinno',
            joined: new Date()
        },
        {
            uid: '3',
            name: 'Ciaran',
            email: 'ciaran@coffeeshop.com',
            password: 'wallet',
            birthday: '04/08/89',
            favDrink: 'Flat White',
            joined: new Date()
        }

    ],
    drinks: [
        {
            name: 'Latte',
            sizes: ['Regular', 'Large'],
            milk: ['Dairy', 'Soya', 'Coconut'],
            sryups: ['Caramel', 'Vanilla', 'Hazelnut'],
            options: ['Dry', 'Regular Foam', 'Wet'],
            price: 2.9
        },
        {
            name: 'Cappuccino',
            sizes: ['Regular', 'Large'],
            milk: ['Dairy', 'Soya', 'Coconut'],
            sryups: ['Caramel', 'Vanilla', 'Hazelnut'],
            options: ['Dry', 'Regular Foam', 'Wet'],
            price: 2.9
        },
        {
            name: 'Americano',
            sizes: ['Regular', 'Large'],
            milk: ['Dairy', 'Soya', 'Coconut'],
            sryups: ['Caramel', 'Vanilla', 'Hazelnut'],
            options: ['Black', 'Splash of milk', 'Milky'],
            price: 2.3
        },
        {
            name: 'Flat White',
            sizes: ['Regular'],
            milk: ['Dairy', 'Soya', 'Coconut'],
            sryups: ['Caramel', 'Vanilla', 'Hazelnut'],
            options: [],
            price: 2.7
        }
    ],
    pastries: [
        {
            name: 'Lemon Doughnut',
            allergens: ['Wheat', 'Egg'],
            price: 3.4
        },
        {
            name: 'Classic Ring Doughnut',
            allergens: ['Wheat', 'Egg'],
            price: 3.4
        },
        {
            name: 'Blueberry Muffin',
            allergens: ['Wheat', 'Egg'],
            price: 3
        },
    ]
}

app.get('/', (req, res) => {
    res.send('Hello world')
});

app.get('/users', (req, res) => {
    res.send(fakeDatabase.users)
});

app.get('/users/:id', (req, res) => {
    const {id} = req.params;
    let currentUser = fakeDatabase.users.filter(user => {
        return user.uid === id;
    });
    let isValid = currentUser.length === 0 ? 'User not found' : currentUser;
    res.send(isValid);
});

app.get('/drinks', (req, res) => {
    res.send(fakeDatabase.drinks);
});

app.get('/pastries', (req, res) => {
    res.send(fakeDatabase.pastries);
}); 

app.listen(3001, () => {
    console.log('server running on port 3001');
});