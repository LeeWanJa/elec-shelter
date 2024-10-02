function makeUniqueId(){
    let date = new Date();

    let v_year = date.getFullYear() + "";
    let v_month = (date.getMonth() + 1) + "";
    let v_date = date.getDate() + "";
    let v_hour = date.getHours() + "";
    let v_min = date.getMinutes() + "";
    let v_sec = date.getSeconds() + "";
    let v_miliSec = date.getMilliseconds() + "";

    let v_uniqueId = v_year + v_month.padStart(2, 0) 
                    + v_date.padStart(2, 0) + v_hour.padStart(2, 0) 
                    + v_min.padStart(2, 0) + v_sec.padStart(2, 0)
                    + v_miliSec.padStart(3, 0);

    for(let i = 0; i < 6; i++){
        v_uniqueId += Math.floor(Math.random() * 10);
    }

    return v_uniqueId;
}


function makeBoardDate(){
    let date = new Date();
    let v_month = (date.getMonth() + 1) + "";
    let v_date = date.getDate() + "";
    let v_hour = date.getHours() + "";
    let v_min = date.getMinutes() + "";
    let v_result = v_month.padStart(2, 0) + "-" + v_date.padStart(2, 0) + " " + v_hour.padStart(2, 0) + ":" + v_min.padStart(2, 0);

    return v_result;
}