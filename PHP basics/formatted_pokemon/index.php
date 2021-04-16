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

        function btnDisabler(){
           if(pageNumber==1){
                document.getElementById("prevBtn").disabled=true;
                document.getElementById("nextBtn").disabled=false;
            }else if (pageNumber==pageCount){
                document.getElementById("nextBtn").disabled=true;
                document.getElementById("prevBtn").disabled=false;
            }else{
                document.getElementById("prevBtn").disabled=false;
                document.getElementById("nextBtn").disabled=false;
            } 
        }
        

        window.onload =  async () => {
            await rawData(pageNumber);
            await listMaker();
            await createBtn();
            btnDisabler();  
            PageBTNs= Array.from(document.getElementsByClassName("pageBtn")); 
            PageBTNs.forEach(el=>{
                el.addEventListener("click", (e)=>{
                    pageNumber=e.target.value;
                    updateList();
                    btnDisabler(); 
                })
            });
            
            document.getElementById("nextBtn").addEventListener('click', ()=>{
                if (pageNumber<pageCount){
                    pageNumber++;
                    updateList(); 
                    btnDisabler()
                }
            });
            document.getElementById("prevBtn").addEventListener('click', ()=>{
                if (pageNumber>1){
                    pageNumber--;
                    updateList(); 
                    btnDisabler();
                }
            });

           

        };


        
    </script>
</body>
</html>