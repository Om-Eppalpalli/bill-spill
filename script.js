var total_bill_amount = 0;
var total_people = 1;
var tip_per = 0;
var bill_amount;

document.getElementById("reset_button").disabled = true;
document.getElementById("generate_button").disabled = true;

document.getElementById("bill_number").addEventListener("input", function() {
  var userInput = document.getElementById("bill_number").value;
  total_bill_amount = parseFloat(userInput);
  bill_amount = total_bill_amount;

  document.getElementById("generate_button").disabled = false;
});

document.getElementById("button_five").addEventListener("click", function() {
  total_bill_amount = bill_amount + (bill_amount * 0.05);
  tip_per = 0.05;
});

document.getElementById("button_ten").addEventListener("click", function() {
  total_bill_amount = bill_amount + (bill_amount * 0.1);
  tip_per = 0.10;
});

document.getElementById("button_fifteen").addEventListener("click", function() {
  total_bill_amount = bill_amount + (bill_amount * 0.15);
  tip_per = 0.15;
});

document.getElementById("button_twenty_five").addEventListener("click", function() {
  total_bill_amount = bill_amount + (bill_amount * 0.25);
  tip_per = 0.25;
});

document.getElementById("button_fifty").addEventListener("click", function() {
  total_bill_amount = bill_amount + (bill_amount * 0.5);
  tip_per = 0.50;
});

document.getElementById("button_seventy_five").addEventListener("click", function() {
  total_bill_amount = bill_amount + (bill_amount * 0.75);
  tip_per = 0.75;
});

document.getElementById("increment").addEventListener("click", function() {
  let count = parseInt(document.getElementById("counter_para").innerText);
  document.getElementById("counter_para").innerText = ++count;
  total_people = count;
});

document.getElementById("decrement").addEventListener("click", function() {
  let count = parseInt(document.getElementById("counter_para").innerText);
  if (count >= 2) {
    document.getElementById("counter_para").innerText = --count;
  } else {
    alert("Number Of People Cannot Be Less Than 1");
  }
  total_people = count;
});

document.getElementById("generate_button").addEventListener("click", function() {
  let total_tip = bill_amount*tip_per;
  document.getElementById("tip_amount_number").innerText = (total_tip/total_people).toFixed(2);
  document.getElementById("total_number").innerText = (total_bill_amount / total_people).toFixed(2);

  document.getElementById("reset_button").disabled = false;
});

document.getElementById("reset_button").addEventListener("click", function() {
  total_bill_amount = 0.00;
  tip_per = 0;
  document.getElementById("tip_amount_number").innerText = total_bill_amount.toFixed(2);
  document.getElementById("total_number").innerText = total_bill_amount.toFixed(2);

  document.getElementById("bill_number").value = "";
  document.getElementById("reset_button").disabled = true;
  document.getElementById("generate_button").disabled = true;
});