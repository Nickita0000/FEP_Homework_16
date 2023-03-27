const inputUserName = document.querySelector('#user_name')
const button = document.querySelector('#btn_confirm')
const container = document.querySelector('#container')

button.addEventListener('click', onButtonConfirmClick)

function onButtonConfirmClick(){
    const userName = getUserName()
    clearInput()
    fetch(` https://api.github.com/users/${userName.login}`)
        .then((response) => {
            return response.json()
        })
        .then((user) => {
            renderUserData(user)
        })
        .catch((error) => {
            console.log(error.message)
        })
}

function getUserName() {
    return {
        login: inputUserName.value
    }
}

function htmlUserData(user) {
    return `
        <span>Login: ${user.login}</span><br><br>
        <img src="${user.avatar_url}" alt="Avatar"><br><br>
        <span>Repos: ${user.public_repos}</span><br><br>
        <span>Followers: ${user.followers}</span><br><br>
        <span>Following: ${user.following}</span><br><br>
    `
}

function renderUserData(user) {
    return container.innerHTML = htmlUserData(user)
}

function clearInput() {
    inputUserName.value = ''
}
