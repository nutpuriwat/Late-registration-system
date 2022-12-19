// JavaScript source code
function onLoad_APage(){
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		let jsonall = this.responseText;
		let arr = JSON.parse(jsonall);
		var results='';
		var result='';
		var res = [];
		for (var i=0;i<arr.length;i++){
			result = "<li onclick=\"print_1("+arr[i].nostudent+")\" style=\"color:blue\"><u>"+arr[i].fname+" "+arr[i].lname+" "+arr[i].nostudent+"</u></li>";
			results = results +"<br />" + result;
			document.getElementById("list").innerHTML = results;
		}
	}
    xhttp.open("GET" , "/getInfo");
    xhttp.send();
}
function print_1(s){
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		let jsonall = this.responseText;
		let arr = JSON.parse(jsonall);
		var results ='';
		var result ='';
		var check_box;
		for (var i=0;i<arr.length;i++){
			if (s == arr[i].nostudent){
				results = results + arr[i].date +"<br/>";
				results = results + arr[i].ffname +" ";
				results = results + arr[i].fname +" ";
				results = results + arr[i].lname +"<br/>";
				results = results + arr[i].nostudent +" ";
				results = results + arr[i].nostudentyear +" ";
				results = results + arr[i].major+"<br/>";
				results = results + arr[i].address+" ";
				results = results + arr[i].tumbol+" ";
				results = results + arr[i].amphur+" ";
				results = results + arr[i].province+" ";
				results = results + arr[i].postcode+"<br/>";
				results = results + arr[i].mobilephone+" ";
				results = results + arr[i].phone+"<br/>";
				results = results + arr[i].teachers+"<br/>";
				for (var j = 1; eval("arr["+i+"].addSubjectList" + j) != null ; j++) {
					result = result + eval("arr["+i+"].addSubjectList" + j + ".nosubject")+" ";
					result = result + eval("arr["+i+"].addSubjectList" + j + ".namesubject")+" ";
					result = result + eval("arr["+i+"].addSubjectList" + j + ".section")+" ";
					result = result + eval("arr["+i+"].addSubjectList" + j + ".datetime")+" ";
					result = result + eval("arr["+i+"].addSubjectList" + j + ".value")+" ";
					result = result + eval("arr["+i+"].addSubjectList" + j + ".nameteacher")+"<br/>";
					if(!eval("arr["+i+"].addSubjectList" + j + ".confirm_order")){
						result = result + "NOT CONFIRM " +"<input type=\"checkbox\" id=\"check_addSubjectList"+i+","+j+"\"><br/>"+"<button onclick=\"submit("+ i + "," + j + ",\'addSubjectList\',"+s+")\">submit</button><br/>";
					}else{
						result = result + "CONFIRM " + "<input type=\"checkbox\" id=\"check_addSubjectList"+i+","+j+"\" checked><br/>"+"<button onclick=\"submit("+ i + "," + j + ",\'addSubjectList\',"+s+")\">submit</button><br/>";
					}

				}
				for (var j = 1; eval("arr["+i+"].dropSubjectList" + j) != null ; j++) {
					result = result + eval("arr["+i+"].dropSubjectList" + j + ".nosubject")+" ";
					result = result + eval("arr["+i+"].dropSubjectList" + j + ".namesubject")+" ";
					result = result + eval("arr["+i+"].dropSubjectList" + j + ".section")+" ";
					result = result + eval("arr["+i+"].dropSubjectList" + j + ".datetime")+" ";
					result = result + eval("arr["+i+"].dropSubjectList" + j + ".value")+" ";
					result = result + eval("arr["+i+"].dropSubjectList" + j + ".nameteacher")+"<br/>";
					if(!eval("arr["+i+"].dropSubjectList" + j + ".confirm_order")){
						result = result + "NOT CONFIRM "+"<input type=\"checkbox\" id=\"check_dropSubjectList"+i+","+j+"\"><br/>"+"<button onclick=\"submit("+ i + "," + j + ",\'dropSubjectList\',"+s+")\">submit</button><\br>";

					}else{
						result = result + "CONFIRM "+"<input type=\"checkbox\" id=\"check_dropSubjectList"+i+","+j+"\" checked><br/>"+"<button onclick=\"submit("+ i + "," + j + ",\'dropSubjectList\',"+s+")\">submit</button><br/>";
					}
				}
			}
		}
		document.getElementById("print").innerHTML = results;
		document.getElementById("print1").innerHTML = result;
	}
    xhttp.open("GET" , "/getInfo");
    xhttp.send();
}

function submit(inti , intj , str , s){
	console.log(str);
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function() {
		let jsonall = this.responseText;
		let arr = JSON.parse(jsonall);
		console.log(eval("arr["+inti+"]."+ str + intj + ".confirm_order"));
		var checkBox = document.getElementById(new String("check_"+str+inti+","+intj));
		if (checkBox.checked == true){
			eval("arr["+inti+"]."+ str + intj + ".confirm_order = true");
		} else {
			eval("arr["+inti+"]."+ str + intj + ".confirm_order = false");
		}
		print_1(s);
		console.log(eval("arr["+inti+"]."+ str + intj + ".confirm_order"));
		xhttp.open("POST", "/update");
		xhttp.send(JSON.stringify(arr));
	}
    xhttp.open("GET" , "/getInfo");
    xhttp.send();
}


