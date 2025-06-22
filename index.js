const Days = document.getElementById("DayTimer");
const Hours = document.getElementById("HourTimer");
const Minutes = document.getElementById("MinTimer");
function ClockUpdate(){
    const Time = new Date();
    const year = Time.getFullYear();
    const month = Time.getMonth();
    setTimeout(ClockUpdate, 1000);
    var ArryDaySpentNonLeapYear = [31,28,31,30,31,30,31,31,30,31,30,31];
    var ArryDaySpentLeapYear = [31,28,31,30,31,30,31,31,30,31,30,31];
    if((year%4) === 0)
    {
        var j =0;
        for(var i=0; i<month; i++)
        {
            j += ArryDaySpentLeapYear[i];
        }
        var DaysSpent =366- j;
        Days.innerHTML = DaysSpent;
        var HourSpent = 8784-(j * 24);
        Hours.innerHTML = HourSpent;
        var MinuteSpent = 524040-(j * 24* 60);
        Minutes.innerHTML = MinuteSpent;

    }
    else{
        var j =0;
        for(var i=0; i<month; i++)
        {
            j += ArryDaySpentNonLeapYear[i];
        }
        var DaysSpent = 365-j;
        Days.innerHTML = DaysSpent;
        var HourSpent = 8760-(j * 24);
        Hours.innerHTML = HourSpent;
        var MinuteSpent =525600-(j * 24* 60) ;
        console.log(MinuteSpent);
        Minutes.innerHTML = MinuteSpent;
    }

}
ClockUpdate();