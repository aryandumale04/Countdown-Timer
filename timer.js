const EndDate=new Date("24 Dec,2024 12:51:00").getTime();
const StartDate=new Date().getTime();


 let x= setInterval(function update(){
    const currDate=new Date().getTime();
    const distancecov=currDate-StartDate;
    //time in miliseconds

    const distancepend=EndDate-currDate;


    //calculate days minute hours second
    //1 day=24*60*60*1000
    const onedayinmill=(24*60*60*1000);
    const onehourinmill=(60*60*1000);
    const onemininmil=(60*1000);
    const onesecinmill=(1000);

    const days=Math.floor(distancepend/(onedayinmill));
    const hrs=Math.floor((distancepend%(24*60*60*1000))/(onehourinmill));
    const min=Math.floor((distancepend%(60*60*1000))/(onemininmil));
    const secs=Math.floor((distancepend%(60*1000))/(1000));



    //populateui
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hrs;
    document.getElementById("minutes").innerHTML=min;
    document.getElementById("seconds").innerHTML=secs;




    //calculate width percent for progress bar
    const totatdist=EndDate-StartDate;
    const perdistance=(distancecov/totatdist)*100;

    //setwidth for progress bar
    document.getElementById("progressbar").style.width=perdistance+"%";

    if(distancepend<0){
        clearInterval(x);
        document.getElementById("countdown").innerHTML="EXPIRED";
        document.getElementById("progressbar").style.width="100%";

    }


},1000);