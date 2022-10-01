// Write your solution in this file!
const employee = {
    name: "Elisa",
    streetAddress: "11 Sunset ave",
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
   const newObj = { ...employee};

  newObj[key] = value;

  return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) { 
 
   const nObject = {...employee, ...key};
   
   nObject[key] = delete nObject['key'];
    return nObject;
}


//function destructivelyDeleteFromEmployeeByKey(employee, key){
   
//delete destructivelyDeleteFromEmployeeByKey().key;
  //  const nObject = {...employee};
    // return nObject
// 
