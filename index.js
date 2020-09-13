/* Home Page*/

function checkForBlank() {
if (document.getElementById('destination').value == "") {
    return false;
}
else if (document.getElementById('userEmail').value == "") {
    return false;
}
else (document.getElementById("button1").innerHTML = "Got it, thanks!")
}


/* Search Page*/
var listOfResults = document.getElementsByClassName('search_result');

function searchSubmit(e) {
    var searchValue = document.getElementById('searchBox').value;
    
    Array.from(listOfResults).map(
    function (item, index){

      if(item.dataset.countryname.toLowerCase().includes(searchValue)){
        listOfResults[index].style.display="block";
      }
      else {
      listOfResults[index].style.display="none";
    }
  }
  )
  
    e.preventDefault();

console.log('listOfResultsis:', listOfResults.length);
console.log('The search value is:', searchValue);
  }

  /* Sign Up*/
  const users = [
    {
      name: 'Test User',
      email: 'test@example.com',
      password: 'abc'
    }
  ]

  function login(e){
    e.preventDefault();
    
    const email = document.querySelector("#login input[name='email']").value;
    const password = document.querySelector("#login input[name='password']").value;
    
    const user = users.find(e => e.email === email);
    if(user && user.password === password){
      alert('Login successful! Welcome back ' + user.name);
      window.location.href = './country_page.html';
    } else {
      alert('Login failed');
    }
  }

  function register(e){
    e.preventDefault();
            
    const name = document.querySelector("#register input[name='name']").value;
    const email = document.querySelector("#register input[name='email']").value;
    const password = document.querySelector("#register input[name='password']").value;
    const confirmPassword = document.querySelector("#register input[name='confirmPassword']").value;

    if(password !== confirmPassword){
      return alert("Passwords don't match");
    }

    if(users.find(e => e.email === email)){
      return alert('User already existgs')
    }

    users.push({
      name: name,
      email: email,
      password: password
    })
    alert('Registration successful! Welcome ' + name);
    window.location.href = './country_page.html';
  }

  window.onload = function(){
    document.getElementById('login').onsubmit = login;
    document.getElementById('register').onsubmit = register;
  }
