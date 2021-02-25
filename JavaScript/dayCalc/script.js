function Events(name,date) { 
    this.name = name;
    this.date = date;
}


let eName, eDate;
let eventArr = [];


let filler = () => {
    eName = document.getElementById('eName').value;
    eDate = document.getElementById('eDate').value;   
}

let pusher = () => {
    filler();
    let newEvent = new Events(eName,eDate);
    eventArr.push(newEvent);
    document.getElementById('eventForm').reset();
    setInterval(function (){document.getElementById("eList").innerHTML = calc(); }
        , 1000);
    
}

let calc = () => { 
    let strings = [];
    let today = new Date();
    //normal days
    let date_diff_indays = function (date1, date2) {
        dt1 = new Date(date1);
        dt2 = new Date(date2);
        return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
    };

    //week days
    let weekEnds = (a,b) => {
        
        let date1 = new Date(Date.UTC(a.getFullYear(), a.getMonth(), a.getDate()));
        let date2 = new Date(b);

        let weekends = 0;
        let fullDay = 1000 * 60 * 60 * 24;
        while (date1 < date2) { 
            let day = date1.getDay();
            if (day == 6 || day == 0) { 
                weekends++;
            }
            date1 = new Date(+date1+fullDay);
            
        };

        return weekends;
    };

    //counter 
    let timer = (date1, date2) => { 
        d1 = new Date(date1);
        d2 = new Date(date2);
        let seconds = Math.floor((d2 - d1) / 1000);
        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        let days = Math.floor(hours / 24);

        /*hours = hours - (days * 24);
        minutes = minutes - (days * 24 * 60) - (hours * 60);
        seconds = seconds - (days * 24 * 60 * 60) - (hours * 60 * 60) - (minutes * 60);*/

        let countDown = `${hours}H : ${minutes}M : ${seconds}S`;
        return countDown;
    }

    
    eventArr.map(item => {
        strings.push('<li>' + `${date_diff_indays(today, item.date)} normal day(s), ${date_diff_indays(today, item.date) - weekEnds(today, item.date)} week day(s) until ${item.name} which is on ${item.date}. ${timer(today,item.date) }` + '</li>')
    });
    return strings.join('');
}

document.getElementById("insert").addEventListener("click", pusher);




 
