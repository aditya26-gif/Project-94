const firebaseConfig = {
    apiKey: "AIzaSyCa5QAHvRwlAJ8sn_7hyxn42ZgZ7_OKu88",
    authDomain: "kwitter-web-app-part-2.firebaseapp.com",
    projectId: "kwitter-web-app-part-2",
    storageBucket: "kwitter-web-app-part-2.appspot.com",
    messagingSenderId: "546433048965",
    appId: "1:546433048965:web:85c78c3ba72f8e0be424ec"
  };

  const app = initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;

});});}
getData();
