import * as core from '@actions/core';

import { Options } from '@/types/index.js';

export function parseOptions(): Options {
    const inventoryPath = core.getInput('inventoryPath');

    return {
        inventoryPath
    };
}
