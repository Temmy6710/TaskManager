function Time() {
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    var days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    var dat = date.getDate();
    var day = days[date.getDay()];
    var period = "";
    if (hour >= 12) {
    period = "PM";
    } else {
    period = "AM";
    }
    if (hour == 0) {
    hour = 12;
    } else {
        if (hour > 12) {
        hour = hour - 12;
        }
    }
    hour = update(hour);
    minute = update(minute);
    document.getElementById("digital-clock").innerText =hour + " : " + minute + " " + period;
    document.getElementById("date").innerText =  day +", " +dat+ " "+ month  + " " + year +" \n"
    setTimeout(Time, 1000);
}
function update(t) {
    if (t < 10) {
    return "0" + t;
    }else {
    return t;
    }
}
Time();
var Task = new Array("Clean House", "Wash Car", "Wash plates", "Wash clothes", "Do laundry","Eat breakfast");
var task_container = document.getElementById('test');
function updateUI(Task){
    var task_content = '';
    var i=0;
    for (i in Task){
        // console.log(Task[i]);
        // var item = "<div>" + Task[1] + "</div>"
        task_content = task_content + `<li id="test${i}">
                                                <input type="checkbox">
                                                <label id='label${i}'>${Task[i]}</label>
                                                <input type="text" id='text${i}' style="display: none">
                                                <button id="edit${i}" onclick="edit_element(${i})">Edit</button>
                                                <button id="delete${i}" onclick="delete_element(${i})">Delete</button>
                                        </li>`;
        console.log(task_content);
    }
    task_container.innerHTML = task_content;
    console.log(task_container);
    return(task_content)
}
updateUI(Task)


function delete_element(i){
    // console.log(test)
    var del = document.getElementById('test'+i);
    console.log(del)
    del =  del.innerHTML = '';
    console.log(del)

    // console.log(test[i])
}

editing = true;
function edit_element(i){
    var label = document.getElementById('label'+i);
    var edit = document.getElementById('text'+i);
    // event with enter
    if(editing == true){
        edit.style.display = 'inline-block';
        label.style.display = 'none';
        edit.value = label.innerText;
        editing = false;
        console.log(editing)
        console.log(edit)
    }else{
        edit.style.display = 'none';
        label.style.display = 'inline-block';
        label.innerText = edit.value;
        editing = true;
        console.log(edit.value)
    }
}

var title = document.getElementById("title");
var port = document.getElementById("portfolio");
var body = document.getElementById("body");
var addtask = document.getElementById("addtask");
function blue(){
    title.style.color = 'blue';
    title.style.backgroundColor = 'rgb(181, 181, 234)';
    title.style.textShadow = 'rgb(0, 0, 94)';
    port.style.backgroundColor = 'rgb(13, 27, 190)';
    body.style.backgroundColor = 'rgb(13, 27, 190)';
    addtask.style.backgroundColor = 'rgb(0, 0, 94)';
    addtask.style.color = 'white';
}
function dark(){
    title.style.color = 'white';
    title.style.backgroundColor = 'rgb(47, 42, 42)';
    title.style.textShadow = 'rgb(110, 108, 108)';
    port.style.backgroundColor = 'rgb(33, 32, 32)';
    body.style.backgroundColor = 'rgb(33, 32, 32)';
    addtask.style.backgroundColor = 'white';
    addtask.style.color = 'black';
}
function pink(){
    title.style.color = 'plum';
    title.style.backgroundColor = 'rgb(244, 233, 233)';
    title.style.textShadow = 'rgb(37, 25, 37)';
    port.style.backgroundColor = 'rgb(152, 0, 152)';
    body.style.backgroundColor = 'rgb(152, 0, 152)';
    addtask.style.backgroundColor = 'plum';
    addtask.style.color = 'white'
}
function gray(){
    title.style.color = 'gray';
    title.style.backgroundColor = ' rgba(128, 128, 128, 0.507)';
    title.style.textShadow = 'grey';
    port.style.backgroundColor = 'rgb(128, 130, 130)';
    body.style.backgroundColor = 'rgb(128, 130, 130)';
    addtask.style.backgroundColor = 'rgb(128, 150, 150)';
    addtask.style.color = 'black'
}