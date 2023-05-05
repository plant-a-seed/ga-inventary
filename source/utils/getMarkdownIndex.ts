import { markdownTable } from 'markdown-table';

import { AssetInfo } from '@/types/index.js';

const keysMap = {
    title: 'Title',
    usage: 'Usage',
    location: 'Location',
    owner: 'Owner',
    boughtSince: 'Bought Since',
    boughtSource: 'Bought Source',
    status: 'Status',
    image: 'Image'
};

const markdownTemplate = `
# Inventory

[[TABLE]]
`;

function prepareData(assetsInfo: AssetInfo[]): string[][] {
    const keys = Object.keys(keysMap);
    const keysRow = keys.map(key => keysMap[key]);
    const dataRow = assetsInfo.map(assetInfo => {
        return keys.map(key => assetInfo[key]);
    });
    return [keysRow, ...dataRow];
}

export function getMarkdownIndex(assetsInfo: AssetInfo[]): string {
    const preparedData = prepareData(assetsInfo);
    const generatedTable = markdownTable(preparedData);
    return markdownTemplate.replace('[[TABLE]]', generatedTable);
}
