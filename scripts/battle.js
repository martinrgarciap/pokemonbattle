
// This functions link the API with our page

function showContender1 (object){
    let pokeName = document.querySelector(".health-card__name--player1");
    pokeName.innerText = `${object.name}`;
    let letpokeSprite = document.querySelector(".pokemon-player1");
    letpokeSprite.setAttribute("src",`${object.sprites.front_default}`)
}

function showContender2 (object){
    let pokeName = document.querySelector(".health-card__name--player2");
    pokeName.innerText = `${object.name}`;
    let letpokeSprite = document.querySelector(".pokemon-player2");
    letpokeSprite.setAttribute("src",`${object.sprites.front_default}`)
}

// This elements randomize the pokemon that will battle

const randomNumber = Math.random()*1118;
console.log(randomNumber);
oponentSelector = Math.trunc(randomNumber);
console.log(oponentSelector);

const randomNumber2 = Math.random()*1118;
console.log(randomNumber2);
oponentSelector2 = Math.trunc(randomNumber2);
console.log(oponentSelector2);

// This is for the retrieval of data from the API


axios.all 
([axios.get("https://pokeapi.co/api/v2/pokemon/"+oponentSelector+"/"),
 axios.get("https://pokeapi.co/api/v2/pokemon/"+oponentSelector2+"/")])

.then(axios.spread(function (request1, request2) {
    
    console.log(request1);
    console.log(request2);

    // This two variables contain the contenders
    let contender1 = request1.data;
    let contender2 = request2.data;

    console.log(contender1);
    console.log(contender2);

    contenderOneName = request1.data.name;
    console.log(contenderOneName);
    contenderOneHP = request1.data.stats[0].base_stat;
    console.log(contenderOneHP);
    contenderOneSprite = request1.data.sprites.front_default;
    console.log(contenderOneSprite);

    contenderTwoName = request2.data.name;
    console.log(contenderTwoName);
    contenderTwoHP = request2.data.stats[0].base_stat;
    console.log(contenderTwoHP);
    contenderTwoSprite = request2.data.sprites.front_default;
    console.log(contenderTwoSprite);

    showContender1(contender1);
    showContender2(contender2);

    let attackEvent = document.querySelector(".fight-section__button--fight1");
    attackEvent.addEventListener('click',(e)=>{

        let totalHealth = contender2.stats[0].base_stat;
        console.log(totalHealth);
        let newHP = contender2.stats[0].base_stat -= Math.trunc((contender2.stats[1].base_stat)/4);
        console.log(newHP);
        let moveName = document.querySelector(".health-card__name--player1");
        moveName.innerText = `${contender1.name} used ${contender1.stats[1].stat.name}`;
        if (newHP <= 10){
            let defeatedName = document.querySelector(".health-card__name--player2");
            defeatedName.classList.add("defeated");
            defeatedName.innerText = `${contender2.name} is defeated`
            let hitMark = document.querySelector(".health-card__bar-life--player2");
            hitMark.style.width = "5%";
            hitMark.style.backgroundColor = "red";

        }else{

        let barHealth = (newHP/totalHealth)*100;
        let hitMark = document.querySelector(".health-card__bar-life--player2");
        hitMark.style.width = `${barHealth}%`;
        console.log(contender1.stats[0].base_stat);
        let oponentMoveName = document.querySelector(".health-card__name--player2");
        oponentMoveName.innerText = `${contender2.name}`;
        }
    });

    let attackEvent2 = document.querySelector(".fight-section__button--fight2");
    attackEvent2.addEventListener('click',(e)=>{

        let totalHealth1 = contender1.stats[0].base_stat;
        console.log(totalHealth1);
        let newHP1 = contender1.stats[0].base_stat -= Math.trunc((contender1.stats[1].base_stat)/4);
        console.log(newHP1);
        let moveName = document.querySelector(".health-card__name--player2");
        moveName.innerText = `${contender2.name} used ${contender2.stats[1].stat.name}`;
        
        if (newHP1 <= 10){
            let defeatedName = document.querySelector(".health-card__name--player1");
            defeatedName.classList.add("defeated");
            defeatedName.innerText = `${contender1.name} is defeated`
            let hitMark = document.querySelector(".health-card__bar-life--player1");
            hitMark.style.width = "5%";
            hitMark.style.backgroundColor = "red";
        }else{

        let barHealth1 = (newHP1/totalHealth1)*100;
        let hitMark = document.querySelector(".health-card__bar-life--player1");
        hitMark.style.width = `${barHealth1}%`;
        console.log(contender2.stats[0].base_stat);
        let oponentMoveName1 = document.querySelector(".health-card__name--player1");
        oponentMoveName1.innerText = `${contender1.name}`;
        }
    });

    
    
}))
.catch(error=>{
    console.log("Data is not available");
});