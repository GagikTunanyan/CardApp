export const generateUniqueRandomNumber = (cardsArray, limit) => {
    const curentNum = Math.floor(Math.random() * limit) + 1;
    if(cardsArray.includes(curentNum) || isNaN(curentNum)) {
        return generateUniqueRandomNumber(cardsArray, limit)
    }
    else return curentNum
}