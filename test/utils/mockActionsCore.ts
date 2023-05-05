export interface MockActionsCoreGetInput {
    inventoryPath?: string;
}

export const mockActionsCoreGetInput = jest.fn();

jest.mock('@actions/core', () => ({
    getInput: mockActionsCoreGetInput
}));
