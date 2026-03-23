//------------ex1-----------------

db.createCollection("users");

db.users.insertOne({
  name: "Mira",
  email: "mira@tech.ma",
  address: {
    city: "Casablanca",
    country: "Morocco",
    postalCode: "20000",
  },
});

db.users.find();

// sample output
// {
//   _id: ObjectId('69a5eee02bb8a39e6171185f'),
//   name: 'Mira',
//   email: 'mira@tech.ma',
//   address: { city: 'Casablanca', country: 'Morocco', postalCode: '20000' }
// }

//------------ex2-----------------

db.createCollection("orders");

db.orders.insertOne({
  orderNumber: "ORD-99X",
  total: 1500,
  currency: "MAD",
  status: "Processing",
  userId: ObjectId("69a5eee02bb8a39e6171185f"),
});

db.orders.find();

// sample output
// {
//   _id: ObjectId('69a5f2492bb8a39e61711860'),
//   orderNumber: 'ORD-99X',
//   total: 1500,
//   currency: 'MAD',
//   status: 'Processing',
//   userId: ObjectId('69a5eee02bb8a39e6171185f')
// }

//------------ex3-----------------

//------------ex4-----------------

//------------ex5-----------------

//------------ex6-----------------
