let langOption = document.querySelectorAll('select');
let fromText = document.querySelector('.fromText');
let transText = document.querySelector('.toTranslate');
let fromVoice = document.querySelector('.from')


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

fromText.addEventListener('input', function(){
    let content = fromText.value;
    fromContent = langOption[0].value;
    transContent = langOption[1].value;


    let transLINK = `https://api.mymemory.translated.net/get?q=${content}!&langpair=${fromContent}|${transContent}`;

    fetch(transLINK).then(translate => translate.json()).then(data=>{
        transText.value = data.responseData.translatedText;
    })
})

fromVoice.addEventListener('click',function(){
    let fromTalk;
    fromTalk = new SpeechSynthesisUtterance(fromText.value);
    speechSynthesis.speak(fromTalk);
})