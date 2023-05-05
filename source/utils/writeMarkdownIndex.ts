import * as fs from 'node:fs';
import * as path from 'node:path';

export function writeMarkdownIndex(inventaryPath: string, content: string): void {
    const indexPath = path.join(inventaryPath, 'README.md');
    fs.writeFileSync(indexPath, content);
}
