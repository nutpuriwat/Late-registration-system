function addRow(id, i) {
    s = parseInt(i) + 1;
    var table = document.getElementById(id);
    if (id == "Add") {
        var row = table.insertRow();
        row.insertCell().innerHTML = s;

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "text";
        input.id = "nosubjectA" + s;
        input.className = "inputtable";
        input.size = 4;
        input.required = "required";
        input.oninvalid = "this.setCustomValidity('กรุณากรอกข้อมูล')";
        input.oninput = "this.setCustomValidity('')";

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "text";
        input.id = "namesubjectA" + s;
        input.className = "inputtable";
        input.size = 15;
        input.required = "required";
        input.oninvalid = "this.setCustomValidity('กรุณากรอกข้อมูล')";
        input.oninput = "this.setCustomValidity('')";

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "text";
        input.id = "sectionA" + s;
        input.className = "inputtable";
        input.size = 10;
        input.required = "required";
        input.oninvalid = "this.setCustomValidity('กรุณากรอกข้อมูล')";
        input.oninput = "this.setCustomValidity('')";

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "datetime-local";
        input.id = "datetimeA" + s;
        input.className = "inputtable";

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "number";
        input.id = "valueA" + s;
        input.style = "width:3em";
        input.className = "inputtable";
        input.size = 2;
        input.required = "required";
        input.oninvalid = "this.setCustomValidity('กรุณากรอกข้อมูล')";
        input.oninput = "this.setCustomValidity('')";

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "text";
        input.id = "nameteacherA" + s;
        input.className = "inputtable";
        input.size = 15;
        input.required = "required";
        input.oninvalid = "this.setCustomValidity('กรุณากรอกข้อมูล')";
        input.oninput = "this.setCustomValidity('')";
    } else {
        var row = table.insertRow();
        row.insertCell().innerHTML = s;

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "text";
        input.id = "nosubjectD" + s;
        input.className = "inputtable";
        input.size = 4;
        input.required = "required";
        input.oninvalid = "this.setCustomValidity('กรุณากรอกข้อมูล')";
        input.oninput = "this.setCustomValidity('')";

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "text";
        input.id = "namesubjectD" + s;
        input.className = "inputtable";
        input.size = 15;
        input.required = "required";
        input.oninvalid = "this.setCustomValidity('กรุณากรอกข้อมูล')";
        input.oninput = "this.setCustomValidity('')";

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "text";
        input.id = "sectionD" + s;
        input.className = "inputtable";
        input.size = 10;
        input.required = "required";
        input.oninvalid = "this.setCustomValidity('กรุณากรอกข้อมูล')";
        input.oninput = "this.setCustomValidity('')";

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "datetime-local";
        input.id = "datetimeD" + s;
        input.className = "inputtable";

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "number";
        input.id = "valueD" + s;
        input.style = "width:3em";
        input.className = "inputtable";
        input.size = 2;
        input.required = "required";
        input.oninvalid = "this.setCustomValidity('กรุณากรอกข้อมูล')";
        input.oninput = "this.setCustomValidity('')";

        var input = document.createElement("input");
        row.insertCell().appendChild(input);
        input.type = "text";
        input.id = "nameteacherD" + s;
        input.className = "inputtable";
        input.size = 15;
        input.required = "required";
        input.oninvalid = "this.setCustomValidity('กรุณากรอกข้อมูล')";
        input.oninput = "this.setCustomValidity('')";
    }
}

function delRow(a) {
    s = document.getElementById(a).rows.length;
    document.getElementById(a).deleteRow(s - 1);
}

function addValue(i) {
    var s = parseInt(document.getElementById(i).textContent);
    if (s < 10) {
        document.getElementById(i).innerHTML = s + 1;
        if (i == "v_table1") {
            addRow(document.getElementById("Add").id, s);
        } else {
            addRow(document.getElementById("Drop").id, s);
        }
    } else {
        alert("เยอะเกินไป");
    }
}

function delValue(i) {
    var s = parseInt(document.getElementById(i).textContent);
    var c1 = parseInt(document.getElementById("v_table1").textContent);
    var c2 = parseInt(document.getElementById("v_table2").textContent);
    var sum = c1 + c2;
    if (s > 0) {
        if (i == "v_table1") {
            if (sum != 1) {
                document.getElementById(i).innerHTML = s - 1;
                delRow(document.getElementById("Add").id);
            }
        } else {
            if (sum != 1) {
                document.getElementById(i).innerHTML = s - 1;
                delRow(document.getElementById("Drop").id);
            }
        }
    }
}


function submitForm() {
    var c1 = parseInt(document.getElementById("v_table1").textContent);
    var c2 = parseInt(document.getElementById("v_table2").textContent);
    var obj = new Object();
    obj.date = document.getElementById("date").value;
    obj.ffname = document.getElementById("ffname").value;
    obj.fname = document.getElementById("fname").value;
    obj.lname = document.getElementById("lname").value;
    obj.nostudent = document.getElementById("nostudent").value;
    obj.nostudentyear = document.getElementById("nostudentyear").value;
    obj.major = document.getElementById("major").value;
    obj.address = document.getElementById("address").value;
    obj.tumbol = document.getElementById("tumbol").value;
    obj.amphur = document.getElementById("amphur").value;
    obj.province = document.getElementById("province").value;
    obj.postcode = document.getElementById("postcode").value;
    obj.mobilephone = document.getElementById("mobilephone").value;
    obj.phone = document.getElementById("phone").value;
    obj.teachers = document.getElementById("teachers").value;
    obj.reason = document.getElementById("reason").value;
    for (let i = 1; i <= c1; i++) {
        var objadd = new Object();
        objadd.nosubject = document.getElementById("nosubjectA" + i).value;
        objadd.namesubject = document.getElementById("namesubjectA" + i).value;
        objadd.section = document.getElementById("sectionA" + i).value;
        objadd.datetime = document.getElementById("datetimeA" + i).value;
        objadd.value = document.getElementById("valueA" + i).value;
        objadd.nameteacher = document.getElementById("nameteacherA" + i).value;
        eval("obj.addSubjectList" + i + " = objadd");
    }
    for (let i = 1; i <= c2; i++) {
        var objdel = new Object();
        objdel.nosubject = document.getElementById("nosubjectD" + i).value;
        objdel.namesubject = document.getElementById("namesubjectD" + i).value;
        objdel.section = document.getElementById("sectionD" + i).value;
        objdel.datetime = document.getElementById("datetimeD" + i).value;
        objdel.value = document.getElementById("valueD" + i).value;
        objdel.nameteacher = document.getElementById("nameteacherD" + i).value;
        eval("obj.dropSubjectList" + i + " = objdel");
    }
    if (document.getElementById("date").value == "") {
        alert("กรุณากรอกวันที่ด้วย");
    } else if (document.getElementById("fname").value == "") {
        alert("กรุณากรอกชื่อ");
    } else if (document.getElementById("lname").value == "") {
        alert("กรุณากรอกนามสกุล");
    } else if (document.getElementById("nostudent").value.toString().length != 10) {
        document.getElementById("nostudent").value = "";
        alert("กรุณาใส่เลขนักศึกษา 10 หลักให้ถูกต้อง");
    } else if (document.getElementById("major").value == "") {
        alert("กรุณากรอกสาขา");
    } else if (document.getElementById("nostudentyear").value == "") {
        alert("กรุณากรอกชั้นปีด้วย");
    } else if (document.getElementById("address").value == "") {
        alert("กรุณากรอกบ้านเลขที่");
    } else if (document.getElementById("tumbol").value == "") {
        alert("กรุณากรอกตำบล");
    } else if (document.getElementById("amphur").value == "") {
        alert("กรุณาอำเภอ");
    } else if (document.getElementById("province").value == "") {
        alert("กรุณากรอกจังหวัด");
    } else if (document.getElementById("postcode").value.toString().length != 5) {
        document.getElementById("postcode").value = "";
        alert("กรุณากรอกรหัสไปรษณีย์(5 หลัก)");
    } else if (document.getElementById("mobilephone").value.toString().length != 10 || document.getElementById("mobilephone").value.toString()[0] != 0) {
        document.getElementById("mobilephone").value = "";
        alert("กรุณากรอกเบอร์โทรศัพท์(10 หลัก ที่ขึ้นต้นด้วย 0)");
    } else if (document.getElementById("phone").value.toString().length != 10 || document.getElementById("phone").value.toString()[0] != 0) {
        document.getElementById("phone").value = "";
        alert("กรุณากรอกเบอร์โทรศัพท์ผู้ปกครองด้วย(10 หลัก และ ขึ้นต้นด้วย 0)");
    } else if (document.getElementById("teachers").value == "") {
        alert("กรุณาระบุชื่ออาจารย์ที่ปรึกษา");
    } else if (document.getElementById("reason").value == "") {
        alert("กรุณาระบุเหตุผล");
    } else {
        alert("ส่งสำเร็จ");
        var jsonString = JSON.stringify(obj);
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            let msg = this.responseText;
            alert(msg);
        };
        xhttp.open("POST", "/saveInfo");
        xhttp.send(jsonString);
        console.log(JSON.parse(jsonString));
        return false;

        location.href = "mainpage2.html"
    }
}

function submit(){
    var obj = new Object();
    obj.report = document.getElementById("report").value;

    var jsonString = JSON.stringify(obj);
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function(){
            let msg = this.responseText;
            alert(msg);
        };
        xhttp.open("POST", "/savereport");
        xhttp.send(jsonString);
        console.log(JSON.parse(jsonString));
        return false;
}

let messageAlert = "";
var information = {};

function submitContact() {
    let valueContact = document.getElementById("contact").value;
    information["contact"] = "" + valueContact;
    if (valueContact == "") {
        messageAlert = messageAlert + "กรุณากรอกข้อความ\n";
        return false;
    }
}

function RunThis() {

    submitContact();

    if (messageAlert != "") {
        alert(messageAlert);
        messageAlert = "";
        information = {};
        return false;
    } else if (messageAlert == "") {
        alert("ทำรายการเสร็จสิ้น");
    }
    console.log(JSON.stringify(information));
    messageAlert = "";
}

function checkSearch() {
    let valueSearch = document.getElementById("searchsubject").value;
    information["searchsubject"] = "" + valueSearch;
    let pattern = "[A-Za-z]{2}[0-9]{3}";
    if (valueSearch.match(pattern)) {
        if (valueSearch == "CS213" || valueSearch == "cs213") {
            information["teachersubject"] = "CS213";
            information["teachername2"] = "รศ.ดร.เยาวดี เต็มธนาภัทร์";
            window.location.href = 'teacher.html';
            alert("อาจารย์ประจำวิชา CS213 รศ.ดร.เยาวดี เต็มธนาภัทร์");
        }
        if (valueSearch == "CS221" || valueSearch == "cs221") {
            information["teachersubject"] = "CS221";
            information["teachername2"] = "ผศ.ดร.เด่นดวง ประดับสุวรรณ";
            window.location.href = 'teacher.html';
            alert("อาจารย์ประจำวิชา CS221 ผศ.ดร.เด่นดวง ประดับสุวรรณ");
        }
        if (valueSearch == "CS264" || valueSearch == "cs264") {
            information["teachersubject"] = "CS264";
            information["teachername2"] = "ผศ.ดร.ทรงศักดิ์ รองวิริยะพานิช";
            window.location.href = 'teacher.html';
            alert("อาจารย์ประจำวิชา CS264 ผศ.ดร.ทรงศักดิ์ รองวิริยะพานิช");
        }
        if (valueSearch != "CS213" && valueSearch != "cs213" && valueSearch != "CS221" && valueSearch != "cs221" && valueSearch != "CS264" && valueSearch != "cs264") {
            messageAlert = messageAlert + "ไม่พบรหัสวิชา\n";
            return false;
        }
    } else {
        messageAlert = messageAlert + "ไม่พบรหัสวิชา\n";
        return false;
    }

}

function checkThis() {

    checkSearch();

    if (messageAlert != "") {
        alert(messageAlert);
        messageAlert = "";
        information = {};
        return false;
    }
    console.log(JSON.stringify(information));
    messageAlert = "";
}