/*  JavaScript 6th Edition
Chapter 7
Hands-on Project 7-5

Author: Coty O'Dea
Date:   2/15/23

Filename: script.js */
"use strict";

var delivInfo = {};
var delivSummary = document.getElementById("deliverTo");

//function to process delivery info
function processDeliverInfo()
{
  //local variable
  var prop;

  delivInfo.name = document.getElementById("nameinput").value;
  delivInfo.addr = document.getElementById("addrinput").value;
  delivInfo.city = document.getElementById("cityinput").value;
  delivInfo.email = document.getElementById("emailinput").value;
  delivInfo.phone = document.getElementById("phoneinput").value;

  for (prop in delivInfo)
  {
      delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
  }

}

function previewOrder()
{
  processDeliverInfo();
  document.getElementsByTagName("section")[0].style.display = "block";
}

//creates the event listener
function createEventListener()
{
  var previewBtn = document.getElementById("previewBtn");

  if (previewBtn.addEventListener)
  {
      previewBtn.addEventListener("click", previewOrder, false);
  }
  else if (previewBtn.attachEvent)
  {
      previewBtn.attachEvent("onclick", previewOrder);
  }
}

//event listener for after page loads
if(window.addEventListener)
{
  window.addEventListener("load",createEventListener, false);
}
else if(window.attachEvent)
{
  window.attachEvent("onload", createEventListener);
}

