let a = 0;
let b = 1;

let names = [];

function test1(){
  alert(names);
};
function saveName(){
  var name = document.getElementById("inputName").value;
  names.push(name);
  test1();
  document.getElementById("aaaa").innerText = names;
};

function makeAlert(){
  alert("정상작동중");
}