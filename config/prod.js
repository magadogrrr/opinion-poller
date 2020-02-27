// dp not commit

module.exports = {
    //googleClientID: '285389012216-rn9c43odae01uv3grrhha7vegf6q7cjm.apps.googleusercontent.com',
    //googleClientSecret: 'F5AagJHVFFxdDXNsB9NcoXCV',
    //mongoUri: 'mongodb+srv:op_app:LBG2Qj1vsIVtj3qU@op-prod-cluster-o2ynj.mongodb.net/test?retryWrites=true&w=majority',
    //cookieKey: 'wewillnotgiveup'
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoUri: process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY
  };


