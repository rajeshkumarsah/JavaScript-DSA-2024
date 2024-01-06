//1 reversre all the word 

let str = "Hello I am Rajesh";


let reverseWord = str.split(" ").map(function(word){
    return word.split("").reverse("").join("");
});

console.log(reverseWord.join(" "));

// 2 reverse sentences
let reverseStr = str.split(" ").reverse("").join(" ");

console.log(reverseStr);


//3 how to check if an object or not ?

function checkedArray(elem) {
     console.log(Array.isArray(elem))
}

checkedArray([1,2,3]);
checkedArray({});

//4 how to empty array in javacscript?
//**** do not reset it to a new array, and do loop through  to pop each value */

let array = [1,2,3,4,5,6,7];

let arrayZero = array.length = [] // or we can simply pass 0 instead of square bracket[];

console.log(arrayZero);

// using splice method
array.splice(0, array.length);
console.log(array); // Output: []

//5 how do you check if number is an integer ?

let a = 12 // and 12.0  // or if it is 12.1, 12.2,12.3 etc those are not an integer;

if (a%1 === 0) {
    console.log("It is integer");
}else{
    console.log("it's not an integer")
}

//6 how to make dublicate work

let dublicate = [1,2,3,4,5,5];
let add= dublicate.concat(dublicate);

console.log(add)

//7 write a function that reverse a string to an number

function reverseNum(num) {
   return Number(num.toString().split("").reverse().join(""));

}
console.log(reverseNum(12));

// same using loof function

function reverseNum(num) {
    let reversed = 0;
  
    while (num > 0) {
      reversed = reversed * 10 + num % 10;
      num = Math.floor(num / 10);
    }
  
    return reversed;
  }
  
  console.log(reverseNum(12)); // Output: 21
// or 
  function reverseNum(num) {
    let numStr = num.toString();
    let reversed = "";
  
    for (let i = numStr.length - 1; i >= 0; i--) {
      reversed += numStr[i];
    }
  
    return Number(reversed);
  }
  
  console.log(reverseNum(12)); // Output: 21
  
  // write a function to check whether is paliondrome or not

  function paliondrome(name) {
    var reversed = name.split("").reverse().join("")

    return reversed == name;
  }

  console.log(paliondrome("lool"));
  console.log(paliondrome("poop"));

  // write a function to convert string into alphabatical order


  function alphabaticalOrder(userName){
    let capitalise = userName.split(" ").map(function(str){
        str.charAt(0).toUpperCase() + str.substring(1);
    
    }); 
    return capitalise.join(" ");
  }
  console.log(alphabaticalOrder("rajesh hu mai"));
  console.log(alphabaticalOrder("neha"));

  //async and await function

  let promises = new Promise((resolve, reject) => {
     resolve("I am new promises")
  })

  function getdata(){
    promises.then((el) => console.log(el));
    promises.then(function(el) {
      console.log(el)
    })
  }
  getdata();
  // async function request() {
  //     return p; 
  // }

  // let res = request();
  
  // res.then((el) => console.log(el));



  // let StudentUser = "https://jsonplaceholder.typicode.com/users";

  // let names = [];

  // for (let i=0; i<StudentUser.length; i++){
  //   names.unshift(StudentUser[i].name.toUpperCase());
  // }

  // console.log(names);

  async function GetUserName() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json(); // Parse the response as JSON
  
      // Initialize an array to store the names
      let names = [];
  
      // Loop through the data to extract names and add them to the names array
      for (let i = 0; i < data.length; i++) {
        names.unshift(data[i].address.street || user.id === 2);
      }
  
      console.log(names);
    } catch (error) {
      console.error("Data not found !!!", error);
    }
  }
  
  GetUserName();

  // only filter the id =2;

  async function GetUserAddress() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json(); // Parse the response as JSON
  
      // Find the user with id = 2
      let user = data.find(user => user.id === 2);
  
      if (user) {
        // Extract the street property from the address and convert it to uppercase
        let street = user.address.street.toUpperCase();
        console.log(street);
      } else {
        console.log("User with id = 2 not found.");
      }
    } catch (error) {
      console.error("Data not found !!!", error);
    }
  }
  
  GetUserAddress();
  
  

  async function fetchAndProcessData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      
      // Extract names and convert to uppercase
      // const names = data.map(user => user.name.toUpperCase());
      let names = data.map(function(user){
        return user.name.toUpperCase()
      })
      
      // Log the names array
      console.log(names);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the function to fetch and process the data
  fetchAndProcessData();
  

  // Sort array using quick sort

  let arrayCount = [3,5,7,4,9,5,8,6];
  let sortAscndway = arrayCount.sort((a,b) => {
    return b-a; 
  })
  console.log(sortAscndway); 


function quickSort(){
   
}

// Valid Palindrome (A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.)

var isPalindrome = function(s) {
  let strLowercase = s.toLowerCase.replace();
  return strLowercase;
};
isPalindrome()
console.log(isPalindrome("A man, a plan, a canal: Panama"))










 