let today = new Date();

let hourNow = today.getHours();

let greeting;

greeting = "Good Evening こんばんは！";
if (hourNow >= 18) {
  document.body.className = "evening";
}

else if (hourNow <= 12) {
  greeting = "Good Morning　おはようございます！";
  document.body.className = "morning";
}

else {
  greeting = "Welcome　こんにちは！";
  document.body.className = "day";
}

document.write('<h3>' + greeting + '</h3>');