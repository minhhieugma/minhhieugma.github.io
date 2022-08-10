export function start() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyBgJWciTPppsddFimj2JDH2AGXEiSOgFKI",
        authDomain: "minhhieugma-146816.firebaseapp.com",
        databaseURL: "https://minhhieugma-146816.firebaseio.com",
        projectId: "minhhieugma-146816",
        storageBucket: "minhhieugma-146816.appspot.com",
        messagingSenderId: "128954796547",
        appId: "1:128954796547:web:98befa8785cd0ff97a5c36",
        measurementId: "G-JWBZFK4RGS"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    // 1) Create a new firebaseui.auth instance stored to our local variable ui
    const ui = new firebaseui.auth.AuthUI(firebase.auth())

    // 2) These are our configurations.
    const uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult(authResult, redirectUrl) {
                console.log(authResult)
                return true
            },
            uiShown() {
                // alert('uiShown')
            },
        },
        signInFlow: "popup",
        signInSuccessUrl: "/",// "signedIn",
        signInOptions: [
            // firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // Additional login options should be listed here
            // once they are enabled within the console.
        ],
    }

    // 3) Call the 'start' method on our ui class
    // including our configuration options.
    ui.start("#firebaseui-auth-container", uiConfig)
}

export function hide() {
    const container = document.getElementById("firebaseui-auth-container")
    container.parentNode.removeChild(container);
}
