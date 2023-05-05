import * as fs from 'node:fs';
import * as path from 'node:path';

export function writeMarkdownIndex(inventoryPath: string, content: string): void {
    const indexPath = path.join(inventoryPath, 'README.md');
    fs.writeFileSync(indexPath, content);
}
