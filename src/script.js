function createGame(){
    console.log("Create Game");
    const mainMenu = document.getElementById('mainMenu');
    mainMenu.setAttribute('style','display: none');
    const table = document.getElementById('table');
    table.removeAttribute('style');
}

function returnToMenu(){
    const mainMenu = document.getElementById('mainMenu');
    const table = document.getElementById('table');
    table.setAttribute('style','display: none');
    mainMenu.removeAttribute('style');
}

function checkForId() {
    const data = document.getElementById('gameId').nodeValue;
    if (data.length >= 6) {
        document.getElementById('gameIdOutput') = ("GameId"+ data);
    }
}