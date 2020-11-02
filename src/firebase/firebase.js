import * as firebase from 'firebase';

var baseconfig = {
	apiKey: "AIzaSyAhxmvimBefAd96R_IUW7dAzYWTkJUnvZk",
	authDomain: "react-redux-budgetify.firebaseapp.com",
	databaseURL: "https://react-redux-budgetify.firebaseio.com",
	projectId: "react-redux-budgetify",
	storageBucket: "react-redux-budgetify.appspot.com",
	messagingSenderId: "984283757214",
	appId: "1:984283757214:web:bff2e00fa25e518b04998f",
	measurementId: "G-TPSBCW91GL"
};
  

firebase.initializeApp(baseconfig)

firebase.database().ref().set({
	name: 'mitilian'
})