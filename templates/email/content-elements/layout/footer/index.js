const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("footer-switch")
  .withIcon(Icon.TEXT)
  .withLabel("Footer")
  .withFile(require("./template.twig"))
  .withParts(
    cx.part.image.withLabel("Logo Website Link"),
    cx.part.link.withLabel("Contact Button 1"),
    cx.part.link.withLabel("Contact Button 2"),
    cx.part.link.withLabel("Rechtliches"),
    cx.part.link.withLabel("Impressum"),
    cx.part.link.withLabel(" Datenschutz"),
    cx.part.formattedText.withLabel("Address 1"),
    cx.part.formattedText.withLabel("Address 2"),
    cx.part.plainText.withLabel(" Copyrigth")
  )
  .withDropzones(
    cx.dropzone
      .withDropzone("social")
      .withAllowedElements(require("../../base/socials"))
  );
