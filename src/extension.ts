'use strict';
import * as vscode from 'vscode';
import * as process from 'child_process';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('pico8.runCart', () => {
        if (!vscode.window || !vscode.window.activeTextEditor) {
            vscode.window.showInformationMessage("Error: Unable to find current document to execute.");
            return;
        }

        let config = vscode.workspace.getConfiguration('pico8vscodeeditor');
        let picoPath = config.pico8fullpath;
        if (!picoPath) {
            vscode.window.showInformationMessage("Error: Pico8 path not set in plugin configuration.");
            return;
        }
        let additionalParams = config.pico8additionalParameters || "";

        process.exec(`${picoPath} -run ${vscode.window.activeTextEditor.document.fileName} ${additionalParams}`, (err, stdout, stderr) => {
            if (stdout && stdout.length > 0) {
                console.log(`pico8 output: ${stdout}`);
            }
            
            if (stderr && stderr.length > 0) {
                console.log(`pico8 error output: ${stderr}`);
            }
            
            if (err) {
                vscode.window.showErrorMessage(`pico8 error: ${err.name} - ${err.message}`);
            }
        });
    });
    context.subscriptions.push(disposable);

    disposable = vscode.commands.registerCommand('pico8.openCart', () => {
        if (!vscode.window || !vscode.window.activeTextEditor) {
            vscode.window.showInformationMessage("Error: Unable to find current document to execute.");
            return;
        }

        let config = vscode.workspace.getConfiguration('pico8vscodeeditor');
        let picoPath = config.pico8fullpath;
        if (!picoPath) {
            vscode.window.showInformationMessage("Error: Pico8 path not set in plugin configuration.");
            return;
        }
        let additionalParams = config.pico8additionalParameters || "";

        process.exec(`${picoPath} ${vscode.window.activeTextEditor.document.fileName} ${additionalParams}`, (err, stdout, stderr) => {
            if (stdout && stdout.length > 0) {
                console.log(`pico8 output: ${stdout}`);
            }
            
            if (stderr && stderr.length > 0) {
                console.log(`pico8 error output: ${stderr}`);
            }
            
            if (err) {
                vscode.window.showErrorMessage(`pico8 error: ${err.name} - ${err.message}`);
            }
        });
    });
    context.subscriptions.push(disposable);
}

export function deactivate() {
}