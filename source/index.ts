import * as core from '@actions/core';
import logger from 'euberlog';

try {
    logger.info('Starting action');
} catch (error: any) {
    console.error('Error in executing action', error);
    core.setFailed(error.message);
}
