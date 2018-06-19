import "reflect-metadata";

import { bootstrap } from "./infrastructure/bootstrapping/bootstrap";
import { container } from "./infrastructure/ioc/ioc_container";
import { referenceDataIoCModule } from "./inversify.config";

import { dbSettings } from "./configs";

async function runApp() {
    return await bootstrap(container, 1371, dbSettings, referenceDataIoCModule);
}

(async () => {
    await runApp();
})();

export { runApp };
