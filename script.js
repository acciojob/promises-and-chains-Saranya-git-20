document.getElementById("ageForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent page reload

  const name = document.getElementById("name").value.trim();
  const ageValue = document.getElementById("age").value;
  const age = parseInt(ageValue);

  if (name === "" || ageValue === "") {
    alert("Please enter valid details");
    return;
  }

  checkAge(name, age)
    .then((message) => alert(message))
    .catch((error) => alert(error));
});
function checkAge(name,age){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if(age >=18){
				resolve(`Welcome, ${name}. You can vote.`)
			}
			else{
				reject(`Oh sorry ${name}. You aren't old enough.`)
			}
		})
	})
}
