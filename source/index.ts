import * as core from '@actions/core';
import logger from 'euberlog';

import { parseOptions } from '@/utils/parseOptions.js';
import { getAssetsInfo } from '@/utils/getAssetsInfo.js';
import { getMarkdownIndex } from '@/utils/getMarkdownIndex.js';
import { writeMarkdownIndex } from '@/utils/writeMarkdownIndex.js';

try {
    logger.info('Parsing options...');
    const options = parseOptions();
    logger.debug('Options', options);
    logger.info('Getting assets info...');
    const assetsInfo = getAssetsInfo(options.inventoryPath);
    logger.info('Getting markdown index...');
    const markdownIndex = getMarkdownIndex(assetsInfo);
    logger.info('Writing markdown index...');
    writeMarkdownIndex(options.inventoryPath, markdownIndex);
    logger.success('Assets table written successfully!');
} catch (error: any) {
    console.error('Error in executing action', error);
    core.setFailed(error.message);
}
