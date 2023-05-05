import * as core from '@actions/core';

import { Options } from '@/types/Options.js';

export function parseOptions(): Options {
    const inventoryPath = core.getInput('inventoryPath');

    return {
        inventoryPath
    };
}
