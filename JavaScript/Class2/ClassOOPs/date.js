function dateMethod() {
    const currDate = new Date();
    console.log("Current Date:" + currDate);

    //time
    console.log("time in ms:", currDate.getTime());
    //date
    console.log("Date:", currDate.getDate());
    //month
    console.log("Month:", currDate.getMonth()+1);
    //year
    console.log("Year:", currDate.getFullYear());
    //hours
    console.log("Hours:", currDate.getHours());
    //minutes
    console.log("Minutes:", currDate.getMinutes());
    //seconds 
    console.log("Seconds:", currDate.getSeconds());
}

dateMethod();