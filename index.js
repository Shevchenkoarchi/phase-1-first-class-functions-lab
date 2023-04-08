// Code your solution in this fil e!
 
 const returnFirstTwoDrivers = function(driversArray) {
    let drivers = [...driversArray.slice(0, 2)]
    return drivers
}
    const returnLastTwoDrivers = function(driversArray) {
        let drivers = [...driversArray.slice(2,4)]
        return drivers
    }
    const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
    function createFareMultiplier(intg){
        return function(fare = 4) {
            return fare * intg
        }
    } 
    const fareDoubler = function(fare){
        return (fare * 2) }
        const fareTripler = function(fare){
            return (fare * 3)
        }
        function selectDifferentDrivers(driversArray, fn) {
            return fn(driversArray)
        }
    