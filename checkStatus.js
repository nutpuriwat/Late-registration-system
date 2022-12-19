function loadDoc() {
    var id = localStorage.getItem("nostudent") //ดึงข้อมูลที่เก็บเว็บตอนlogin
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
        let json = this.responseText
        try {
            let arr = JSON.parse(json)
            let size = Object.keys(arr).length
            for (let i = 0; i < size; i++) {
                if (arr[i].nostudent == id) { //เช็คแล้ว
                    console.log(arr[i])
                    for (var j = 1; eval("arr[" + i + "].addSubjectList" + j) != null; j++) {
                        var table = document.getElementById("tableAdd");
                        var row = table.insertRow();
                        row.insertCell().innerHTML = eval("arr[" + i + "].addSubjectList" + j + ".datetime")

                        var label = document.createElement("label");
                        row.insertCell().appendChild(label);
                        label.innerHTML = eval("arr[" + i + "].addSubjectList" + j + ".nosubject")

                        var label = document.createElement("label");
                        row.insertCell().appendChild(label);
                        label.innerHTML = eval("arr[" + i + "].addSubjectList" + j + ".section")

                        if (eval("arr[" + i + "].addSubjectList" + j + ".confirm_order") != null) {
                            if (eval("arr[" + i + "].addSubjectList" + j + ".confirm_order") == true) {
                                var label = document.createElement("label");
                                row.insertCell().appendChild(label);
                                label.innerHTML = "อนุมัติ"

                                var label = document.createElement("label");
                                row.insertCell().appendChild(label);
                            } else {
                                var label = document.createElement("label");
                                row.insertCell().appendChild(label);
                                label.innerHTML = "ไม่อนุมัติ"

                                var label = document.createElement("label");
                                row.insertCell().appendChild(label);
                            }
                        } else {
                            var label = document.createElement("label");
                            row.insertCell().appendChild(label);
                            label.innerHTML = "กำลังรอการพิจารณา"

                            var a = document.createElement('a');
                            row.insertCell().appendChild(a);
                            var linkText = document.createTextNode("แก้ไข");
                            a.appendChild(linkText);
                            a.href = "/edit.html";
                            a.onclick = function() { localStorage.setItem("date", arr[i].date); };

                        }
                    }


                    for (var j = 1; eval("arr[" + i + "].dropSubjectList" + j) != null; j++) {
                        var table = document.getElementById("tableDrop");
                        var row = table.insertRow();
                        row.insertCell().innerHTML = eval("arr[" + i + "].dropSubjectList" + j + ".datetime")

                        var label = document.createElement("label");
                        row.insertCell().appendChild(label);
                        label.innerHTML = eval("arr[" + i + "].dropSubjectList" + j + ".nosubject")

                        var label = document.createElement("label");
                        row.insertCell().appendChild(label);
                        label.innerHTML = eval("arr[" + i + "].dropSubjectList" + j + ".section")

                        if (eval("arr[" + i + "].dropSubjectList" + j + ".confirm_order") != null) {
                            if (eval("arr[" + i + "].dropSubjectList" + j + ".confirm_order") == true) {
                                var label = document.createElement("label");
                                row.insertCell().appendChild(label);
                                label.innerHTML = "อนุมัติ"

                                var label = document.createElement("label");
                                row.insertCell().appendChild(label);
                            } else {
                                var label = document.createElement("label");
                                row.insertCell().appendChild(label);
                                label.innerHTML = "ไม่อนุมัติ"

                                var label = document.createElement("label");
                                row.insertCell().appendChild(label);
                            }
                        } else {
                            var label = document.createElement("label");
                            row.insertCell().appendChild(label);
                            label.innerHTML = "กำลังรอการพิจารณา"

                            var a = document.createElement('a');
                            row.insertCell().appendChild(a);
                            var linkText = document.createTextNode("แก้ไข");
                            a.appendChild(linkText);
                            a.href = "/edit.html";
                            a.onclick = function() { localStorage.setItem("date", arr[i].date); };
                        }

                    }
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