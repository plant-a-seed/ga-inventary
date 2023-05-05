import { mockActionsCoreGetInput, MockActionsCoreGetInput } from '@test/utils/mockActionsCore.js';

import { parseOptions } from '@src/utils/parseOptions.js';

describe('Test utility parseOptions', function () {
    it('Should work with options of a default status`', function () {
        const status: MockActionsCoreGetInput = {
            inventoryPath: './inventory'
        };
        mockActionsCoreGetInput.mockImplementation((name: string) => status[name]);

        const options = parseOptions();
        expect(options).toEqual({
            ...status
        });
    });

    it('Should work with options of a custom status`', function () {
        const status: MockActionsCoreGetInput = {
            inventoryPath: './inventory'
        };
        mockActionsCoreGetInput.mockImplementation((name: string) => status[name]);

        const options = parseOptions();
        expect(options).toEqual({
            ...status
        });
    });
});
