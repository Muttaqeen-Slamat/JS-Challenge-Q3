let friends = []
let listWrapper = document.querySelector('[data-friends]')
function addFriend() {
    let name = document.querySelector('[data-entry]').value 
    friends.push(name)
    // Save array in the browser via local storage
    localStorage.setItem('friendNames', 
    JSON.stringify(friends))
    // Display names
    displayFriends()
}
document.querySelector('[data-submit]').addEventListener('click', addFriend)

function displayFriends() {
    let cFriends = JSON.parse( localStorage.getItem('friendNames') )
    if(cFriends) {
        cFriends.forEach( people=> {
            listWrapper.innerHTML += 
            `<li>${people}</li>`
        })
    }else {
        listWrapper.innerHTML = 'No data'
    }
}

try{
    displayFriends()
}catch(e) {
    console.log(e.message);
}