import { stock } from "../data/stock";


export const fetchItems = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(stock)
        }, 800)

    })
} 