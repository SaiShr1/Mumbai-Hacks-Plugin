const vscode = require('vscode');
const axios = require ('axios')

/**
 * @param {vscode.ExtensionContext} context
 */
async function activate(context) {

	const res = await axios.get("https://fakestoreapi.com/products/")
	// return res.data;

	let disposable = vscode.commands.registerCommand('docucode.helloWorld', function () {

		vscode.window.showInformationMessage('Hello World from docucode!');
	});

	context.subscriptions.push(disposable);
	// return res.data;
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
