// get current url
// var url = window.location.protocol + "//" + window.location.host + window.location.pathname;
// var newurl = url + '?locale=en';
// window.history.pushState({ path: newurl }, '', newurl);

function getLocale(){
    return sessionStorage.getItem('locale');
}

function setLocale(value){
    return sessionStorage.setItem('locale', value);
}

// toggle current locale
function toggleLocale(){
    getLocale() === 'jp' ? setLocale('en') : setLocale('jp');
}

function main(){
    // check session storage
    var locale = getLocale();
    
    if (!locale) {
        locale = 'en';
        setLocale('en');
    }

    arb.setResourceSelector(locale);
    arb.localizeHtml();
}

main();