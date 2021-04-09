const briefing = {
    init() {
        this.aboutBriefing()
        templates[0].contacts(1)
    },
    aboutBriefing() {
        document.querySelector('.about-briefing').addEventListener('click', (e) => {
            document.querySelector('.header__offer').insertAdjacentHTML('afterend',
                `<div class="about-briefing__popUp">
                        <p>Бриф — небольшая анкета между клиентом <br>
                          и исполнителем, в которой закрепляются<br>
                          важные параметры и данные для разработки<br>
                          сайта. Бриф по сути является техническим<br>
                          заданием. Именно благодаря ему становятся<br>
                          понятными исходные данные и предпочтения<br>
                          заказчика, что позволяет создать продукт,<br>
                          полностью отвечающий поставленным<br>
                          требованиям.
                        </p>
                        <img src="../img/miniWaves.jpg" alt="">
                        <button><img class="closePopUp" src="../img/close.svg" alt=""></button>
                      </div>`)
            setTimeout(this.showPopUp, 100)
            this.closePopUp()
            // Проверяем есть ли класс который показывает поп ап, если есть, то при клике удаляем его
            // не допуская клонирования
            if (document.querySelector('.popUpActive').classList.contains('popUpActive') === true
                && e.target === document.querySelector('.about-briefing')) {
                document.querySelector(".about-briefing__popUp").remove()
            }
        })
    },
    showPopUp() {
        document.querySelector('.about-briefing__popUp').classList.add('popUpActive')

    },
    closePopUp() {
        document.querySelector('.closePopUp').addEventListener('click', function (e) {
            if (e.target === this) {
                setTimeout(function () {
                    document.querySelector('.about-briefing__popUp').classList.remove('popUpActive')
                }, 100)
                setTimeout(function () {
                    document.querySelector('.about-briefing__popUp').remove()
                }, 300)
            }
        })
    },
    nextPage(id) {
        if (id < 5) {
            id++
            renderTemplate(id)
        } else if (id > 1) {
            id--
            this.backPage(id)
        }
    },
    backPage(id) {
        id--
        renderTemplate(id)
    }
}

function renderTemplate(id) {
    switch (id) {
        case 1:
            if (id === 1) {
                templates[0].contacts(id)
            }
            break
        case 2:
            if (id === 2) {
                templates[1].aboutCompany(id)
            }
            break
        case 3:
            if (id === 3) {
                templates[2].design(id)
            }
            break
        case 4:
            if (id === 4) {
                templates[3].preferences(id)
            }
            break
        case 5:
            if (id === 5) {
                templates[4].feedBack(id)
            }
    }
}

briefing.init()