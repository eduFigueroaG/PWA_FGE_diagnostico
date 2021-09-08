window.onload = fetchUsers;


function fetchUsers() {
    fetch("https://reqres.in/api/users").then(
        res => {
            res.json().then(
                data => {
                    if (data.data.length > 0) {
                        let temp = "";
                        let x = 0
                        data.data.forEach((itemData) => {
                            x++;
                            temp += "<tr>";
                            temp += "<td>" +x+ "</td>";
                            temp += "<td>" + itemData.email + "</td>";
                            temp += "<td>" + itemData.first_name + " " + itemData.last_name + "</td>";
                            
                        });
                        document.getElementById('data').innerHTML = temp;
                    }
                }
            )
        }
    )
}

function fetchUser() {
    let name = document.getElementById('name').value
    let job = document.getElementById('job').value
    const data = {
        "name": name,
        "job": job
    }
    fetch("https://reqres.in/api/user",{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(
        res => {
            res.json().then(
                data => {
                    alert('Registro exitoso!')
                    console.log(data)
                }
            )
            .catch(err=>{
                alert("Hubo un error")
                console.log(data)
            })
        }
    )
}