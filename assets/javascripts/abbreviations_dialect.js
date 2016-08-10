(function() {
    if (Discourse.dialect_deprecated) { return; }
    
    function abbreviate(text) {
        var siteSettings = Discourse.SiteSettings;

        if (siteSettings.abbreviations_plugin_enabled) {
        var list = siteSettings.abbreviations_plugin_list;

        var abbreviationCouples = list.split("|").map(function(couple) {
            return couple.split(":");
        });

        abbreviationCouples.forEach(function(couple) {
            //required a space either before or after the acronym
            text = text.replace(new RegExp("\\b((\\s)" + couple[0] + "|" + couple[0] + "(?=\\s))\\b","g"), '$2<abbr title="' + couple[1] + '">'+ couple[0] +'</abbr>');
        });
        }
    return text;
    }
    

    Discourse.Dialect.addPreProcessor(function(text) {
        return abbreviate(text);
    });
})();