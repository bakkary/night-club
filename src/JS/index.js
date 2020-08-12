document.addEventListener('DOMContentLoaded', () => {



    window.onload = randomPicture;



    var randomPic = new Array("/assets/bg/header_bg_1.jpg", "/assets/bg/header_bg_2.jpg")


    function randomPicture() {
        var randomNumber = Math.floor(Math.random() * randomPic.length);
        document.getElementById("assets__bg_header2").src = randomPic[randomNumber];
    }




    fetch("http://localhost:4000/blog-posts/1/comments", {
        "method": "GET"
    })
        .then(response => console.log(response))
        .catch(err => console.error(err));


    fetch("http://localhost:4000/assets/1", {
        "method": "GET"
    })
        .then(response => console.log(response))
        .catch(err => console.error(err));







    fetch("http://localhost:4000/gallery-photos")
        .then(response => response.json())
        .then(data => {
            var div = document.createElement('div');

            div.innerHTML = '';

            for (var prop in data) {
                console.log(data[prop]);
                div.innerHTML +=
                    '<span style="display:inline;"><img src="' + data[prop] + '"></span>';
            }
            document.getElementById('something').appendChild(div);
        })
        .catch(error => console.error(error))












})