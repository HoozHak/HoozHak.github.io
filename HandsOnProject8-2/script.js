/* 
      JavaScript 6th Edition
      Chapter 8
      Hands-on Project 8-2

      Author: Coty O'Dea   
      Date:   2/16/2023

      Filename: script.js */


      "strict mode";

      /* var newAccountArray = [];   */  //4a
      var newAccountObject = {};
      var newAccountSubmission;

      function createID()
      {
        var fname = document.getElementById("fnameinput");  
        var lname = document.getElementById("lnameinput");
        var zip = document.getElementById("zipinput");
        var account = document.getElementById("accountidbox");
        var fields = document.getElementsByTagName("input");
        var acctid;
        var firstInit;
        var lastInit;

        if(fname != null && lname != null && zip != null && fname != "" && lname != "" && zip != "") 
        {
            firstInit = fname.value.charAt(0).toUpperCase(); 
            lastInit = lname.value.charAt(0).toUpperCase();
            acctid = firstInit + lastInit + zip.value;
            account.value = acctid;
            /* newAccountArray = []; */ //5a
            newAccountObject = {};

            for (var i = 0; i < fields.length - 1; i++)
            {
                /* newAccountArray.push(fields[i].value); */ //6a
                newAccountObject[fields[i].name] = fields[i].value;
            }
        }
      }

      function createString() //7a
      {
        newAccountSubmission = JSON.stringify(newAccountObject);
      }

      function createEventListeners()

        {
            var fname = document.getElementById("fnameinput");
            var lname = document.getElementById("lnameinput");
            var zip = document.getElementById("zipinput");
        
            if (fname.addEventListener) 
            {
                fname.addEventListener("change", createID, false);
                lname.addEventListener("change", createID, false);
                zip.addEventListener("change", createID, false);
            } 
        
            else if (fname.attachEvent) 
            {
                fname.attachEvent("onchange", createID);
                lname.attachEvent("onchange", createID);
                zip.attachEvent("onchange", createID);
            }
            var button = document.getElementById("submitBtn");
            if (button.addEventListener)
            {
              button.addEventListener("click", createString, false);
            }
            else if (button.attachEvent)
            {
              button.attachEvent("onclick", createString);
            }
        }

      if (window.addEventListener)
      {
        window.addEventListener("load", createEventListeners, false);
      }
      else if (window.attachEvent)
      {
        window.attachEvent("onload", createEventListeners);
      }