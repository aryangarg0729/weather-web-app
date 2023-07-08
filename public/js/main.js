const submitBtn = document.getElementById("submitBtn");
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===''){
        city_name.innerText = `plz write name before search`;
        datahide.classList.add("data_hide");
        
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a6d32e373fef34c30f34a69c443b5501`;
            const response =await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood);

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color:#eccc68;'></i>";

            }
            datahide.classList.remove('data_hide');
            cityVal = "";
        }
        catch{
            cityVal = "";

            datahide.classList.add("data_hide");
            city_name.innerText = `plz enter valid city name`;
        }

    }
    cityName.value = "";
}



const getInfoOnChange = async(event)=>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal===''){
        city_name.innerText = `plz write name before search`;
        datahide.classList.add("data_hide");
        
    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=a6d32e373fef34c30f34a69c443b5501`;
            const response =await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood);

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color:#eccc68;'></i>";

            }
            datahide.classList.remove('data_hide');
            // cityVal = "";
        }
        catch{
            // cityVal = "";

            datahide.classList.add("data_hide");
            city_name.innerText = `plz enter valid city name`;
        }

    }
    // cityName.value = "";
}


// "change": When you leave the input field,function is triggered 
// "input" : occurs immediatly after content has been changed

submitBtn.addEventListener("click",getInfo);
cityName.addEventListener("input",getInfoOnChange);
