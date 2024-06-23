let express = require("express");
let app = express();
let port = 3000;

//----------------Question 1------------
function getWelcomeMessage() {
  return "Welcome to our service!";
}

app.get("/welcome", (req, res) => {
  res.send(getWelcomeMessage());
});

app.listen(port, () => {
  console.log("Server is running on http://localhost/" + port);
});



//----------------Question 2------------
function getGreetingMessage(userName) {
  return "Hello, " + userName + "!";
}

app.get("/greet", (req, res) => {
  let userName = req.query.username;
  res.send(getGreetingMessage(userName));
});



//----------------Question 3------------
function checkPasswordStrength(password) {
  if (password.length > 15) {
    return "Password is strong";
  } else {
    return "Password is not strong";
  }
}

app.get("/check-password", (req, res) => {
  let password = req.query.password;
  res.send(checkPasswordStrength(password));
});



//----------------Question 4------------
function getSum(num1, num2) {
  return (num1 + num2).toString();
}

app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(getSum(num1, num2));
});



//----------------Question 5------------
function getSubscriptionStatus(userName, isSubscribed) {
  console.log(userName + " " + isSubscribed);
  if (isSubscribed == "true") {
    return userName + " is subscribed";
  } else {
    return userName + " is not subscribed";
  }
}

app.get("/username", (req, res) => {
  let userName = req.query.username;
  let isSubscribed = req.query.issubscribed;
  res.send(getSubscriptionStatus(userName, isSubscribed));
});



//----------------Question 6------------
function getDiscountedPrice(price, discount) {
  let finalPrice = price - (price * discount) / 100;
  return finalPrice;
}

app.get("/discounted-price", (req, res) => {
  let price = parseFloat(req.query.price);
  let discount = parseFloat(req.query.discount);
  res.send(getDiscountedPrice(price, discount).toString());
});


//----------------Question 7------------
function getPersonalizedGreeting(age, gender, name) {
  return "Hello, " + name + "! You are a " + age + " year old " + gender + ".";
}

app.get("/personalized-greeting", (req, res) => {
  let age, gender, name;
  age = req.query.age;
  gender = req.query.gender;
  name = req.query.name;
  res.send(getPersonalizedGreeting(age, gender, name));
});



//----------------Question 8------------
function getFinalPrice(price, discount, tax) {
  let discountedPrice = price - (price * discount) / 100;
  return (finalPrice = discountedPrice + (discountedPrice * tax) / 100);
}

app.get("/final-price", (req, res) => {
  let price, discount, tax;
  price = req.query.price;
  discount = req.query.discount;
  tax = req.query.tax;
  res.send(getFinalPrice(price, discount, tax).toString());
});



//----------------Question 9------------
function getTotalExerciseTime(running, cycling, swimming) {
  return running+ cycling+ swimming
}

app.get("/total-exercise-time", (req, res) => {
  let running, cycling, swimming;
  running = parseFloat(req.query.running);
  cycling = parseFloat(req.query.cycling);
  swimming = parseFloat(req.query.swimming);
  res.send(getTotalExerciseTime(running, cycling, swimming).toString());
});
