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

function fetchDetails(id) {
    fetch("https://reqres.in/api/user/"+id).then(
        res => {
            res.json().then(
                data => {
                    console.log(data)
                    if (data.data.length > 0) {
                        let temp = "";
                            console.log(data)
                        document.getElementById('details').innerHTML = temp;
                    }
                }
            )
        }
    )
}