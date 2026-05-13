import { commands } from 'vscode';

/**
 * Opens environment search settings at workspace level.
 */
export async function openSearchSettings(): Promise<void> {
    await commands.executeCommand(
        'workbench.action.openWorkspaceSettings',
        '@ext:wubzbz.vscode-python-envs "search path"',
    );
}
