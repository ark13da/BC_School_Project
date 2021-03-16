// then or await work the same way. definition of the promise short or long works the same way as well just pay attention to how the promise is defined. if it has used a costructor then just call it with no () in async, if it is defined as a function (short way) then call it like a function with () in async

const weather = true


//here date is variable so it should be called like await date
const date = new Promise(function (resolve, reject) {
    if (weather) {
        const dateDetails = {
            name: 'Cubana Restaurant',
            location: '55th Street',
            table: 5
        };

        resolve(dateDetails)
    } else {
        reject(new Error('Bad weather, so no Date'))
    }
});


//here date is a function and thus must be caalled like await date()
const date1 = function () {
    if (weather) {
        const dateDetails = {
            name: 'Cubana Restaurant',
            location: '55th Street',
            table: 5
        };
        return Promise.resolve(dateDetails)
    } else {
        return Promise.reject('no go')
    }
}


//this works

const myDate = function () {
    date1()
        .then(function (done) {
            console.log('We are going on a date!')
            console.log(done)
        })
        .catch(function (error) {
            console.log(error.message)
        })
}

myDate();





const orderUber = function (dateDetails) {
    const message = `Get me an Uber ASAP to ${dateDetails.location}, we are going on a date!`;
    return Promise.resolve(message)
}


/*
async function myDate() {
    try {

        let dateDetails = await date;
        let message = await orderUber(dateDetails);
        console.log(message);

    } catch (error) {
        console.log(error.message);
    }
}
myDate()
*/