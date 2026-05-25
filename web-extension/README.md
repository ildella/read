# Readme

  * [Mozilla Add-On](https://addons.mozilla.org/en-GB/firefox/addon/frankiegpt/)
  * Chrome Store (TBD)

## Setup

```shell
## Until this is fixed: https://github.com/mozilla/web-ext/issues/1696
install-firefox-developer-edition.sh
mkdir "$HOME/.mozilla/firefox/web-ext-dev-edition"
## *** Start it once!!! ***

## Load and auto-reload web extension
yarn dev

## Watch and build the js bundle.
yarn watch

## To force using a specific domain:
export DOMAIN=localhost:1420 && yarn watch
```

## Development

```shell
# Start in sandboxed environment with auto-reload
yarn dev

## Watch and build the js bundle.
yarn watch
```

Logs are seen mostly in the Multiprocess Browser Console, accessible via `CTRL+SHIFT+J`.

To use it in a real Firefox instance: AddOn page + Debug Addon menu item. 

## Sign and Publish extension


With `yarn sign` a new versions will be released for private testing and made available here: https://addons.mozilla.org/en-GB/developers/addon/frankiegpt/versions

With `yarn publish` it will be generally available. 

Docs: 

  * API Keys: https://addons.mozilla.org/en-GB/developers/addon/api/key/
  * CLI reference: https://extensionworkshop.com/documentation/develop/web-ext-command-reference/
  * https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/
  * Signing: https://mozilla.github.io/addons-server/topics/api/v4_frozen/signing.html
  
## Documentations

  * Manifest JSON https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json
  * Categories for amo-metadata.json: https://mozilla.github.io/addons-server/topics/api/categories.html#category-list
  * web-ext sign: https://extensionworkshop.com/documentation/develop/web-ext-command-reference/


## Authentication

Cookie are not usable and local/session storage are not secure. 

  * https://chat.frankie-gpt.com/chat/740f8bd0-e077-11ee-87ec-035e4bbe7376

Maybe with cookie using the addon ID as origin / domain
  
  * https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/cookies/set
  * https://javascript.info/cookie
  * https://developer.mozilla.org/en-US/docs/web/api/document/cookie

Web Authentication API: 

  * https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API
  * https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API/WebAuthn_extensions
  * https://github.com/MasterKale/SimpleWebAuthn

## Additional useful web / extensions docs

  * https://dmitripavlutin.com/timeout-fetch-request/


## License

Picked from: https://mozilla.github.io/addons-server/topics/api/licenses.html
