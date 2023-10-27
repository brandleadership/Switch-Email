const { cx, Icon } = require("@bsi-cx/design-build");

module.exports = cx.contentElement
  .withElementId("social-follow")
  .withLabel("Social Follow")
  .withIcon(Icon.SOCIAL_SHARE)
  .withFile(require("./template.twig"))
  .withParts(cx.part.socialFollow.withLabel("Social Follow"));
