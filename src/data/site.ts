// Static exports resolve this at build time. Vercel uses the public business domain;
// Sites builds can set SITE_ORIGIN to their own deployment origin.
export const siteOrigin = (process.env.SITE_ORIGIN || "https://www.allindsafety.com").replace(/\/$/, "");
