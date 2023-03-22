// GET ADD EMPLOYEE FORM AND EMPLOYEE TABLE FROM THE DOM
let form = document.querySelector('form')
let table = document.querySelector('table')

// SET A COUNT VARIABLE TO DISPLAY NEXT TO EMPLOYEES HEADER
let total = 0

window.addEventListener('load', (e) => {
  checkMessageDisplay()
})

// ADD EMPLOYEE
form.addEventListener('submit', (e) => {
  // PREVENT FORM SUBMISSION
  e.preventDefault()
  // GET THE VALUES FROM THE TEXT BOXES
  let id = document.querySelector('#id').value
  let name = document.querySelector('#name').value
  let extension = document.querySelector('#extension').value
  let email = document.querySelector('#email').value
  let department = document.querySelector('#department').value

  // INSERT A NEW ROW AT THE END OF THE EMPLOYEES TABLE
  //   let tr = document.createElement('tr')
  let row = table.insertRow()
  // INSERT A CELL FOR EACH ITEM WITHIN THE NEW ROW
  let cellID = row.insertCell()
  row.appendChild(cellID)

  let cellNAME = row.insertCell()
  row.appendChild(cellNAME)

  let cellEXTENSION = row.insertCell()
  row.appendChild(cellEXTENSION)

  let cellEMAIL = row.insertCell()
  row.appendChild(cellEMAIL)

  let cellDEPARTMENT = row.insertCell()
  row.appendChild(cellDEPARTMENT)

  let cellDELETE = row.insertCell()
  row.appendChild(cellDELETE)

  // APPEND THE TEXT VALUES AS TEXT NODES WITHIN THE CELLS
  let textId = document.createTextNode(id)
  let textName = document.createTextNode(name)
  let textExtension = document.createTextNode(extension)
  let textEmail = document.createTextNode(email)
  let textDepartment = document.createTextNode(department)

  cellID.appendChild(textId)
  cellNAME.appendChild(textName)
  cellEXTENSION.appendChild(textExtension)
  cellEMAIL.appendChild(textEmail)
  cellDEPARTMENT.appendChild(textDepartment)

  // CREATE THE DELETE BUTTON
  let deleteBtn = document.createElement('button')
  deleteBtn.className = 'btn btn-danger btn-sm deleteBtn float-end'

  let textDelete = document.createTextNode('X')
  deleteBtn.appendChild(textDelete)
  row.appendChild(deleteBtn)

  // RESET THE FORM
  form.reset()

  // SET FOCUS BACK TO THE ID TEXT BOX
  document.querySelector('#id').focus()

  // CHECK TO SEE IF THE 'NO EMPLOYEES' SHOULD BE DISPLAYED
  // checkMessageDisplay()

  // INCREMENENT THE NUMBER OF EMPLOYEES IN THE TABLE
  let output = document.querySelector('#empCount')
  output.textContent++
})

// DELETE EMPLOYEE
table.addEventListener('click', onDeleteRow)

function onDeleteRow(e) {
  if (!e.target.classList.contains('deleteBtn')) {
    return
  }
  btn = e.target
  btn.closest('tr').remove()
  let output = document.querySelector('#empCount')
  output.textContent = output.textContent - 1

  // checkMessageDisplay()
}
//FUNCTION TO SHOW 0R HIDE 'NO ROWS' ALERT
// function checkMessageDisplay() {
//   if (table.firstChild.children == 0) {
//     document.querySelector('span').classList.add('show')
//   } else {
//     document.querySelector('span').classList.remove('show')
// }
//}
