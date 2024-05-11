//to link spotify api
//after clicking on login button, the link takes us to the following link
export const authEndpoint =
"http://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "51f48d730bdd4339a15e74b02308603f"


//scope gives permission  to the clone app to have ONLY these functions
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

//practice the following code
export const getTokenFromUrl = () => {
    //the following line will find the response after the hash of localhost
    return window.location.hash.substring(1).split('&')
    .reduce((initial, item) => {
        let parts = item.split('=');
        initial[parts[0]] =decodeURIComponent(parts[1]);

        return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;