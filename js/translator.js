// get current url
var url = window.location.protocol + "//" + window.location.host + window.location.pathname;

// toggle current locale
function toggleLocale(){
    var locale = sessionStorage.getItem('locale');
    console.log('current session local: ', locale);

    if (locale === 'jp') {
        var newurl = url + '?locale=en';
        window.history.pushState({ path: newurl }, '', newurl);

        sessionStorage.setItem('locale', 'en');
        console.log('new session local: ', locale);
    } else if (locale === 'en'){
        var newurl = url + '?locale=jp';
        window.history.pushState({ path: newurl }, '', newurl);

        sessionStorage.setItem('locale', 'jp');
        console.log('new session local: ', locale);
    }
}

function main(){
    // check session storage
    var locale = sessionStorage.getItem('locale');
    console.log('current session local: ', locale);
    
    if (!locale) {
        locale = 'en';

        var newurl = url + '?locale=en';
        window.history.pushState({ path: newurl }, '', newurl);

        sessionStorage.setItem('locale', 'en');
        console.log('new session local: ', locale);
    }

    arb.setResourceSelector(locale);

    // This should appear after all the translatable HTML content
    arb.localizeHtml();
}


main();