const jsonString=`
{
    "list": [
     {
      "name": "Petr",
      "age": "20",
      "prof": "mechanic"
     },
     {
      "name": "Vova",
      "age": "60",
      "prof": "pilot"
     }
    ]
}
`

const data = JSON.parse(jsonString)
const studentData = data.list
const studentList = []

studentData.forEach((el) => {


    student = {}
  
    student.name = el.name
    student.age = Number(el.age)
    student.prof = el.prof
  
    studentList.push(student)


})


const result = {}
result.list = studentList

console.log('result', result)