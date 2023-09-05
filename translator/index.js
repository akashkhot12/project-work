let langOption = document.querySelectorAll('select');
let fromText = 
langOption.forEach((get,con)=>{
    for(let countryCode in language){

        let selected;
        if (con==0 && countryCode == "en-GB") {
            selected = "selected";
        }
        else if(con == 1 && countryCode == "bn-IN"){
            selected = "selected";
        }


        let option = `<option value="${countryCode}">${language[countryCode]}</option>`;
        get.insertAdjacentHTML('beforeend',option);
    }
})