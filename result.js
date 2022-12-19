function loadDoc() {
    var id = localStorage.getItem("nostudent") //ดึงข้อมูลที่เก็บเว็บตอนlogin
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
        let json = this.responseText
        try {
            let arr = JSON.parse(json)
            let size = Object.keys(arr).length
            for (let i = 0; i < size; i++) {
                console.log(arr[i])
                if (arr[i].nostudent == id) { //เช็คแล้ว
                    var table = document.getElementById(id);
                    // var row = table.insertRow();
                    //row.insertCell().innerHTML = s;

                    var input = document.createElement("input");
                    row.insertCell().appendChild(input);
                    input.type = "text";

                }
            }
        } catch (err) {
            alert("Not Found" + err)
        }
    }

    xhttp.open("GET", "/getInfo")
    xhttp.send()
}

function edit() { //คลิกแก้ไข
    localStorage.setItem("date", arr[i].datetime);
    window.location = "edit.html";
}