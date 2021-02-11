
/*let car = {
    type: 'sedan',
    year: 2005,
    owner: 'ALireza',
    city: 'Hels',
    //problem with arrow function and this
    calcAge: () => { 
        const date = new Date();
        return date.getFullYear() - car.year;
    }
}
*/

//building constructor with let and arrow functions causes problem with this and new.
 function Car (plate,make,model,price,color)  { 
    this.plateNumber = plate;
    this.carMake = make;
    this.carModel = model;
    this.carPrice = price;  
    this.carColor = color; 
    this.disc = function () {
         return (this.carPrice > 20000 ? this.carPrice * .75 :
             this.carPrice < 5000 ? this.carPrice * .9 : this.carPrice * .85);
     };
     this.discount = this.disc();

}

let pn, cma, cmo, cp, cc;
let carArr = [];




let filler = () => { 
    pn = document.getElementById('plate').value;
    cma = document.getElementById('brand').value;
    cmo = document.getElementById('model').value;
    cp = document.getElementById('price').value;
    cc = document.getElementById('color').value;
}

let pusher = () => { 
    filler();
    let newCar = new Car(pn, cma, cmo, cp, cc);
    carArr.push(newCar);
    document.getElementById('carForm').reset();
    console.log(carArr);
}

let finder = () => { 
    let term = document.getElementById('plate').value;
    let search = carArr.filter(car => car.plateNumber == term);
    let searchString = JSON.stringify(search);
    document.getElementById('obj1').textContent = searchString;
    console.log(search[0].discount);
}

let fillTrig = document.getElementById('add');
fillTrig.addEventListener('click', pusher);
let findTrig = document.getElementById('search');
findTrig.addEventListener('click', finder);

console.log(carArr);