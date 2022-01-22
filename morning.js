var Employee = (function() {

    var name = "Tina";
    var age = 18;
    var salary = 100;

    var setAge = function(newAge) {
        age = newAge;
    };
    var setSalary = function(newSalary) {
        salary = newSalary;
    };
    var setName = function(newName) {
        name = newName;
    };

    var getAge = function() {
        return age;
    };
    var getSalary = function() {
        return salary;
    };
    var getName = function() {
        return name;
    };

    var increaseSalary = function(percentage) {
        salary = getSalary() * (1 + percentage);
    };

    var incementAge = function() {
        age = getAge() + 1;
        //console.log(age);
    };

    return {
        setAge: setAge,
        setSalary: setSalary,
        setName: setName,
        increaseSalary: increaseSalary,
        incementAge: incementAge,
        // 	getAge: getAge
    };
})();

console.log(Employee.getAge);
Employee.incementAge();

console.log(Employee.getAge);


//Solution for Q13
Employee.address = "Default";
Employee.setAddress = function(newAddress) {
    this.address = newAddress;
}
Employee.getAddress = function() {
    return this.address;
}
Employee.setAddress("1000 N 4th St.");
console.log(Employee.getAddress());