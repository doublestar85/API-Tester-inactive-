const xhr = new XMLHttpRequest();
const url = "http://xkcd.com/info.211.json";
xhr.open("Get", url);
xhr.send();
xhr.onreadystatechange = (e) => {
    console.log(JSON.parse(xhr.responseText));
}

function setup() {
    createCanvas(400, 600);
    var button = select('submit');
    var url = xhr + url;
}



fetch('http://xkcd.com/info.211.json')
    .then(response => response.json()) // response.json() returns a promise
    .then((response) => {
      console.log("I have friends!", response); //returns all of johnbob's friends
    })

