(function () {


    document.addEventListener('DOMContentLoaded', run );

    async function run() { 
        await fetching();
        await openPokes();
    }

    async function fetching() { 
        const resp = await fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=100");
        const dataJson = await resp.json();
        //console.log(dataJson.results)
        const pokeData = await dataJson.results.forEach(i =>
            //console.log(i.url)
            fetch(i.url)
                .then(response => response.json())
                .then(data => {
                    //console.log(data)
                    let newChild = document.createElement('div');
                    newChild.className = 'pokeCard';
                    newChild.innerHTML = `
                            <div class="innerCard">
                                <img class="pokeImg" src="${data.sprites.front_default}" alt="poke"/>
                                <button class="pokeLink" value="${i.url}">${data.name}</button>
                            </div>
                        `;
                    document.getElementById('gridContainer').appendChild(newChild);
                }
            )
        )

    }
    
    

    async function openPokes() {
        
        function getPoke(e) {
            document.getElementById("blurLay").style.display = 'block';
            let pokeUrl = e.target.value;
            fetch(pokeUrl)
                .then(response => response.json())
                .then(data => {
                    
                    let newChild = document.createElement('div');
                    newChild.className = 'pokeDetail';
                    newChild.innerHTML = `
                                        <div class="detailCard">
                                            <img class="pokeImg" src="${data.sprites.front_default}" alt="poke"/>
                                            <img class="pokeImg" src="${data.sprites.back_default}" alt="poke"/>
                                            <p>${data.name}</p>
                                        </div>
                                    `;
                    document.getElementById('overLay').appendChild(newChild);
                });
        }
        setTimeout(() => {
            let anchors = document.getElementsByClassName('pokeLink');
            Array.from(anchors).forEach(el => el.addEventListener('click', getPoke));
        }, 2000);

        document.getElementById("blurLay").addEventListener('click', () => {
            document.getElementById('overLay').innerHTML = '';
            document.getElementById("blurLay").style.display = 'none';
        });
    }

})();