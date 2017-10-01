module.exports = {
  db: {
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    debug: process.env.DEBUG,
    host: process.env.HOST,
  },

  // facebook: {
  //   APP_ID: process.env.FB_APP_ID,
  //   APP_SECRET: process.env.FB_APP_SECRET,
  //   CALLBACK_URL: process.env.FB_CALLBACK_URL,
  // },
  // jwt: {
  //   SECRET: process.env.JWT_SECRET,
  // },
  // login: {
  //   REDIRECT_URL: process.env.LOGIN_REDIRECT,
  // },
};
