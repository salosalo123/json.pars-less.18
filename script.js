





function getUsers() {
  let requist = new XMLHttpRequest();

  requist.open("GET", "https://reqres.in/api/unknown");

  requist.addEventListener("load", function () {
    let mosuliInfoText = this.responseText;
    let mosuliInfoJs = JSON.parse(mosuliInfoText);

    console.log(mosuliInfoJs);

    let ul = document.createElement("ul");
    mosuliInfoJs.data.forEach(item => {
      let li = document.createElement('li');
      
      li.innerText = `${item.name} ${item.color}`;
      ul.appendChild(li);
    })


    document.getElementById("api-info").appendChild(ul);
  });

  requist.addEventListener("error", function () {
    let p = document.createElement("p");
    p.textContent = "Server Error";

    document.getElementById("api-info").appendChild(p);
  });

  requist.send();
}

getUsers();
