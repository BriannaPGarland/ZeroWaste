//Notify Library
const notificationapi = require('notificationapi-node-server-sdk').default

// Unique Identifier for Objects
const ObjectId = require('mongodb').ObjectId;

notificationapi.init('2qmdq4lqr3uv7mncfuhh8vvrrr', 'igrm2js257g3iqh9nrjmc9tfrdfcdv8p4kea531phafpdp33tfu');

// send Notification to User
function sendNotification(notiType,Restaurant){
  let alerttext = ""
  if (notiType == "Low Ingredients"){
    alerttext = "Looks like you're running low on a few items in your inventory. Go check it out ASAP!"
  }
  else if (notiType == "Donation"){
    alerttext = "You've donated items in your inventory to a community in need! Thanks for contribution!"
  }
  else if (notiType == "Expired Ingredients"){
    alerttext = "You have some ingredients that are close to expiry/expired! Either use them or throw them out as soon as you can!"
  }

  notificationapi.send({
    notificationId: 'zerowaste_test_alert',
    user: {
      id: new ObjectId(),
      email: Restaurant.email, // required for email notifications
      number: Restaurant.phone // required for SMS

    },
    mergeTags:{firstName:Restaurant.name, AlertText: alerttext}
  });


}



module.exports = {sendNotification}