const fs = require("fs");
const manifest = require("./src/manifest.json");

manifest.h5.publicPath = process.env.SERVER_ENV !== "NETLIFY" ? "/apps/wechatmd/" : "/";
const result = JSON.stringify(manifest, null, 2);

fs.writeFile("./src/manifest.json", result, function (err) {
  if (err) {
    console.error(err);
  }
});
