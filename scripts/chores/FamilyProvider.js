let people = []

export const useFamilyMembers = () => {
    return people.slice()
}

export const getFamilyMembers = () => {
    return fetch("http://localhost:8088/familymembers")
    .then(res => res.json())
    .then(
        data => {
            // console.log(data)
        people = data
    }
    )
}