/**
const arr = [1,1,1,2,2,2]

arr.find(x => x === 1)
// FIND

Array.find(some condition) will return the FIRST element that matches that condition 

// FILTER

Array.filter(some condition) will return ALL the elements that matches that condition

// MAP

Array.map(some condition) will return ALL elements after it modifies the element



*/

const superbowlWin = (record) => {
    
    // iterate over the record,
    const firstWin = record.find(year => {

    // for each object (element), return the first instance where the key of result equals "W"
    return year.result === "W"

    // need to return a BOOLEAN
})

console.log (firstWin)
return !!firstWin ? firstWin.year : firstWin
}