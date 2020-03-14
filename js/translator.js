function main(){
    var locale = arb.getParamFromUrl('locale');
    if (!locale){
        locale = 'en';
    }
    arb.setResourceSelector(locale);
    
    // JS localization
    var r$ = arb.getResource("test");
    document.write(arb.msg(r$.MSG_CURR_LOCALE, {'currentLocale': locale}));		

    // This should appear after all the translatable HTML content
    arb.localizeHtml();								
}

main();