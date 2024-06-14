const prompt = require("prompt-sync")()
let response = ""
// question 1
response = prompt('Coucou ca va ? (o), (n)')
while (response != "o" && response != "n") {
    response = prompt("je t'ai poser une question, Coucou ca va ? (o), (n)")
}
if (response == "o") {
    console.log("Plus pour longtemps! Nous allons jouer :) L'objectif? Ne pas devenir fou ! C'est partie");
    // question 2
    response = prompt('Combien font 2+2 ? ,(4) ou (5)')
    while (response != "5") {
        response = prompt('mauvaise reponse, Combien font 2+2 ? ,(4) ou (5)')
    }

    console.log("C'etait la bonne réponse selon moi, mais je t'annonce que tu ne sais pas compter. Mais je te félicite, le suite sera plus drole pour toi :)");

    // question 3
    response = prompt("Si sofiane prend sa voiture et qu'il veut aller en espagne, en combien de temps il arrivera à destination,(1j) ou (1s)")
    while (response != "1s") {
        response = prompt(" je répete : Si sofiane prend sa voiture et qu'il veut aller en espagne,en combien de temps il arrivera à destination,(1j) ou (1s)")
        if (response == "1s") {
            console.log("voila tres bien");
            console.log("il est pas tres fute fute, l'imbécile s'est perdu! Son GPS n'est pas tres optimal.");

        } else {
            console.log("tu comprends pas ? ");
            console.log("raté j'ai oublié de préciser qu'il allait devoir faire un détour à bordeaux pour aller acheter de la cocaine");
            continue

        }
    }


    // question 4
    
    while (true) {
        response = prompt("arrivé en espagne,il decide:choisi (1) de vouloir aller en italie ou (2) d'aller au Maroc");

        

        if (response == "1") {
            console.log("non je veux que sofiane aille au maroc recommence");
            continue

        } else {
            console.log("j'aime ce choix allons-y");
            break

        }



    }
    // question 5

    response=prompt("Au maroc il vends sa voiture(1)  contre un chameau (2) contre un ane")
        if (response=="1") {
            console.log("sofiane ira découvrire l'afrique");
            
        }else{
            console.log("sofiane deviendra marocain et vivra dans le rif");
        }
    
        
} else {
    console.log("bonne journée j'ai pas envie de jouer avec toi");
}


