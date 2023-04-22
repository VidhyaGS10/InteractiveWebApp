// This is for the dynamic greeting
let today = new Date();

let hourNow = today.getHours();

let greeting;

greeting = "Good Evening";
if (hourNow >= 18) {
  document.body.className = "evening";
}

else if (hourNow <= 12) {
  greeting = "Good Morning";
  document.body.className = "morning";
}

else {
  greeting = "Welcome";
  document.body.className = "day";
}

// document.write('<h3>' + greeting + '</h3>');
// The following code will bring the content to the HTML tag
document.getElementById("greeting").innerHTML = greeting;

// Thing about local storage
let res = document.getElementById("fname");

var storefname = () => {
//check if browser has storage
if (typeof (Storage) !== "undefined") {
    //store
    localStorage.setItem("firstName", "Vidhya");
    //retrieve
    res.innerHTML = localStorage.getItem("first_name");
} else {
    res.innerHTML = "Sorry your browser does not have storage."
}

// document.getElementById("fNameStored").innerHTML= res.innerHTML;

}

function openNav() {
  document.getElementById("mySidenav").style.width = "375px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function Character(){
  var xhttp = new XMLHttpRequest();//using AJAX to send a request to retrieve data from moves.json
  xhttp.onreadystatechange = function(){
      if (this.readyState == 4 && this.status == 200){  //check the state of moves.json
        let hiragana = JSON.parse(this.responseText)
        for (var i = 0; i < hiragana.length; i++){
          console.log(hiragana[i].SubCategory)
      }
      }
  }
  xhttp.open("GET", "Script_2.json", true);
  xhttp.send();
}

Character()

const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
  e.preventDefault();
  // console.log("clicked");
  let ebody = `
    <h1>First Name: </h1>${fname.value}&nbsp; 
    <br>
    <h1>Last Name: </h1>${lname.value}
    <br>
    <h1>Email: </h1>${email.value}
    <br>
    `;

  Email.send({
    SecureToken: "e27ea19e-da2e-4d81-989f-5daa73d31f81",
    To: 'vidhya.ganapathy10@gmail.com',
    From: " ",
    Subject: "Testing email from" + email.value,
    Body: "ebody"
  }).then(
    message => alert("CONGRATULATIONS! Response submitted.")
  );

})

// Page screens
const loadingPage = document.getElementById("loadingPage");
const homePage = document.getElementById("homePage");
const learnPage = document.getElementById("learnPage");
const connectPage = document.getElementById("connectPage");

// Button for navigating in the app
const startLearn = document.getElementById("startLearn");
const chapterLearn = document.getElementById("chapterLearn");
const nextPage = document.getElementById("nextPage");

//Set display default for page 
loadingPage.style.display = "block";
homePage.style.display = "none";
learnPage.style.display = "none";
connectPage.style.display = "none";

// For loading the home page
startLearn.onclick = function(){
  loadingPage.style.display = "none";
  homePage.style.display = "block";
};

// For loading the characters page
chapterLearn.onclick = function(){
  homePage.style.display = "none";
  learnPage.style.display = "block";
};

// For loading the next chapter
nextPage.onclick = function(){
  learnPage.style.display = "none";
  homePage.style.display = "block";
};