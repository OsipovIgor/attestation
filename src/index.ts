import "reflect-metadata";

import { bootstrap } from "./infrastructure/bootstrapping/bootstrap";
import { container } from "./infrastructure/ioc/ioc_container";
import { referenceDataIoCModule } from "./inversify.config";

async function runApp() {
    const port = process.env.PORT || 1371;
    return await bootstrap(container, +port, referenceDataIoCModule);
}

(async () => {
    await runApp();
})();

export { runApp };
