Discourse.Abbreviations = {
  abbreviate: function(text) {
    var siteSettings = Discourse.SiteSettings;

    if (siteSettings.abbreviations_plugin_enabled) {
      var list = siteSettings.abbreviations_plugin_list;

      var abbreviationCouples = list.split("|").map(function(couple) {
        return couple.split(":");
      });

      abbreviationCouples.forEach(function(couple) {
        text = text.replace(new RegExp(couple[0] + "\\b"), '<abbr title="' + couple[1] + '">' + couple[0] + '</abbr>');
      });
    }

    return text;
  }
};
