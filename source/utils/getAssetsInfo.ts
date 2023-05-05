import * as path from 'node:path';
import { scan, Type, Dree, SortMethodPredefined } from 'dree';
import { read } from 'gray-matter';

import { AssetInfo, Options } from '@/types/index.js';

function getAssetInfo(assetInfo: Dree): AssetInfo {
    const title = assetInfo.name;
    const readmePath = path.join(assetInfo.path, 'README.md');
    const parsingResult = read(readmePath);
    const parsedData = parsingResult.data as Omit<AssetInfo, 'title' | 'content'>;
    const imagePath = parsedData.image ? path.join('./assets', title, parsedData.image) : null;

    return {
        title,
        ...parsedData,
        image: imagePath ? `![image](${imagePath})` : '',
        content: parsingResult.content
    };
}

export function getAssetsInfo(options: Options): AssetInfo[] {
    const assetsPath = path.join(options.inventoryPath, 'assets');
    const directories =
        scan(assetsPath, { depth: 1, normalize: true, sorted: SortMethodPredefined.ALPHABETICAL_INSENSITIVE })
            .children ?? [];
    return directories.filter(directory => directory.type === Type.DIRECTORY).map(directory => getAssetInfo(directory));
}
