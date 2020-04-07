exports.botInfo =
{
  // Used in the embed author section. Will maybe change the avatar and username at some point.
  name: `YADOB`,
  logo: `assets/images/logo-32x32.png`,
  thumbnail: `assets/images/logo-330x330.png`,
  // This website will be linked on the author in embeds, as well as other places where the bot is mentioned.
  website: `https://yadob.jakobbouchard.dev`
}

exports.embed = {
  // Will the author section appear in the embed?
  useAuthor: true,
  // Will the footer section appear in the embed?
  useFooter: true,
  // The color on the side of the embed.
  color: `#A070A1`,
  // The text appearing in the footer.
  footer: `Copyright © ${this.botInfo.name} ${new Date().getFullYear()}`
}
