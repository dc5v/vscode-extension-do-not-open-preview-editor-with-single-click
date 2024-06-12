import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext)
{
	const configWorkbench = vscode.workspace.getConfiguration("workbench.editor");
	const configExplorer = vscode.workspace.getConfiguration("workbench.list");

	if (configWorkbench.get("enablePreview") !== false)
	{
		configWorkbench.update("enablePreview", false, vscode.ConfigurationTarget.Global);
	}
	if (configWorkbench.get("enablePreviewFromQuickOpen") !== false)
	{
		configWorkbench.update("enablePreviewFromQuickOpen", false, vscode.ConfigurationTarget.Global);
	}

	if (configExplorer.get("openMode") !== "doubleClick")
	{
		configExplorer.update("openMode", "doubleClick", vscode.ConfigurationTarget.Global);
	}

	vscode.window.showInformationMessage("Please, don't open the CODE PREVIEW EDITOR with a single click!");
}

export function deactivate() { }
