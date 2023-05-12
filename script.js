const menu = document.querySelector('.buttonMenu')
const section = document.querySelector('.sectionMenu')
const imagem = document.querySelector('body > main > div.esquerda > img')






menu.addEventListener('click', (e) =>{
    if(e.target.className == "buttonMenu") {
        menu.classList.add('active')
        menu.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAMNJREFUSEvtlN0NgkAQhD86sBMsQTuQSrUDLUE7sQQziSQn7h8mF1/gDbLMtzs7dwOdn6GzPhsgdfjvFp2AG/B0Wt0BB+DijRJNIPEzcAeOBkTiV2APTB4kAkhA3Y8GpBV/vKcwp8x2YEHkxtx5KK7CDKCaJUTfZEsqXgUsIXovia8FzLboP2/xX2GqWtR6LhFr8WZSM4CVFgl56Vo1QRTFKMIfkMpB8xbaQn46aOqk61WR3pSVgmzJFY2wZgOkFna36AUMCDQZmJpqFgAAAABJRU5ErkJggg=="
        console.log(e.target.className)
        section.innerHTML = `
        <div class="mobileMenu">
            <ul>
                <li><a href="https://www.ervik.com.br/" target="_blank" rel="noopener noreferrer">Site</a></li>
                <li><a href="https://www.ervik.com.br/institucional/quem-somos" target="_blank" rel="noopener noreferrer"> Sobre nós</a></li>
                <li><a href="https://www.ervik.com.br/tratamento" target="_blank" rel="noopener noreferrer"> Tratamentos </a></li>
                <li><a href="https://www.ervik.com.br/promocoes" target="_blank" rel="noopener noreferrer"> Promoções</a></li>
                <li><a href="https://www.ervik.com.br/institucional/fale-conosco" target="_blank" rel="noopener noreferrer">Contate-nos</a></li>
            </ul>
        </div>`
        document.querySelector('.mobileMenu').style.top = '0'
        section.style.display = 'flex'

    } else if(e.target.className = "buttonMenu active") {
        section.innerHTML = ``
        menu.classList.remove('active')
        section.style.display = 'none'
        menu.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAExJREFUSEtjZKAxYKSx+QyjFhAM4QEJov8EnYVfAYqjsfmA5hZQ6AFU7QMSBzT3Ac3jgOYW0DyIhr4FNI8Dmlsw9ONg1AcoIUDz0hQAbegGGXzv/l0AAAAASUVORK5CYII="
    }
})

