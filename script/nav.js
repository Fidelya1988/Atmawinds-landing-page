const buttons = document.querySelectorAll('.header-nav button');

const mainButton = document.querySelector('#main-button').id;
const newsButton = document.querySelector('#news-button').id;
const bandButton = document.querySelector('#band-button').id;
const contactsButton = document.querySelector('#contacts-button').id;

const contentContainer = document.querySelector('#main-content');
const contentElements = document.querySelectorAll('.content-item');
const newsElement = contentContainer.querySelector('#news');
const bandElement = contentContainer.querySelector('#band');
const contactsElement = contentContainer.querySelector('#contacts');
const backgroundImage = document.querySelector('#background-img')
contentContainer.parentElement.style.display = 'none';
const showElement = (element, hideImg) => {
    contentContainer.parentElement.style.display = 'block';
    contentContainer.style.display = 'block';
   
    element.style.display = 'block';
    for (let contentElement of contentElements) {
        if (contentElement.id != element.id) {
            contentElement.style.display = 'none';
        }

        if (hideImg) {

            backgroundImage.style.display = "none"
        } if (!hideImg) {
            backgroundImage.style.display = "block"
        }
    }
}

for (let button of buttons) {
    button.addEventListener('click', (event) => {
        button = event.target;

        switch (button.id) {
            case newsButton:
                return showElement(newsElement, true);

            case bandButton:
                return showElement(bandElement);
            case contactsButton:
                return showElement(contactsElement);
            case mainButton:
                for (let contentElement of contentElements) {
                    contentContainer.parentElement.style.display = 'none';
                    contentContainer.style.display = 'none';
                    contentElement.style.display = 'none';
                    backgroundImage.style.display = 'block';
                }

        }





    }

    )

}



