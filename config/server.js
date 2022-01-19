module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "6b441450ff0886ba335df68cdfb59cd5"),
    },
  },
  vercel: {
    token: env("pxAFjH89LUYDxx1DpCGXlYeF"),
    projectId: env("prj_Z4QcstDffevQKhYnmhtaca58G3JR"),
    teamId: env("slezakt"),
    triggers: {
      production: env("Xu8ocNA1oX"),
    },
  },
});
