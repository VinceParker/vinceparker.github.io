function dayAndDate(){
    var weekday=new Array(7);
    weekday[0]="Sunday";
    weekday[1]="Monday";
    weekday[2]="Tuesday";
    weekday[3]="Wednesday";
    weekday[4]="Thursday";
    weekday[5]="Friday";
    weekday[6]="Saturday";

    var month=new Array(12);
    month[0]="January";
    month[1]="February";
    month[2]="March";
    month[3]="April";
    month[4]="May";
    month[5]="June";
    month[6]="July";
    month[7]="August";
    month[8]="September";
    month[9]="October";
    month[10]="November";
    month[11]="December";

    var d=new Date();
    var n=weekday[d.getDay()];
    var m=month[d.getMonth()];
    var o = d.getDate();
    var y = d.getFullYear();

    document.getElementById('day').innerHTML=n;
    document.getElementById('date').innerHTML=m + " " + o + ", " + y;
}

/*Clock */

function starttime() {
    var today=new Date(),
    h=today.getHours(),
    m=today.getMinutes();

    var apm=(h>=12)? "PM": "AM";
    if (h > 12) h = h-12;
    if (h < 1) h = h + 12;


    //add a zero in front of numbers//
    m-checkTime(m);
    document.getElementById('time').innerHTML=h+":"+m + apm;

    }

    function checkTime(i) { 
        if(i<10) {
            i="0" + i;
        }
        return i;

    }