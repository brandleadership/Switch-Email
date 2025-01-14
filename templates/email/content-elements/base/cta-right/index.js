const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("cta-right-iVLOnT")
  .withIcon(Icon.TEXT)
  .withLabel("CTA Button Right")
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Button Link"));
