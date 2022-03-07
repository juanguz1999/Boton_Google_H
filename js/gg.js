var Email = "Sin captura";
var name = "Sin nombre";

function onSuccess(googleUser) {
    window.location.href = "logout.html";
    var profile = googleUser.getBasicProfile();
    Email = profile.getEmail();
    name = profile.getName();
    console.log("Email: " + Email);
    console.log("Nombre: " + name);
    document.cookie = "correo="+Email;
    document.cookie = "nombre="+name;
    
    /*Posibles consultas adicionales
    console.log("ID: " + profile.getId()); // Don't send this directly to your server!
    console.log('Full Name: ' + profile.getName());
    console.log('Given Name: ' + profile.getGivenName());
    console.log('Family Name: ' + profile.getFamilyName());
    console.log("Image URL: " + profile.getImageUrl());
    */
}
function onFailure(error) {
    console.log(error);
}
function renderButton() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');
    });
}

function onLoad() {
    gapi.load('auth2', function() {
    gapi.auth2.init();
    });
}