# Pico-8 VSCode Plugin

This plugin provides facilities for editing Pico-8 p8 files in VSCode.

## Features

Currently the plugin provides the following features:

* Enables LUA syntax highlighting (based off the latest base LUA language plugin)
* Basic LUA language snippets for loops etc.
* Pico-8 API snippets for the (hopefully) whole Pico-8 API
* Additional Pico-8 helper snippets such as:
    * Creating new carts
    * Helpful "enumerations" for input and colours
    * Memory locations/GPIO
* Launching Pico-8 to open or run a cartridge from within VSCode

Wherever Pico-8 has an API where there are a "common" set of parameters, and less used optional ones, the snippet for the optional parameters includes the comma, so they can be quickly deleted if not needed, but you will need to type the comma if you want to use them.

## Requirements

* VSCode
* Pico-8

:)

## Extension Settings

This extension contributes the following settings:

* `pico8vscodeeditor.pico8fullpath`: full path, including the executable, for Pico-8
* `pico8vscodeeditor.pico8additionalParameters`: any additional parameters to pass to Pico-8 when launching

## Known Issues

Documentation needs more info :)

## Release Notes

### 0.1.0

Initial release.
