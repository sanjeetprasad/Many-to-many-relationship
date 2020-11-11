let familyChores = []

export const useFamilyChores = () => {
    return familyChores.slice()
}

export const getFamilyChores = () => {
    return fetch("http://localhost:8088/familychores")
    .then(res => res.json())
    .then(
        data => {
            // console.log(data)
            familyChores = data
        }
    )
}