function onSignIn(userProfile) {
    console.log(userProfile);
 const profile =   userProfile.getBasicProfile();
 console.log(profile);
 const userName = profile.getName();
 console.log(userName);
 const userEmail = profile.getEmail();
 console.log(userEmail);
 // const id_token = userProfile.getAuthResponse().id_token;
 const {id_token} = userProfile.getAuthResponse()
 console.log(id_token);
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
function onFailure(err) {
    console.log(err);
}

function renderButton () {
    gapi.signin2.render('signInBtn', {
        height: 50,
        width: 300,
        theme: 'dark',
        onsuccess: onSignIn,
        onfailure: onFailure,
        longtitle: true,
    }) ;  // gapi = google api,  signin = version 2
}

window.onload = () => {
    renderButton();
}
//window.onload = renderButton;
