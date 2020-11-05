import * as vscode from 'vscode';
import { remapSelection, ConvertDirection } from './utils';

export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "transliterate" is now active!');
	const convertSelection = (direction: ConvertDirection)=> {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			editor.edit(editBuilder => {
					editor.selections.forEach(sel => {
							const range = sel.isEmpty ? document.getWordRangeAtPosition(sel.start) || sel : sel;
							let word = document.getText(range);
							let converted = remapSelection(word, direction);

							// @ts-ignore
							editBuilder.replace(range, converted);
					});
			});
		}
	};

	let toLatin = vscode.commands.registerCommand('transliterate.toLatin', () => convertSelection(ConvertDirection.toLatin));

	let toCyrilic = vscode.commands.registerCommand('transliterate.toCyrilic', () => convertSelection(ConvertDirection.toCyrilic));

	context.subscriptions.push(toLatin, toCyrilic);
}

// this method is called when your extension is deactivated
export function deactivate() {}
