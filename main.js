const bodyElement = document.querySelector('body')

// create button element and add text to the button
const buttonElement = document.createElement('button')
buttonElement.append('remove main element')
bodyElement.append(buttonElement)
// create main element
// create image and an A class ="link"
const mainElement = document.createElement('main')
const imageElement = document.createElement('img')
imageElement.className += "image"
imageElement.setAttribute("src", "https://image.shutterstock.com/image-photo/indy-musician-guitarist-pug-dogfunny-260nw-688080844.jpg")
mainElement.append(imageElement)

const linkElement = document.createElement('a')
linkElement.className += "link"
linkElement.href = "https://www.google.com/search?q=funny+images&safe=off&sxsrf=ALeKk03B_uEj3Jzk9CP9GthgN3XNSSKbhQ:1592597519289&source=lnms&tbm=isch&sa=X&ved=2ahUKEwi8zqCL2I7qAhVOlnIEHWyUAM4Q_AUoAXoECA8QAw&biw=768&bih=712"
linkElement.append('funny images')
mainElement.append(linkElement)

bodyElement.append(mainElement)
// create an addEventListener that removes the Main element when the button is clicked
buttonElement.addEventListener('click', function () {
    mainElement.remove()

})