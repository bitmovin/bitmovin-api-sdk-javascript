# Bitmovin Javascript API Client

***Important: This is an alpha version. There may be breaking changes***

[![bitmovin](http://bitmovin-a.akamaihd.net/webpages/bitmovin-logo-github.png)](http://www.bitmovin.com)
[![npm version](https://badge.fury.io/js/bitmovin-javascript.svg)](https://badge.fury.io/js/bitmovin-javascript)

TypeScript/JavaScript-Client which enables you to seamlessly integrate the Bitmovin API into your projects. Using this API client requires an active account.

[Sign up for a Bitmovin Account!](https://dashboard.bitmovin.com/signup)

The full API reference can be found [here](https://bitmovin.com/docs).

Installation
------------

``` bash
npm install @bitmovin/api-sdk@1.20.0-alpha.0
```

Initialization
----------

### Node

Using ES6 `import`
```es6
import BitmovinApi from '@bitmovin/api-sdk';

const bitmovinApi = new BitmovinApi({apiKey: '<YOUR_API_KEY>'});
```

With `require`
```js
exports.__esModule = true;
const BitmovinApi = require('@bitmovin/api-sdk')["default"];

const bitmovinApi = new BitmovinApi({apiKey: '<YOUR_API_KEY>'});
```

### Browser

Use `@bitmovin/api-sdk/dist/bitmovin.browser.js` or `bitmovin.browser.min.js` for the minified version.

### ES5 with Modules (CommonJS)

Import `@bitmovin/api-sdk/dist/index.js`.

### Types

- Typescript (`@bitmovin/api-sdk/dist/index.d.ts`)
