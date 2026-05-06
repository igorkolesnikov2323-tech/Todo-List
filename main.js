const input = document.querySelector('#input')
const inputButton = document.querySelector('.input__button')
const tasksList = document.querySelector('.tasks__list')
let text = input.value
const inputBox = document.querySelector('.input__box')
let flag = false
let errorText = document.createElement('h1')


inputButton.addEventListener('click', function(event){
    if (input.value.trim() !== ''){
        errorText.remove()

        let newTask = document.createElement('li')   
        newTask.innerText = input.value
        newTask.className = 'tasks__item'
        tasksList.append(newTask)

        input.value = ""

        let completeButton = document.createElement('input')
        completeButton.type = 'checkbox'
        completeButton.className = 'complete__btn'
        newTask.append(completeButton)
        completeButton.addEventListener('click', function(){
            completeButton.classList.toggle('complete__btn2')
            newTask.classList.toggle('tasks__item2')
            newTask.classList.toggle('completeting')
        })

        let removeButton = document.createElement('span')
        removeButton.innerText = "✖"
        removeButton.className = 'remove__btn'
        newTask.append(removeButton)
        console.log(removeButton)
        removeButton.addEventListener('click', function(){
            newTask.classList.remove('completeting')
            setTimeout(() => {
                newTask.remove()
            }, 500);
            newTask.classList.add ('removing')
        })

    } else {
        errorText.innerText = 'Oops, please enter name item'
        errorText.className = 'errortext'
        tasksList.append(errorText)
        console.log(errorText)
    }
})

console.log('something')