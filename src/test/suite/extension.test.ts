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

	test('Special cases', () => {
		assert.strictEqual(remapSelection('Njiva', ConvertDirection.toCyrilic), 'Њива');
		assert.strictEqual(remapSelection('njiva', ConvertDirection.toCyrilic), 'њива');
		assert.strictEqual(remapSelection('NJIVA', ConvertDirection.toCyrilic), 'ЊИВА');
		assert.strictEqual(remapSelection('Ljubav', ConvertDirection.toCyrilic), 'Љубав');
		assert.strictEqual(remapSelection('ljubav', ConvertDirection.toCyrilic), 'љубав');
		assert.strictEqual(remapSelection('LJUBAV', ConvertDirection.toCyrilic), 'ЉУБАВ');
		assert.strictEqual(remapSelection('Djon', ConvertDirection.toCyrilic), 'Ђон');
		assert.strictEqual(remapSelection('djon', ConvertDirection.toCyrilic), 'ђон');
		assert.strictEqual(remapSelection('DJON', ConvertDirection.toCyrilic), 'ЂОН');
		assert.strictEqual(remapSelection('Džezva', ConvertDirection.toCyrilic), 'Џезва');
		assert.strictEqual(remapSelection('džezva', ConvertDirection.toCyrilic), 'џезва');
		assert.strictEqual(remapSelection('DŽEZVA', ConvertDirection.toCyrilic), 'ЏЕЗВА');
	});
});
