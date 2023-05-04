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
// var Task = new Array("Clean House", "Wash Car", "Wash plates", "Wash clothes", "Do laundry","Eat breakfast");
var Tasks = [
    {
        name: "Clean House",
        status: "uncompleted",
        color: "#ff0"
    },
    {
        name: "Wash Car",
        status: "uncompleted",
        color: "#ff0"
    },
    {
        name: "Wash plates",
        status: "uncompleted",
        color: "#ff0"
    },
    {
        name: "Wash plates",
        status: "uncompleted",
        color: "#ff0"
    },
    {
        name: "Do laundry",
        status: "completed",
        color: "#ff0"
    },
    {
        name: "Eat breakfast",
        status: "completed",
        color: "#ff0"
    },
]
var task_container_incomplete = document.getElementById('taskIncomplete');
var task_container_complete = document.getElementById('taskComplete');
function updateUI(){
    var task_content_completed = '';
    var task_content_uncompleted = '';
    var i=0;
    for (i in Tasks){
        if(Tasks[i].status == 'uncompleted'){
            task_content_uncompleted = task_content_uncompleted + `<li id="test${i}">
                                                                        <input type="checkbox" id ='checkbox${i}' onclick = 'complete(${i})'>
                                                                        <label id='label${i}'>${Tasks[i].name}</label>
                                                                        <input type="text" id='text${i}' style="display: none">
                                                                        <button id="edit${i}" onclick="edit_element(${i})">Edit</button>
                                                                        <button id="delete${i}" onclick="delete_element(${i})">Delete</button>
                                                                    </li>`;
        }else{
            task_content_completed = task_content_completed + `<li id="test${i}">
                                                                    <input type="checkbox" id ='checkbox${i}' onclick = 'complete(${i})' checked>
                                                                    <label id='label${i}'><s>${Tasks[i].name}</s></label>
                                                                    <input type="text" id='text${i}' style="display: none">
                                                                </li>`;
        }
        // console.log(task_content);
    }
    task_container_incomplete.innerHTML = task_content_uncompleted;
    task_container_complete.innerHTML = task_content_completed;
}
updateUI();
function delete_element(i){
    delete Tasks[i];
    console.log(Tasks[i])
    updateUI();
    // console.log(test[i])
}

var currentlyEditing = {
    input: 0, 
    contentLabel: 0
}
console.log(currentlyEditing)
editing = false;
function add(){
    var newEntry = document.getElementById('tasktext').value
    class newobj{
        constructor(name,status,color){
            this.name = name;
            this.status = status;
            this.color = color;
        }
    }
    let newobj1 = new newobj(newEntry, 'uncompleted', '#ff0')
    console.log(newobj1);
    Tasks.push(newobj1);
    updateUI();
}
var trying = document.getElementById('tasktext')
trying.addEventListener('keypress',function(event){
    if (event.key ==="Enter"){
        add()
    }
})
function edit_element(i){
    var label = document.getElementById('label'+i);
    var text = document.getElementById('text'+i);
    currentlyEditing.input = text
    currentlyEditing.contentLabel =  label
    console.log( currentlyEditing.contentLabel)
    if(editing == false){
        text.style.display = 'inline-block';
        label.style.display = 'none';
        text.value = label.innerText;
        editing = true;
        // console.log(editing)
        // console.log(text)
    }else{
        text.style.display = 'none';
        label.style.display = 'inline-block';
        label.innerText = text.value;
        editing = false;
        // console.log(text.value)
    }
}
addEventListener("keypress", function(event){
    if (event.key ==="Enter" && editing == true){
        console.log('working')
        // // event.preventDefault();
        currentlyEditing.contentLabel.innerText = currentlyEditing.input.value;
        currentlyEditing.input.style.display = 'none';
        currentlyEditing.contentLabel.style.display = 'inline-block';
        editing = false;
    }
})
function complete(i){
    if (Tasks[i].status == 'uncompleted'){
        Tasks[i].status = 'completed';
    }else{
        Tasks[i].status = 'uncompleted';
    }
    updateUI();
    console.log(Tasks[i]);
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