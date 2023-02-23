
      /* JavaScript 6th Edition
      Chapter 9
      Hands-on Project 9-2

      Author: Coty O'Dea 
      Date:   2/20/23   

      Filename: script.js */

function processCookie() //6a Declare a new function named processCookie() containing the following statement
{
    document.cookie = "username=" + document.getElementById("usernameinput").ariaValueMax;
}

function populateInfo() //7a Declare a new function named processCookie() containing the following statement
{
    if (document.cookie)
    {
        var uname = document.cookie;
        uname = uname.substring(uname.lastIndexOf("=") + 1);
        document.getElementById("usernameinput").value = uname;
    }
}

function handleSubmit() //8a Declare a new function named handleSubmit() that takes a single parameter, evt
{
    if (evt.preventDefault)
    {
        evt.preventDefault();
    }
    else 
    {
        evt.returnValue = false;
    }
    processCookie();
    document.getElementsByTagName("form")[0].submit();
}

function createEventListener() //9a Add the following code to create an event listener, and to call the populateInfo() and createEventListener() functions when the page finishes loading
{
    var loginForm = document.getElementsByTagName("form") [0];
    if (loginForm.addEventListener)
    {
        loginForm.addEventListener("submit", handleSubmit, false);
    }
    else if (loginForm.attachEvent)
    {
        loginForm.attachEvent("onsubmit", handleSubmit);
    }
}

function setUpPage()
{
    populateInfo();
    createEventListener();
}

if (window.addEventListener)
{
    window.addEventListener("load", setUpPage, false);
}
else if (window.attachEvent)
{
    window.attachEvent("onload", setUpPage);
}