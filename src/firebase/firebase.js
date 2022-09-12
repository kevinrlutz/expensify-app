import * as firebase from 'firebase'

const firebaseConfig = {
	apiKey: 'AIzaSyBBMPFeC0P41VLCZVfCn96WyX0JZGtLAto',
	authDomain: 'expensify-8cbd5.firebaseapp.com',
	databaseURL: 'https://expensify-8cbd5-default-rtdb.firebaseio.com',
	projectId: 'expensify-8cbd5',
	storageBucket: 'expensify-8cbd5.appspot.com',
	messagingSenderId: '864278640346',
	appId: '1:864278640346:web:9a2315681383933d1717e3',
}

firebase.initializeApp(firebaseConfig)

firebase.database().ref().set({
	name: 'kevin',
})

console.log('-------- made it here ------------')
