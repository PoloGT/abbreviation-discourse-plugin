Discourse.Dialect.addPreProcessor(function(text) {
  return Discourse.Abbreviations.abbreviate(text);
});
