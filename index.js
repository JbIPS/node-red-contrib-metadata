const {getMetadata} = require('page-metadata-parser');
const domino = require('domino');
const fetch = require('node-fetch');

module.exports = function(RED) {
	"use strict";

	function MetadataParser(config) {
		RED.nodes.createNode(this, config);
		var node = this;

		node.on('input', async msg => {
			const url = config.url || msg.payload;
			try {
				const response = await fetch(url);
				const html = await response.text();
				const doc = domino.createWindow(html).document;
				msg.payload = getMetadata(doc, url);
				node.send(msg);
			} catch(e) {
				node.error(e);
			}
		});
	}

  RED.nodes.registerType("metadata parser", MetadataParser);
}
