# EdoChanDay

EdoChanDay is a Chrome extension that helps you pick and fill an EdoChan worked day on web pages. It streamlines the process with keyboard shortcuts and a simple interface.

## Features

- **Pick an EdoChan day**  
  Use the keyboard shortcut to select a day.

- **Fill the current page with an EdoChan worked day**  
  Automatically fills relevant fields with your selected day.

## Installation

1. Clone or download this repository.
2. Go to `chrome://extensions/` in your browser.
3. Enable "Developer mode".
4. Click "Load unpacked" and select the extension folder.

## Usage

- **Pick a day:**
  - Windows/Linux: `Ctrl+Z`
  - macOS: `Command+Z`
- **Fill day:**
  - Windows/Linux: `Ctrl+X`
  - macOS: `Command+X`

## Permissions

- `scripting`
- `activeTab`

## Icons

Icons are available in `images/` at sizes 16x16, 32x32, 48x48, and 128x128.

## Background

The extension uses a service worker (`background.js`) for background tasks.

## License

MIT
