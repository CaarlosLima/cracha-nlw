// Para trocar as informações, basta alterar os conteudos das variaveis no objeto "linksSocialMedia" abaixo.

const linksSocialMedia = {
  github: 'CaarlosLima',
  youtube: '',
  facebook: 'carloseduardo.lima.3760',
  instagram: 'ocarloslimma',
  twitter: 'CaarlosLim'
}

function changeLinksSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    console.log(social)

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`
  }
}

changeLinksSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      userBadge.textContent = data.name
    })
}
getGitHubProfileInfos()
