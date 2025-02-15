import { logger, stripIndents } from '@nrwl/devkit';

export let sassImplementation: {} | undefined;

// TODO(jack): Remove in Nx 13
try {
  sassImplementation = require('node-sass');
  logger.warn(stripIndents`
    'node-sass' has been deprecated and may not be supported in the future.
    To opt-out of the deprecated behaviour and start using 'sass' uninstall 'node-sass'.
  `);
} catch {
  sassImplementation = require('sass');
}
