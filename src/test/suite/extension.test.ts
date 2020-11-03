import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { ConvertDirection, remapSelection } from '../../utils';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	test('Cyrilic to Latin', () => {
		assert.strictEqual(remapSelection('Danijel', ConvertDirection.toCyrilic), 'Данијел');
		assert.strictEqual(remapSelection('danijel', ConvertDirection.toCyrilic), 'данијел');
		assert.strictEqual(remapSelection('Данијел', ConvertDirection.toCyrilic), 'Данијел');
	});

	test('Latin to Cyrilic', () => {
		assert.strictEqual(remapSelection('Данијел', ConvertDirection.toLatin), 'Danijel');
		assert.strictEqual(remapSelection('данијел', ConvertDirection.toLatin), 'danijel');
		assert.strictEqual(remapSelection('Danijel', ConvertDirection.toLatin), 'Danijel');
	});
});
