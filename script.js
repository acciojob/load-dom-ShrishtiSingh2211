//your JS code here. If required.
const div=document.createElement("div");
div.innerText="DOM load success";
const body=document.getElementsByTagName("body")[0];
body.insertBefore(div,body);