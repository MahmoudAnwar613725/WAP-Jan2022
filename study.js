var x = 3

function a() {
    for (let x = 1; x < 10; x++) {
        // console.log(x);
    }
    console.log("x: " + x);
    //10
}
console.log(x)
a()
console.log(x)


// Example 1
var x = 5; // Initialize x
console.log(x + " " + y);
var y = 7; // Initialize y
//Example 2
var x = 5; // Initialize x
var y; // Declare y

console.log(x + " " + y);
y = 7; // Assign 7 to y 


var x;

function multiply(num1, num2) {

    return num1 * x;
}


var output = multiply(5, 5);

console.log("mulit" + multiply(4, 5))
var multiplyx = (num1, num2) => num1 * num2;
var output = multiplyx(5, 5);


function makeFunc() {
    var name = "Mozilla"; //local to makeFunc
    function displayName() {
        console.log(name);
    }
    return displayName;
}
var myFunc = makeFunc();
myFunc(); //is the local variable still accessible by myFunc?

var x = 1;

function f() {
    var y = 2;
    var summ = function() {
        var z = 3;
        console.log(x + y + z);
    };
    y = 10;
    return summ;
}
var g = f();
g();

/*
function counter(start){
    var counter = start
    return function increase(){
        console.log(counter++)
    }

}

var inc1 = counter(1)
inc1()
inc1()
inc1()
var inc2 = counter(5)
inc2()
inc2()
*/
//promises
var add = (function() {
    var counter = 0;
    let print = function() {
        console.log(counter)
    }
    return {

        increase: function() {
            counter++;
            print(counter)
        },
        reset: function() {
            counter = 0;
            print(counter)
        },
        make_adder(count) {
            counter += count;
            print(counter)

        }

    };

})();

/*   add.make_adder = function make_adder(count){
         counter+=count;
        console.log(this.counter)
     }
*/
var addInc = add;
addInc.increase()
addInc.increase()
addInc.reset()
addInc.increase()

addInc.increase()
addInc.increase()
addInc.increase()
addInc.increase()
addInc.increase()
addInc.reset()

addInc.make_adder(50)

var empModule = (function() {
    var name
    var age
    var salary

    var getAge = function() {
        return age;
    }
    var getName = function() {
        return name;
    }
    var getSalary = function() {
        return salary;
    }

    var setAge = function(age) {
        this.age = age;
    }

    var setName = function(name) {
        this.name = name;
    }

    var setSalary = function(salary) {
        this.salary = salary;
    }

    var increaseSalary = function(percent) {
        setSalary(getSalary * percent / 100)

    }

    var incrementAge = function(years) {
        setAge(getAge + years)
    }

    var print = function() {
        var n = getName
        console.log("name" + n + "age" + getAge + "salary" + getSalary)
    }

    return {
        setAge: setAge,
        setName: setName,
        setSalary: setName,
        increaseSalary: increaseSalary,
        incrementAge: incrementAge,
        print: print
    }

})()


var Emp1 = empModule
Emp1.setName("mahmoud")
Emp1.setAge(14)
Emp1.setSalary(4000)


Emp1.print()


var ModuleAnonymous = (function() {
    var name
    var age
    var salary

    var getAge = function() {
        return age;
    }
    var getName = function() {
        return name;
    }
    var getSalary = function() {
        return salary;
    }

    return {
        setAge: function(age) {
            this.age = age;
        },
        setName: function(name) {
            this.name = name;
        },
        setSalary: function(salary) {
            this.salary = salary;
        },
        increaseSalary: function(percent) {
            setSalary(getSalary * percent / 100)

        },
        incrementAge: function(years) {
            setAge(getAge + years)
        },

        print: function print() {
            var n = getName
            console.log("name" + n + "age" + getAge + "salary" + getSalary)
        }
    };
})();


var stacked = (function() {
    var name
    var age
    var salary

    var getAge = function() {
        return age;
    }
    var getName = function() {
        return name;
    }
    var getSalary = function() {
        return salary;
    }
    var emp = {
        setAge: function(aage) {
            age = aage;
        },
        setName: function(naame) {
            name = naame;
        },
        setSalary: function(saalary) {
            salary = saalary;
        },
        increaseSalary: function(percent) {
            this.setSalary(getSalary * percent / 100)

        },
        incrementAge: function(years) {
            this.setAge(getAge + years)
        },

        print: function() {
            var n = getName
            console.log("name" + name + "age" + age + "salary" + salary)
        }

    }
    return emp;

})();


/*
var stacked = (function() {
    var name;
    var age;
    var salary;
    var getAge = function() {
        return age;
    };
    var getSalary = function() {
        return salary;
    };
    var getName = function() {
        return name;
    };
    var returnedObj = {
        setAge: function(newAge) {
            age = newAge;
        },
        setSalary: function(newSalary) {
            salary = newSalary;
        },
        setName: function(newName) {
            name = newName;
        },
        increaseSalary: function(percentage) {
            var sal = getSalary();
            sal = sal + percentage / 100 * sal;
            this.setSalary(sal);
        },
        incrementAge: function() {
            this.setAge(getAge() + 1);
        }
    };
    return returnedObj;
})();

*/

var Emp = ModuleAnonymous
Emp.setName("mahmoud")
Emp.setAge(14)
Emp.setSalary(4000)


Emp.print()

var stackedEmp = stacked
stackedEmp.setName("mah mod")
stackedEmp.setSalary(3333)
stackedEmp.setAge(24)

stackedEmp.increaseSalary(20)

//stackedEmp.print()

empModule.address = function() {
    var address;
    return {
        address: address,
        setAddress: function(addr) {
            address = addr;
        },
        getAddress: function() {
            return address;
        }
    }
}



var make_adder = function(increment) {
    var counter = 0;
    return function() {
        return counter += increment;
    }
};

var add5 = make_adder(5);
add5();
add5();
add5();


empModule.address;
empModule.setAddress = function(newAddress) {
    return address = newAddress;
};
empModule.getAddress = function() {
        return address;
    }
    /*
    const promise1 = new Promise((resolve, reject) => {
        reject("Hattori");
    });

    promise1.then(val => {
            console.log("------------------------------------------------------------")
            console.log("Success:" + val)
        })
        .catch(e => {
            console.log("------------------------------------------------------------")
            console.log("Error:" + e)
        });
    */
    /*
    const promise2 = new Promise((resolve, reject) => {
        setTimeout(() => reject("Yoshi"), 500);

          resolve("Hattori");
    });
    promise2.then(val => {
            console.log("------------------------------------------------------------")
            console.log("“Success: “" + val)
        })
        .catch(e => console.log("“Error: “" + e));
    */
    /*
    function job(state) {
        return new Promise(function(resolve, reject) {
            if (state) {
                resolve('success');
            } else {
                reject('error');
            }
        });
    }
    let promise3 = job(true);

    promise3.then(function(data) {
            console.log(data);
            return job(false);
        })
        .catch(function(error) {
            console.log(error);
            return 'Error caught';

        });

    function myFunction() {
        window.open("http://foo.com/bar.html", "My Foo Window ",
            "width=900,height=600,scrollbars=1");
    }

    timer = null; // stores ID of interval timer
    function delayMsg2() {
        if (timer === null) {
            timer = setInterval(rudy, 1000);
        } else {
            clearInterval(timer);
            timer = null;
        }
    }

    function rudy() { // called each time the timer goes off
        document.getElementById("txtName").value += "Rudy!";
    }
    */
    // Error: name is not defined

var sayHello = function(name) {
    var text = 'Hello, ' + name;
    return function() {
        console.log(text);
    };
};

var hiMah = sayHello("mahmoud")
hiMah()
hiMah()
hiMah()
hiMah()


var xa = 5; // Initialize x
ya = 7;
console.log(xa + " " + ya);
// Assign 7 to y
var ya; // Declare y


var xb = 5; // Initialize x

var yb = 7; // Initialize y

console.log(100 / "Banana");

x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
    console.log("“x1: “" + x);
    console.log("“a2: “" + a);
    var f = function() {
        b = a;
        console.log("“b3: “" + b);
        b = c;
        var a = 3;
    }
    f();
    console.log("“b4: “" + b);
    x = 6;
}
c(8, 9, 7);
console.log("“b5: “ " + b);
console.log("“x6: “" + x);


"use strict";
(function() {
    function Employee(id) {
        this.id = id;
        this.name = "Default";
        this.employer = { name: "MUM" };
    }

    Employee.prototype.getName = function() {
        console.log(this.name)
        return this.name;
    }
    Employee.prototype.setName = function(n) {
        this.name = n
    }

    Employee.prototype.getEmployerName = function() {
        return this.employer.name;
    }
    var john = new Employee(980000);
    john.setName("mamaaa")
    john.getName()
    console.log(john.employer.name)
    console.log(john.name)

})();


x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
    var x = 10;
    console.log(x);
    console.log(a);
    var f = function(a, b, c) {
        b = a;
        console.log(b);
        b = c;
        var x = 5;
    }
    f(a, b, c);
    console.log(b);
}
c(8, 9, 10);
console.log(b);
console.log(x);

fffff = 13333
console.log(fffff)