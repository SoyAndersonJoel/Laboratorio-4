// Laboratorio 4
// Fybeca 

// Objectos
const clientRegistration = {
    id: 1752342,
    firstName: 'Anderson',
    lastName: 'Vilatuña ',
    gender: 'hombre',
    mobile: '09535575',
    password: '1231321',
    email: 'anderson@epn.edu.ec'
};

console.log(clientRegistration.firstName);
console.log(clientRegistration.id);

const { id, firstName, email } = clientRegistration;
console.log(id);
console.log(firstName);

clientRegistration.photo = 'user1.png';
console.log(clientRegistration);

delete clientRegistration.gender;

Object.values(clientRegistration).includes("") ? console.log('Error') : console.log('OK');


const medicamentOne = {
    name: 'Eucerin',
    price: 15.23
};

const medicamentTwo = {
    name: 'neutrogena',
    price: 14.43
};

const orders = { ...medOne, ...medTwo };
console.log(orders);

// Arrays

const cart = [
    {
        image: 'photo1.jpg',
        productName: 'Perlavite e caps',
        description: '1000 Ui C/30 Caja',
        cost: 13.86
    },

    {
        image: 'photo2.jpg',
        productName: 'protector solar',
        description: '1000 Ui C/30 Caja',
        cost: 15.50 
    },
    
    {
        image: 'photo3.jpg',
        productName: 'Sérun Triple efect',
        description: ' 40 G 1 Unidad',
        cost: 14.16
    },

    {
        image: 'photo4.jpg',
        productName: 'Tocovit-E 400 caps',
        description: '400 U.I. C/60 Caja',
        cost: 7.40
    }
];

cart.forEach((item, index) => {
    console.log(`${index + 1} - ${item}`);
});
cart.forEach((item, index) => {
    console.log(`${index + 1} ${item.productName} ${item.cost}`);
});

const orderSummary = cart.map((item) => { 
    return {
        name: item.productName,
        cost: item.cost
    };
});

const [orderItem1, orderItem2, orderItem3] = cart;

const newOrder1 = {
    image: 'photo5.jpg',
    productName: 'Creama facial',
    description: 'Filler Elasticity',
    cost: 38.86
};

const newOrder2 = {
    image: 'photo6.jpg',
    productName: 'Crema antiarrugas',
    description: 'Hyaluron-filler + Elasticity ',
    cost: 38.87
};

cart.push(newOrder1);

const allOrders = [...cart, newOrder2];
