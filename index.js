
let sum
let x1,x2;

function check(){
    x1 = parseInt(document.getElementById("v1").value);
	x2 = parseInt(document.getElementById("v2").value);
	return ((typeof x1 == undefined ||typeof x2== undefined)?true:false);
}

function add() {
//   x1 = parseInt(document.getElementById('v1').value)
//   x2 = parseInt(document.getElementById('v2').value)
 if(check()){
     alert('Enter number')
 }  
 else{
    
    sum = x1 + x2
    // alert("Answer "+sum);
      document.getElementById('id1').innerHTML =
        'Addition of the number gives ' + sum
    }
}
function sub() {
//   x1 = parseInt(document.getElementById('v1').value)
//   x2 = parseInt(document.getElementById('v2').value)
  //var a = parseInt(x1);
  //var b = parseInt(x2);
if(check()){
    alert('Enter number')
}
else{
    
  sum = x1 - x2
  // alert("Answer "+sum);
    document.getElementById('id1').innerHTML =
      'Subtraction of the number gives ' + sum
  }
}
function multiply() {
//   x1 = parseInt(document.getElementById('v1').value)
//   x2 = parseInt(document.getElementById('v2').value)
  //var a = parseInt(x1);
  //var b = parseInt(x2);
if(check()){
    alert('Enter number')
}
else{
    
  sum = x1 * x2
  // alert("Answer "+sum);
    document.getElementById('id1').innerHTML =
      'Multiplication of the numbers gives ' + sum
  }
}
function divide() {
//   x1 = parseInt(document.getElementById('v1').value)
//   x2 = parseInt(document.getElementById('v2').value)
  //var a = parseInt(x1);
  //var b = parseInt(x2);
if(check()){
    alert('Enter number')
}
else{
    
  sum = x1 / x2
  //alert("Answer "+sum);
    document.getElementById('id1').innerHTML =
      'Division of the numbers gives ' + sum
  }
}
function from() {
  if (sum=='undefined') {
       alert('invalid operation')
  }
  else{
    document.getElementById('v1').value = sum
    document.getElementById('v2').value = '0'
  }
}
function to() {
  if (sum=='undefined') {
       alert('invalid operation')
  }
  else{
    document.getElementById('v2').value = sum
     document.getElementById('v1').value = '0'
  }
}
// function check() {
//   if (sum == 'undefined') {
   
//     return true
//   } else {
//     return false
//   }
// }