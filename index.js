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

// console.log(addtask)

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