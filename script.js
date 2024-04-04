let employeeArr = []

const inputName = document.querySelector("#name")
const inputProfession = document.querySelector("#profession")
const inputAge = document.querySelector("#age")
const errorMsg = document.querySelector(".error-msg")
const successMsg = document.querySelector(".success-msg")
const zeroMsg = document.querySelector(".zero-msg")
let employeeDB = document.querySelector(".employee-list")

let empCount = 1
let empUniqueId = 100
let parentUniqueId = 10000
function employeeRegistration(){
    const userName = inputName.value
    const userProfession = inputProfession.value
    const userAge = inputAge.value
    const checkAge = userAge.toString()
    if(userName == "" || userProfession == "" || checkAge == ""){
        if(successMsg.classList.contains("hide") == false){
            successMsg.classList.add("hide")
        }
        errorMsg.classList.remove("hide")
    }
    else{
        if(errorMsg.classList.contains("hide") == false){
            errorMsg.classList.add("hide")
        }
        successMsg.classList.remove("hide")

        //Employee Object
        let empObj = {}
        empObj.id = empCount
        empObj.name = userName
        empObj.profession = userProfession
        empObj.age = userAge

        if(employeeArr.length == 0){
            zeroMsg.classList.add("hide")
        }
        //adding employee object to the employee array
        employeeArr.push(empObj)


        //Employee Container
        let addedEmployeeContainer = document.createElement("div")
        addedEmployeeContainer.className = "addedEmployee-Container"
        addedEmployeeContainer.id = `parentContainer${parentUniqueId}`

        //Employee Details div
        let addedEmployee = document.createElement("div")
        addedEmployee.className = "added-Employee"
        addedEmployee.id = `empDetails${empUniqueId}`

        //Employee details
        let eId = document.createElement("p")
        eId.className = "added-empDetails"
        eId.innerText = `${empCount}`

        let eName = document.createElement("p")
        eName.className = "added-empDetails"
        eName.innerText = `Name: ${userName}`
    
        let eProfession = document.createElement("p")
        eProfession.className = "added-empDetails"
        eProfession.innerText = `Profession: ${userProfession}`

        let eAge = document.createElement("p")
        eAge.className = "added-empDetails"
        eAge.innerText = `Age: ${userAge}`

        addedEmployee.append(eId)
        addedEmployee.append(eName)
        addedEmployee.append(eProfession)
        addedEmployee.append(eAge)

        //Employee delete button
        let deleteBtn = document.createElement("button")
        deleteBtn.className = "delete-btn"
        deleteBtn.innerText = "Delete User"

        //Added Employee Details in employee div
        addedEmployeeContainer.append(addedEmployee)
        addedEmployeeContainer.append(deleteBtn)


        //Added Employee details div and delete btn in employee container
        employeeDB.append(addedEmployeeContainer)
        empCount++
        parentUniqueId++
        empUniqueId++


        //Delete Employee
        deleteBtn.addEventListener("click",(eventDetails)=>{
            let parentContainerId = eventDetails.target.parentElement.id
            let removedEmployee = document.querySelector(`#${parentContainerId}`)

            //Selecting the employee details div 
            let employeeDetailsDiv = document.querySelector(`#${eventDetails.target.previousElementSibling.id}`)
            let removedEmployeeId = employeeDetailsDiv.firstElementChild.innerText

            //Removing the employee object from employee array
            for(let i=0;i<employeeArr.length;i++){
                if(removedEmployeeId == employeeArr[i]['id']){
                    let newArr = employeeArr.splice(0,i+1)
                    newArr.pop()
                    employeeArr = newArr.concat(employeeArr)
                    break
                }
            }
            if(employeeArr.length == 0){
                zeroMsg.classList.remove("hide")
            }
            removedEmployee.remove()
        })

    }

}

inputName.addEventListener("input",hideMsg)
inputProfession.addEventListener("input",hideMsg)
inputAge.addEventListener("input",hideMsg)

function hideMsg(){
    if(errorMsg.classList.contains("hide") == false){
        errorMsg.classList.add("hide")
    }
    if(successMsg.classList.contains("hide") == false){
        successMsg.classList.add("hide")
    }
}