
import * as vscode from 'vscode';
import { quoteLines } from './processors/textProcessor';

export function activate(context: vscode.ExtensionContext) {
let quoteCmd = vscode.commands.registerCommand('devsieve.quoteLines', () => {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const selection = editor.selection;
    const text = editor.document.getText(selection);
    editor.edit((editBuilder) => {
      editBuilder.replace(selection, quoteLines(text));
    });
  }
});

	context.subscriptions.push(quoteCmd);
}

export function deactivate() {}
