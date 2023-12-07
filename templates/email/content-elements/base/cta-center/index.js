const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("cta-center-CLc9J9")
  .withIcon(Icon.TEXT)
  .withLabel("CTA Button Center")
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Button Link"));
