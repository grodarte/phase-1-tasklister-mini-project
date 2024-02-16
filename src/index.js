document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById(`create-task-form`)
    
    form.addEventListener(`submit`, e => {
      e.preventDefault()
      buildTodo(e.target[`new-task-description`].value)
      form.reset()
    })
});

function buildTodo(todo){
  let li = document.createElement(`li`)
  let btn = document.createElement(`button`)
  btn.addEventListener(`click`, handleDelete)
  li.textContent = todo
  btn.textContent = `x`

  li.appendChild(btn)
  
  document.getElementById(`tasks`).appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}