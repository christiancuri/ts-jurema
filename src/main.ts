// tslint:disable-next-line: no-var-requires
require("dotenv").config();

import moduleAlias from "module-alias";

moduleAlias.addAliases({
  "@utils": `${__dirname}/utils`,
  "@models": `${__dirname}/utils/models`,
  "@middlewares": `${__dirname}/utils/middlewares`,
  "@": `${__dirname}/*`,
});

moduleAlias();

import { app } from "./utils/index";
import router from "./router";

(async () => {
  router(app);
})();
