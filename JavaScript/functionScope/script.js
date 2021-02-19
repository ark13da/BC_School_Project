(function () { 

    let sortedArray = [];
    let hardCode = {}

    let hardCodeExtractor = () => {
        
        let td= document.querySelector('tbody').querySelector('tr').querySelectorAll('td');
        hardCode.studentNo = Number(td[0].innerText);
        hardCode.name = td[1].innerText;
        hardCode.age = Number(td[2].innerText);
        return hardCode;
    }
    hardCodeExtractor();

    const getUsers = ()=>  [
        {
            studentNo: 123,
            name: 'harry',
            age: 15
        },
        {
            studentNo: 234,
            name: 'Ron',
            age: 16
        },
        {
            studentNo: 135,
            name: 'Hermione',
            age: 17
        },
        {
            studentNo: -1,
            name: 'Snape',
            age: 55
        },
        {
            studentNo: -1,
            name: 'Hagrid',
            age: 65
        }
    ];
    
    /*let executeScript = (no,name,age) => { 
        let row = document.getElementById("studentTable").insertRow(1);
        row.insertCell(0).innerHTML=no;
        row.insertCell(1).innerHTML = name;
        row.insertCell(2).innerHTML = age;
    }*/

    let addUser = (obj) => {
        //executeScript(obj.studentNo, obj.name, obj.age);
        let row = document.getElementById("studentTable").insertRow(-1);
        row.insertCell(0).innerHTML = obj.studentNo;
        row.insertCell(1).innerHTML = obj.name;
        row.insertCell(2).innerHTML = obj.age;
        row.insertCell(3).innerHTML = (obj.studentNo<0?'Yes':'No');

    };

    let userPusher = (arr) => { 
        arr.forEach(item => addUser(item));
    }

    let getOldest = (arr) => {
       let maxAge= arr.reduce(function (a, b) {
            return ((a.age > b.age) ? a.age : b.age)
       });
        document.getElementById("oldest").textContent= 'The oldest person is ' +maxAge;
    };

    
    getOldest(getUsers());
    
    

    let tableSorter = () => {
        let sorted = [];
        let checked = [];
        let formerObject = getUsers();
        formerObject.push(hardCode);
        let rounds = formerObject.length;

        function finder() {
            let remnant = formerObject.filter(i => !checked.includes(i.name));
            if (remnant.length > 1) {
                let maxAge = remnant.reduce(function (a, b) {
                    return ((a.age > b.age) ? a : b)
                });
                checked.push(maxAge.name);
                sorted.push(maxAge);
            } else {
                checked.push(remnant[0].name);
                sorted.push(remnant[0]);

            }
        }

        while (rounds > 0) {
            finder();
            rounds--;
        }

        sortedArray = [...sorted]
       
        

    };

    

   
    window.addEventListener("DOMContentLoaded", userPusher(getUsers()));

    document.getElementById("ageSort").addEventListener("click", () => {
        tableSorter();
        document.querySelector('tbody').innerHTML = '';
        userPusher(sortedArray);
        document.getElementById("ageSort").style.display = "none";
    });
    
}) ();