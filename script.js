function isLeap(val)
{
    return val%4==0?(val%100==0?(val%400==0?true:false):true):false;
}

let submit = document.querySelector("#submit");
submit.addEventListener('click',function(event){
    event.preventDefault()
    let date = document.querySelector(`#date`).value;
    let month = document.querySelector(`#month`).value;
    let year = document.querySelector(`#year`).value;

    date = Number(date);
    month = Number(month);
    year  = Number(year);

    let currYear = year;
    let output = document.querySelector("#output");

    if(!Number.isInteger(date)|| !Number.isInteger(month) || !Number.isInteger(year)||date <1 || date>31 || month<1||month>12||year<0){ output.innerHTML = `<h2>INVALID INPUT</h2>`}
    else{
        let weekDays = [`SUNDAY`,`MONDAY`,`TUESDAY`,`WEDNESDAY`,`THRUSDAY`,`FIRDAY`,`SATURDAY`];
        let monthOddDays = [3,0,3,2,3,2,3,3,2,3,2,3];
        let oddDays = [0,5,3,1];
        let oddDaysCount = 0;
        let century = Math.floor((year - (year%100))/100);
        if(century>0)
        oddDaysCount += oddDays[century%4];
        if(year>100)
        year = year%100;
        let ly = Math.floor((year-1)/4);
        let ny = Math.floor((year-1-ly));

        oddDaysCount += ( (2*ly)+ny)%7;

        for(let i = 0;i<month-1;i++)
        {
            if(i==1&&isLeap(currYear))
                oddDaysCount += 1;
            else oddDaysCount += monthOddDays[i];

            oddDaysCount = oddDaysCount%7;
        }
        oddDaysCount += date;
        oddDaysCount = oddDaysCount%7;
        
        output.innerHTML = `<h2>${weekDays[oddDaysCount]}</h2>`

    }
    
})


