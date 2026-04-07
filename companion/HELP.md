# Wake Media StageTime

This module controls the **StageTime** countdown timer application.

## Configuration

- **Host**: The IP address or hostname of the machine running StageTime (default: `127.0.0.1`)
- **Port**: The HTTP API port configured in StageTime (default: `8088`)

## Features

### Actions
- **Start / Stop / Toggle / Clear** the timer
- **Set Time** to a specific duration
- **Add or subtract** minutes and seconds
- **Load Presets** 1–5 by slot number
- **Show / Hide messages** on the display
- **Switch modes**: countdown, local time, count up
- **Toggle options**: flash at zero, stop at zero, wrap-up warning, blue background

### Feedbacks
- **Light Color**: Changes button background to match the timer's traffic light (green/yellow/red/gray)
- **Running State**: Changes button appearance based on whether the timer is running

### Variables
- `formattedTime` — Current timer display (e.g., "09:33")
- `remainingSeconds` — Raw seconds remaining
- `running` — Whether the timer is counting
- `lightColor` — Current light state (green, yellow, red, gray)
- `countUpMode` — Whether in stopwatch mode
- `messageVisible` — Whether a message is showing
- Preset names and times for slots 1–5

### Presets
Pre-configured buttons for common operations — drag them onto your button grid to get started quickly.
