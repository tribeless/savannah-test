export const reduceString = message =>{
    return message > 45 ? message.split(0,45).conact(" ...") : message;
}