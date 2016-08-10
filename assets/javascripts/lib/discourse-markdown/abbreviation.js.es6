import { registerOption } from 'pretty-text/pretty-text';

registerOption((siteSettings, opts) => {
  opts.features.abbreviation = !!siteSettings.abbreviations_plugin_enabled;
  opts.abbreviationList = siteSettings.abbreviations_plugin_list;
});

function abbreviate(text, list) {
  const abbreviationCouples = list.split("|").map(couple => couple.split(":"));

  abbreviationCouples.forEach(couple => {
    //required a space either before or after the acronym
    text = text.replace(new RegExp("\\b((\\s)" + couple[0] + "|" + couple[0] + "(?=\\s))\\b","g"), '$2<abbr title="' + couple[1] + '">'+ couple[0] +'</abbr>');
  });

  return text;
};

export function setup(helper) {
  helper.addPreProcessor(text => {
    return abbreviate(text, helper.getOptions().abbreviationList);
  });
}
