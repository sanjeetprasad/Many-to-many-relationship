// let chores = []

// export const useChores = () => chores.slice()

// export const getChores = () => fetch("http://localhost:8088/chores")
//     .then(res => res.json())
//     .then(data => chores = data)

let chores = []

export const useChores = () => {
    return chores.slice()
}

export const getChores = () => {
 return fetch("http://localhost:8088/chores")

.then(responce => responce.json())
.then(
    parsedChores => { 
        // console.log(parsedChores)
        chores = parsedChores 
    }
)

}
