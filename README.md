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

## Current Snippets

### audio
* music : Play music (-1 = stop)
* sfx : Play sfx
### basics
* for : Basic for loop
* fors : For loop with step parameter
* forall : For in all loop
* forpair : For in all pairs loop
* while : While loop
* if : Basic if
* iif : Inline if
* ifel : If else
* fun : function
### cart_data
* cartdata : Open cart data (once per exection)
* dget : Get number stored at index (call cartdata first)
* dset : Store value at index (call cartdata first)
### coroutines
* cocreate : Create a coroutine that executes the function
* coresume : Resume a created coroutine, passing optional additional parameters in first time.
* costatus : Get the status of a coroutine, either 'running', 'suspended', or 'dead'.
* yield : Pause execution from within a coroutine.
### graphics
* cam : Set camera position
* circ : Draw a circle
* circf : Draw a filled circle
* clip : Set screen clipping region
* cls : Clear the screen with the given colour
* color : Sets the default drawing colour
* cursor : Set the cursor position and carriage return margin
* fget : Gets the sprite's flag
* fset : Sets the sprite's flag
* flip : Flips the screen back buffer
* line : Draw a line
* pal : Switch colour 0 to colour 1, set palette to 0 for draw palette (sprites etc.), or 1 for screen (fades etc.)
* palt : Sets transparency on given colour to on or off
* pget : Get the value of the pixel at the given coords
* pset : Sets the value of the pixel at the given coords
* print : Prints the string in the given colour at the given coords
* rect : Draws a rectangle outline
* rectfill : Draws a filled rectangle
* sget : Get the spritesheet value of the pixel at the given coords
* sset : Sets the spritesheet value of the pixel at the given coords
* spr : Full draw sprite at given coords with given size and flip flags
* sspr : Draw sprite sheet texture at given coords
* fillp : Set fill pattern for circ, circfill, rect, rectfill, pset, and line (see https://seansleblanc.itch.io/pico-8-fillp-tool)
### input
* btn : Get button state for given player (see pconsts for constants)
* btnp : Get 'repeating' button state for given player (see pconsts for constants)
* dinput : Enable pico8 devkit input for mouse and keyboard input
* dkeyp : (Boolean) True when a key pressed
* dkey : (String) character returned by keyboard
* dmousex : Mouse X
* dmousey : Mouse Y
* dmousebtn : Mouse buttons bitfield
* dmousewheel : Mouse wheel event
### map
* map : Draw the selection of map cells at the given screen position
* mget : Gets the map value of the given cell
* mset : Sets the map value of the given cell
### math
* abs : Abolute value
* atan2 : Converts dx,dy to an angle in the range 0-1
* band : Bitwise AND
* bnot : Bitwise NOT
* bor : Bitwise OR
* bxor : Bitwise XOR
* flr : Round down
* round : Round number
* ceil : Round up
* min : Returns the lowest of the two values
* max : Returns the highest of the two values
* mid : Returns the max, min or middle number e.g. x=mid(min_x, x, max_x) will make sure x is between the min and max values.
* srand : Set random seed for rnd
* rnd : Returns a random number in the range 0-x (remember to round before using for array/sprite indexes!)
* sgn : Returns sign of x e.g. -1 or 1
* shl : Bitwise shift x left n times
* shr : Bitwise shift x right n times
* sin : Sine of x (inverted), returns a value between 0 and 1
* cos : Cosine of x, returns a value between 0 and 1
* sqrt : Square root of x
### memory
* cstore : Copy bytes from ram to filename
* memcpy : Copy memory
* memset : Set memory to value from dest_address for length bytes
* peek : Read byte from RAM
* poke : Write byte to RAM
* reload : Load a section of cartridge into RAM
### peekpoke
* gpiow : Write to GPIO
* gpior : Read from GPIO
* memgfx : Base address for graphics (sprite sheet) memory
* memgfx2 : Base address for graphics/map shared memory
* memmap : Base address for map memory
* memgfxprops : Base address for graphics props memory
* memsong : Base address for song memory
* memsfx : Base address for sfx memory
* memud : Base address for user data memory
* memcd : Base address for persistent cart data memory
* memds : Base address for draw state memory
* memhs : Base address for hardware state memory
* memgpio : Base address for gpio pin memory
* memscr : Base address for screen memory
### pico8
* pheader : Pico8 cartridge header
* game : Basic pico8 game skeleton
* game30 : Basic 30fps pico8 game skeleton
* pconsts : Basic pico8 constants

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

### 0.2.0

Updated run and open commands to save the current document first.

### 0.1.0

Initial release.
