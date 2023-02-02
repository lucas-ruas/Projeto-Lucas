function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, add a imagem ('avatar-light')
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "foto de um homem sorrindo, com cabelo de topete")
  } else {
    // se tiver sem light mode, manter a imagem normal ("avatar")
    img.setAttribute("src", "./assets/Avatar-1.png")
  }
}
