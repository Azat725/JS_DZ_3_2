let academy = [
    {
        name: 'Frontend',
        seating: 18,
        faculty: 'Faculty for Frontend'
    },
    {
        name: 'Backend',
        seating: 13,
        faculty: 'Faculty for Backend Developer'
    },
    {
        name: 'Data Science',
        seating: 18,
        faculty: 'Faculty for Data Science Developer'
    },
    {
        name: 'Math',
        seating: 18,
        faculty: 'Faculty of Math'
    },
    {
        name: 'GameDev',
        seating: 18,
        faculty: 'Faculty of Game Developer'
    }
]

function printAuditoriums(auditoriums){
    console.log('Аудитории в академии: ')
    auditoriums.forEach(auditorium => {
        console.log(
            `Название аудитории -> ${auditorium.name} Количество посадочных мест -> ${auditorium.seating} Факультет -> ${audience.faculty}`
            )
    })
}

function printAuditoriumsForFaculty(faculty){
    let audienceByFaculty = academy.filter(auditorium => auditorium.faculty === faculty)
    console.log(`Аудитория для факультета ${faculty}:`)
    audienceByFaculty.forEach(auditorium => {
        console.log(
            `${auditorium.name}, количество мест ${auditorium.seating} `
        )
    })
}

function sortBySeatingPlaces(){
    let sortedAuditoriums = academy.slice().sort((a, b) => a.seating - b.seating) 
    sortBySeatingPlaces.forEach(auditorium => {
        console.log(`${auditorium.name} - ${auditorium.seating} количество мест`)
    })
}

function sortByName(){
    let sortedAuditoriums = academy.slice().sort((a, b) => a.name.localeCompare(b.name))
    sortedAuditoriums.forEach(auditorium => {
        console.log(`${auditorium.name} - ${auditorium.seating} количество мест`)
    })
}


printAuditoriums()
printAuditoriumsForFaculty('Data Science')
sortBySeatingPlaces()
sortByName()