<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>pokemon API with php and javascript</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Pokemons</h1>
    <ul id="displayList">
    </ul>
    <div id="btnBox">
        <div>
            <button id="prevBtn">Previous</button>
            <button id="nextBtn">Next</button>
        </div>
        <div id="pageBtnBox">
        </div>
    </div>
    
    <script>
        let pageCount;
        let pokemonList;
        let pageNumber=1;
        let PageBTNs;

        async function rawData(page) { 
            let response = await fetch(`/formatted_pokemon.php/?page=${page}`);
            let json = await response.json();
            
                pageCount= json[0].page_count;
                pokemonList=json[1].data;
        }

        function createBtn(){ 
            for (let i =1; i <=pageCount; i ++){
                let btn= document.createElement("button");
                let btnValue= document.createTextNode(i);
                let pageBtnBox= document.getElementById("pageBtnBox")
                btn.setAttribute("id",i);
                btn.setAttribute("value",i);
                btn.appendChild(btnValue);
                btn.classList.add("pageBtn");
                pageBtnBox.appendChild(btn);
            }
        }

        function listMaker(){
            let liList=[];
            for (i=0;i<pokemonList.length;i++){
                liList.push(`<li> Name: ${pokemonList[i].name}, URL: ${pokemonList[i].url}</li>`);
            }
            document.getElementById("displayList").innerHTML=liList.join('');
        }

        async function updateList(){
            await rawData(pageNumber);
            await listMaker();
        }
        

        window.onload =  async () => {
            await rawData(pageNumber);
            await listMaker();
            await createBtn();  
            PageBTNs= Array.from(document.getElementsByClassName("pageBtn")); 
            PageBTNs.forEach(el=>{
                el.addEventListener("click", (e)=>{
                    pageNumber=e.target.value;
                    updateList(); 
                    el.setAttribute("active",true);
                })
                //if(pageNumber!==el.value){
                //        el.setAttribute("disabled",false);
                //    }
            });
            document.getElementById("nextBtn").addEventListener('click', ()=>{
                pageNumber+=1;
                updateList(); 
            });
            document.getElementById("prevBtn").addEventListener('click', ()=>{
                pageNumber-=1;
                updateList(); 
            });

        };

       
        
    </script>
</body>
</html>