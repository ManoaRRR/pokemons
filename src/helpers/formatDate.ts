function formatDate(date: Date) : string{
    return `${date.getFullYear()}/ ${date.getMonth()+1} / ${date.getDay()}`;
}   
export default formatDate;