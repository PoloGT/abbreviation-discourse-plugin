(function() {

//     example of conf sintaxis:
//     var conf = '{"IMHO": "In My Humble Opinion","EMMO": "En Mi Modesta Opinión"}';
    
    var init = function(){
        if (Discourse.SiteSettings.abbreviations_plugin_enabled == true ) {
            var conf = Discourse.SiteSettings.abbreviations_plugin_list;
            var abbreviationCouples = conf.split('|');
//             this is waaaay easier with $.each() but for some reason jquery functions don't work when saving
            for (var i = 0; i < abbreviationCouples.length; i++) {
                var keyandvalue = abbreviationCouples[i].split(':');
                (function(key,value){
                    Discourse.Dialect.inlineRegexp({
                        start: key,
                        matcher: new RegExp(key+"\\b"),
                        wordBoundary: true,
                        emitter: function() {
                            return ['abbr', {title: value}, key ];
                        }
                    });
                })(keyandvalue[0],keyandvalue[1]);
            }
        }
    };

    
    //We need to access Discourse.SiteSettings from this file so we need to call Discourse.initializer
    if (Discourse.SiteSettings) {
        init();
    } else {
        Discourse.initializer({initialize: init, name: 'load-settings-abbreviations'});
    }

})();