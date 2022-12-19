function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
        let json = this.responseText;
        let arr = JSON.parse(json)
        let size = Object.keys(arr).length
        let c = 0;
        for (var i = 0; i < size; i++) {
            if ((username == arr[i].email || username == arr[i].nostudent) && password == arr[i].password) {
                if (arr[i].status == "student") {
                    window.location = "main.html";
                    localStorage.setItem("nostudent", arr[i].nostudent);
                }
                if (arr[i].status == "teacher") {
                    window.location = "Mainpage_Teacher.html";
                }
                c = 1
            }
        }
        if (c = 0) {
            alert("error")
        }
    }
    xhttp.open("GET", "/getProfile");
    xhttp.send();
};