import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
//child_added event is triggered every time a child is added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// //child_changed event is triggered every time a child is changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

//child_removed event is triggered every time a child is removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// subscribe changes on data array from firebase
// database.ref('expenses')
//     .on('value',(snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// read data off of array from firebase
// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// list based data using push, which will generate array with a serial number
// database.ref('expenses').push({
//     description: 'AirPods pro?',
//     note: 'Daniel broke it so we need to repair it',
//     amount: 50,
//     createdAt: 0
// });

// database.ref('expenses').push({
//     description: 'Red Chilli!',
//     note: 'ethic food of the week yay!',
//     amount: 40,
//     createdAt: -1
// });


// database.ref()
    // get a certain value using 'once'
    // .once('value')
    // .then((snapshot) => {
    //     const val = snapshot.val();
    //     console.log(val);
    // })
    // .catch((e) => {
    //     console.log('Error fetching data', e)
    // });

    //get all value using on, on/off turns on/off the subscription of the data
    // .on('value', (snapshot) => {
    //     console.log(snapshot.val());
    // });

    // database.ref().on('value', (snapshot) => {
    //     const val = snapshot.val();
    //     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
    // })

// using set
// database.ref().set({
//     name: 'Bruce',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Software Engineer',
//         company: 'TCS'
//     },
//     location: {
//         city: 'Osewego',
//         state: 'New York'
//     },
//     wantsTo: '吃火锅!',
// }).then(() => {
//     console.log('Data is saved!')
// }).catch((e) => {
//     console.log('This failed', e);
// });


//using update to update, using '/' to access object
// database.ref().update({
//     stressLevel: 5,
//     'job/company': 'Google',
//     'location/city' : 'New York City'
// })