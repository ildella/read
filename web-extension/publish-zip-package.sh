#!/bin/bash

# filename=frankiegpt-1.2.3.zip
VERSION=$(jq -r .version "package.json")
# last_xpi_path=$(ls  web-ext-artifacts/frankiegpt-* 2>/dev/null | sort -V | tail -n 1)
echo Version: "$VERSION"

baseFilename=web-ext-artifacts/frankiegpt-"$VERSION"
xpiFile="$baseFilename".xpi
zipFile="$baseFilename".zip
cp "$xpiFile" "$zipFile"

scp "$xpiFile" frankie.tools:/var/www/webextension/
scp "$xpiFile" frankie.tools:/var/www/webextension/frankie-latest.xpi
scp "$zipFile" frankie.tools:/var/www/webextension/
scp "$zipFile" frankie.tools:/var/www/webextension/frankie-latest.zip
rm "$zipFile"
echo "Done."
