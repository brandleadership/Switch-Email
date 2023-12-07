const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("cta-eoRgSU")
  .withIcon(Icon.TEXT)
  .withLabel("CTA Button Left")
  .withFile(require("./template.twig"))
  .withParts(cx.part.link.withLabel("Button Link"));

//cta - eoRgSU;
