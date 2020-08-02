// XHM version - live
const xhr = new XMLHttpRequest();
const url = "http://xkcd.com/info.211.json";
xhr.open("Get", url);
xhr.send();
xhr.onreadystatechange = (e) => {
    console.log(JSON.parse(xhr.responseText));
}

function setup() {
    createCanvas(400, 600);
    var button = select('submit-xhm');
    var url = xhr + url;
}

// XHM version - test
// function submit() {
//         var xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function () {
//             if (xhr.readyState === 4) {
//                 alert(xhr.response);
//             }
//         }
//         xhr.open('get', 'http://xkcd.com/info.211.json', true);
//         xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//         xhr.send();
//     }
