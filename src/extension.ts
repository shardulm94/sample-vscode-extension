'use strict';
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    console.log('Congratulations, your extension "sample-vscode-extension" is now active!');

    let disposable: vscode.Disposable[] = [];

    disposable[0] = vscode.window.onDidChangeActiveTextEditor((e: vscode.TextEditor) => {
        let msg: string = "onDidChangeActiveTextEditor called =>\n";
        msg += "new editor file: " + ((e.document) ? e.document.fileName : "undefined") + "\n";
        msg += "\n";
        console.log(msg);
    });

    disposable[1] = vscode.window.onDidChangeTextEditorSelection((e: vscode.TextEditorSelectionChangeEvent) => {
        let msg: string = "onDidChangeTextEditorSelection called =>\n";
        msg += "file: " + ((e.textEditor.document) ? e.textEditor.document.fileName : "undefined") + "\n";
        msg += "line count: " + e.textEditor.document.lineCount + " ";
        msg += "selection: Ln " + e.selections[0].active.line + ", Col " + e.selections[0].active.character + "\n";
        msg += "\n";
        console.log(msg);
    });

    context.subscriptions.push(...disposable);
}

export function deactivate() {
}