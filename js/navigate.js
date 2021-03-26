const menu = {
    init() {
        this.showMenu()
        this.scrollNavigate()
    },
    showMenu() {
        let nav = document.querySelectorAll('.icon')
        let menuIcon = document.querySelector('.menu-icon')
        document.querySelector('.menu-icon').addEventListener('click', (e) => {
            nav.forEach(item => {
                if ((e.target === menuIcon || item) && item.classList.contains('closeIcon') === true) {
                    item.classList.remove('closeIcon')
                } else if (e.target === menuIcon || item) {
                    item.classList.add('closeIcon')
                }
            })
            this.renderNavigate()
            this.scrollNavigate()
        })

    },
    navigateTemplate() {
        document.querySelector('.menu-icon').insertAdjacentHTML('afterend',
            `<section class="nav">
                    <ul>
                    <li><a href="#portfolio">Портфолио</a></li>
                    <li><a href="#price">Вилка цен</a></li>
                    <li><a href="#briefing">Бриф</a></li>
                    <li><a href="#contacts">Контакты</a></li>
                    </ul>
                  </section>`)
    },
    renderNavigate() {
        if (document.querySelector('.icon').classList.contains('closeIcon') === true) {
            this.navigateTemplate()
            setTimeout(this.openNavigateAnimate, 50)
        } else {
            document.querySelector('.nav').classList.remove('active')
            setTimeout(this.removeNavigate, 50)
        }
    },
    openNavigateAnimate() {
        document.querySelector('.nav').classList.add('active')
    },
    removeNavigate() {
        document.querySelector('.nav').remove()
    },
    scrollNavigate(){
        let links = document.querySelectorAll('a[href^="#"]')
        for (let link of links){
            link.addEventListener('click', (e) => {
                e.preventDefault()
                const id = link.getAttribute('href');
                document.querySelector(id).scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                })
            })
        }
    }
}
menu.init()