# name: abbreviations
# about: Plugin to substitute abbreviations with a title with the full word
# version: 0.0.1
# authors: Alfonso Polo
# url: https://github.com/PoloGT/abbreviation-discourse-plugin.git 

enabled_site_setting :abbreviations_plugin_enabled

register_asset "javascripts/abbreviations_parse.js", :server_side
