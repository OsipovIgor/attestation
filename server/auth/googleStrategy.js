const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { getUser, createUser } = require("../dbManager");
const config = require("../../configs/google");

module.exports = new GoogleStrategy(config, function(
  request,
  accessToken,
  refreshToken,
  profile,
  done
) {
  process.nextTick(async function() {
    try {
      const { name, emails, id } = profile;
      const firstName = name.givenName;
      const surname = name.familyName;
      const email = emails[0].value;

      let user = await getUser(id);
      if (!user) {
        user = await createUser(firstName, surname, email, id, accessToken);
      }

      return done(null, user);
    } catch (e) {
      console.error(e);
      return done(e, null);
    }
  });
});
