# node-red-contrib-cloud-metadat

Node-RED node that fetch a URL metadata like page title, provider or thumbnail

## Install
Install from [npm](https://www.npmjs.com/package/node-red-contrib-metadatae)
```
npm install node-red-contrib-metadata
```

Install from the palette manager
```
node-red-contrib-metadata
```

## Usage
You can provide a URL in the node configuration or overwrite it by passing a URL in the message payload.
Be sure to pass an absolute URL, starting with `http` or `https`.

On the output, you'll get the metadata as an object like:
```
{
	"description": "Page description",
	"icon": "https://www.page.com/favicon.ico",
	"image": "https://www.page.com/img/thumbnail.jpg",
	"title": "Page title",
	"language": "en",
	"type": "video.other",
	"provider":"Site"
}
```
