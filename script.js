var abc=document.getElementById("img");

var count=1;
// var xyz=document.getElementById("one")
function clickme(){
    var yu = Math.floor(Math.random()*6)+1;

    var name=yu.toString()+".png";
    abc.setAttribute("src",name);
    console.log("hello")
    // count++; 

}