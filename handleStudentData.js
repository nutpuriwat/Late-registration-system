document.addEventListener('DOMContentLoaded', function() {
    const studentName = document.getElementById("studentname");
    const studentID = document.getElementById("nostudent");
    const faculty = document.getElementById("faculty");
    const major = document.getElementById("major");
    const teacher = document.getElementById("teachername");
    var id = localStorage.getItem("nostudent");
    axios.get("https://restapi.tu.ac.th/api/v2/profile/std/info/?id=" + id, {
        'headers': {
            'Content-Type': 'application/json',
            'Application-Key': 'TU47ef106a05bc2bd6d51b423f78033a399684301850baec3fd0fc713edce518a6e236645d80d75c20922cf78ac874d1f8'
        }
    }).then((data) => {
        const response = data.data;
        console.log(response);
        studentName.innerHTML = response.data.displayname_th;
        studentID.innerHTML = response.data.userName;
        faculty.innerHTML = response.data.faculty;
        major.innerHTML = response.data.department;
        teacher.innerHTML = "รองศาสตราจารย์ ดร.ณัฐธนนท์ หงส์วริทธิ์ธร"
    }).catch((err) => {
        console.error(err);
    })

}, false);