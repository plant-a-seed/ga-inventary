import * as path from 'node:path';
import { scan, Type, Dree, SortMethodPredefined } from 'dree';
import { read } from 'gray-matter';

import { AssetInfo } from '@/types/index.js';

function getAssetInfo(assetInfo: Dree): AssetInfo {
    const title = assetInfo.name;
    const readmePath = path.join(assetInfo.path, 'README.md');
    const parsingResult = read(readmePath);
    return {
        title,
        ...(parsingResult.data as Omit<AssetInfo, 'title' | 'content'>),
        content: parsingResult.content
    };
}

export function getAssetsInfo(inventoryPath: string): AssetInfo[] {
    const assetsPath = path.join(inventoryPath, 'assets');
    const directories =
        scan(assetsPath, { depth: 1, normalize: true, sorted: SortMethodPredefined.ALPHABETICAL_INSENSITIVE })
            .children ?? [];
    return directories.filter(directory => directory.type === Type.DIRECTORY).map(directory => getAssetInfo(directory));
}
