password.onblur= function() {
    var password = document.getElementById("password"); //得到账户的对象
    var username = document.getElementById("username"); //得到用户所输入的账户
    if(password.value.length < 6 ||password.value.length  > 16){ alert("你输入的密码长度不符合要求")}
    else if(password.value == "testno1"&& username.value == "test"){ alert("登入成功")}
    else if(username.value != "liujiayi"){alert("用户名错误！")}
    else{ alert("密码错误!!!")}
} 
