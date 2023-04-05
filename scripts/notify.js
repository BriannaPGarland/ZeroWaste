//Notify Library
const notificationapi = require('notificationapi-node-server-sdk').default

// Unique Identifier for Objects
const ObjectId = require('mongodb').ObjectId;

// notificationapi.init('2qmdq4lqr3uv7mncfuhh8vvrrr', 'igrm2js257g3iqh9nrjmc9tfrdfcdv8p4kea531phafpdp33tfu');

// // send Notification to User
// notificationapi.send({
//   notificationId: 'ingredients_expiring',
//   user: {
//     id: new ObjectId(),
//     email: 'femirocks123@gmail.com', // required for email notifications
//     number: '8482399086' // required for SMS
//   }
// });