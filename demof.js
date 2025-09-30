// get info by object
    let student = {
      name: "",
      birthYear: "",
      city: ""
    };

    function saveProfile() {
      try {
        let name = document.getElementById("name").value.trim();
        let birthYear = parseInt(document.getElementById("birthYear").value.trim());
        let city = document.getElementById("city").value.trim();

        if (!name || !birthYear || !city) throw "Please fill all fields correctly!";

        document.getElementById("profileOutput").innerText =
          "Profile Saved::"+ name + " , "+city+ " , " + birthYear;
      } catch (error) {
        document.getElementById("profileOutput").innerText = error;
      }
    }

    function checkAge() {
      try {
        if (!birthYear) throw " Fill all the fields completely!";
        let currentYear = parseInt(new Date().getFullYear());
         let birthYear = parseInt(document.getElementById("birthYear").value.trim());
        // let age = currentYear - birthYear;
        let age = currentYear - birthYear;

        let eligibility = (age >= 18) ? "Eligible (18+)" : "Not eligible to access this website!!(age<18)";
        document.getElementById("ageOutput").innerText =
          name+"You are"+ age +"years old"+ eligibility;
      } catch (error) {
        document.getElementById("ageOutput").innerText = error;
      }
    }

    function showGreeting() {
      let hours = new Date().getHours();
      let greeting ;
      if (hours < 12) greeting = " Good Morning";
      else if (hours < 18) greeting = "Good Afternoon";
      else greeting = "Good Evening";

      document.getElementById("greetOutput").innerText =
        greeting + name || "Student";
    }

    function calculate(op) {
      try {
        let n1 = parseFloat(document.getElementById("num1").value);
        let n2 = parseFloat(document.getElementById("num2").value);
if (isNaN(n1) || isNaN(n2)) throw "Please enter valid number!";
       

        if (op === "add") result = n1 + n2;
        else if (op === "sub") result = n1 - n2;
        else if (op === "mul") result = n1 * n2;
        else if (op === "div") {
          if (n2 === 0) throw "Division by zero is not valid!";
          result = n1 / n2;
        }
        document.getElementById("calcOutput").innerText = result;
      }
       catch (error) {
        document.getElementById("calcOutput").innerText = error;
      }
    }

    const quotes = [
    " Believe in yourself!",
      "Every day is a new beginning.",
      " Success comes to those who work hard.",
      " Stay positive, work hard, make it happen.",
      " Failure is the first step to success."
    ];

    function showQuote() {
      let randomIndex = Math.floor(Math.random() * quotes.length);
      document.getElementById("quoteOutput").innerText = quotes[randomIndex];
    }

    function showJSON() {
    document.getElementById("jsonOutput").innerText =
    JSON.stringify(student, null , 2);
    }
