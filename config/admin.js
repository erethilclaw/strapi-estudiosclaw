module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '18f36e0e957495924b1688361b6a1a2a'),
  },
});
