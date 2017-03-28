/**
 * Created by hasee on 2017/3/18.
 */
function checkIn(){
    console.log("I am in layout!")
    $("#mainPage").show();
    $("#welcome").hide();
}
$(document).ready(function () {
    window.localStorage.clear();
    if(window.localStorage.getItem("message") == undefined){
        $("#origin").show();
    }else {
        $("#origin").hide();
        var message = JSON.parse(window.localStorage.getItem("message"));
        for(var i=message.length-1;i>=0;i--){
            $("#messageArea").append(message[i].message);
        }
    }
    }
)
function addMessage() {
    var content = $("#messageForm").val();
    console.log(content);
    if(content == ""){
        alert("Please write something!")
    }else {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var messageContent = "<p>" + content + "</p>";
        var time = "<p>" + year+ "-"+ month+ "-"+day + "&nbsp;" + hour +":" +minute +"</p>";
        // console.log(time)
        // $("#messageArea").removeChild();
        $("#origin").hide();
        var message = "<div>" + messageContent +time + "<hr/>" + "</div>";
        var div = $("#messageArea").children()
            if(div.length>1){
                $("#messageArea").prepend(message);
            }else {
                $("#messageArea").append(message);
            }

        $("#messageForm").val("");
        var temp = {message:message};
        if(window.localStorage.getItem("message") !== null) {
            var data = JSON.parse(window.localStorage.getItem("message"));
            data.push(temp);
            window.localStorage.setItem("message", JSON.stringify(data))
        }else {
            var data = [temp];
            window.localStorage.setItem("message", JSON.stringify(data))
        }
    }
}