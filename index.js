const addButton = document.querySelector('#add')
const updateLocalStorageData = () => {
    const textAreaData = document.querySelectorAll('textarea')
    const notes = []

    textAreaData.forEach((note) => {
        return notes.push(note.value)
    })

    localStorage.setItem('notes', JSON.stringify(notes))
}

const addnewNote = (text = '') => {
    const note = document.createElement('div');
    note.classList.add('note')
    const htmlData = `<div class="operation">
        <button button class="edit"> <i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
      </div >
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="text  ${text ? "hidden" : ""}"></textarea>
      </div > `
    note.insertAdjacentHTML('afterbegin', htmlData)
    const editButton = note.querySelector('.edit')
    const deleteButton = note.querySelector('.delete')
    const mainDiv = note.querySelector('.main')
    const textarea = note.querySelector('textarea')

    deleteButton.addEventListener('click', () => {
        note.remove()
        updateLocalStorageData()
    })

    textarea.innerHTML = text
    mainDiv.innerHTML = text

    editButton.addEventListener('click', () => {
        mainDiv.classList.toggle('hidden')
        textarea.classList.toggle('hidden')
    })

    textarea.addEventListener('change', (event) => {
        const value = event.target.value
        mainDiv.innerHTML = value

        updateLocalStorageData()
    })

    document.body.appendChild(note)

}
const notes = JSON.parse(localStorage.getItem('notes'))
if (notes)
    notes.forEach((note) => addnewNote(note))

addButton.addEventListener('click', () => addnewNote())