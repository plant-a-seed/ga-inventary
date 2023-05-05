import * as core from '@actions/core';
import logger from 'euberlog';

import { parseOptions } from './utils/parseOptions.js';

try {
    logger.info('Parsing options...');
    const options = parseOptions();
    logger.debug('Options', options);
} catch (error: any) {
    console.error('Error in executing action', error);
    core.setFailed(error.message);
}
