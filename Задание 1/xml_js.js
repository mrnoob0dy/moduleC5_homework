
const pars = new DOMParser()


const xmlString = `<list>
    <student1>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student1>
    <student2>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student2>
    </list>`


const xmlDOM = pars.parseFromString(xmlString, 'text/xml')

// Студент 1
const list = xmlDOM.querySelector("list")
const student1 = list.querySelector("student1")
const name = student1.querySelector("name")
const nameFirst = name.querySelector("first")
const nameSecond = name.querySelector("second")
const studentAge = student1.querySelector("age")
const studentProf = student1.querySelector("prof")
const langAttr = name.getAttribute("lang")

// Студент 2
const student2 = list.querySelector("student2")
const name2 = student2.querySelector("name")
const nameFirst2 = name2.querySelector("first")
const nameSecond2 = name2.querySelector("second")
const studentAge2 = student2.querySelector("age")
const studentProf2 = student2.querySelector("prof")
const langAttr2 = name2.getAttribute("lang")


const result = { list: [
  {
     name: nameFirst.textContent + nameSecond.textContent,
     age: Number(studentAge.textContent),
     prof: studentProf.textContent,
     lang: langAttr
  },
  {
     name: nameFirst2.textContent + nameSecond2.textContent,
     age: Number(studentAge2.textContent),
     lang: langAttr2,
     prof: studentProf2.textContent
  }
] 
               
}

console.log('result', result)