# companion-module-wakemedia-stagetime

Bitfocus Companion module for controlling the **StageTime** countdown timer application by Wake Media.

## What is StageTime?

StageTime is a desktop countdown timer designed for live presentations and conferences. It displays a large countdown clock with a traffic light indicator (green → yellow → red) on a secondary monitor, while the operator controls it from a separate remote window.

Learn more at [stagetime.app](https://stagetime.app)

## Requirements

- StageTime app running on the same network
- Bitfocus Companion 4.x

## Setup

1. Add a new connection in Companion and search for **StageTime**
2. Set the **Host** to the IP address of the machine running StageTime (use `127.0.0.1` if it's the same machine)
3. Set the **Port** to the HTTP API port configured in StageTime (default: `8088`)
4. The connection status should turn green when StageTime is running

## Actions

| Action | Description |
|--------|-------------|
| **Start Timer** | Start the countdown |
| **Stop Timer** | Pause the countdown |
| **Toggle Start/Stop** | Start if stopped, stop if running |
| **Clear Timer** | Stop and reset to 00:00 |
| **Set Time** | Set a specific duration (minutes + seconds) |
| **Add/Subtract Minutes** | Adjust time by minutes |
| **Add/Subtract Seconds** | Adjust time by seconds |
| **Load Preset** | Load a saved preset by slot (1–5) |
| **Show Message** | Display a message overlay on the timer screen |
| **Hide Message** | Remove the message overlay |
| **Mode: Count Down** | Switch to countdown mode |
| **Mode: Local Time** | Show the current local time |
| **Mode: Count Up** | Switch to stopwatch mode |
| **Flash at Zero: On/Off** | Toggle flashing red light at zero |
| **Stop at Zero: On/Off** | Toggle whether timer freezes at zero |
| **Set Wrap-Up Warning** | Set the yellow light warning threshold |
| **Background: Blue/Black** | Change the display background color |

## Feedbacks

| Feedback | Description |
|----------|-------------|
| **Light Color** | Changes button background to match the timer's traffic light (green/yellow/red/gray) |
| **Timer is Running** | True when the timer is actively counting |
| **Timer is Stopped** | True when the timer is paused |
| **Mode: Count Down Active** | True when in countdown mode |
| **Mode: Local Time Active** | True when showing the clock |
| **Mode: Count Up Active** | True when in stopwatch mode |
| **Message is Visible** | True when a message overlay is showing |

## Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `formattedTime` | Current timer display | `09:33` |
| `remainingSeconds` | Raw seconds remaining | `573` |
| `running` | Timer running state | `true` |
| `lightColor` | Traffic light color name | `green` |
| `lightColorHex` | Traffic light color hex | `#00ff00` |
| `localMode` | Local time mode active | `false` |
| `countUpMode` | Count up mode active | `false` |
| `messageVisible` | Message overlay showing | `false` |
| `flashOn` | Flash at zero enabled | `false` |
| `stopAtZero` | Stop at zero enabled | `false` |
| `wrapUpSeconds` | Wrap-up threshold in seconds | `120` |
| `presetCount` | Number of saved presets | `3` |
| `preset_1_name` – `preset_5_name` | Preset slot names | `Keynote` |
| `preset_1_time` – `preset_5_time` | Preset slot durations | `45:00` |

## Presets

The module includes drag-and-drop preset buttons organized by category:

- **Timer Controls** — Start/Stop toggle, Clear
- **Time Adjustment** — +1, +5, +10 min, +30 sec, -1, -5, -10 min, -30 sec
- **Quick Set** — 5, 10, 15, 30, 45, 60 minute buttons
- **Presets** — Load preset slots 1–5 (shows saved names on buttons)
- **Messages** — Wrap Up, Show Message, Hide Message
- **Mode** — Count Down, Local Time, Count Up (highlights green when active)
- **Live Display** — A display-only button showing the live timer with traffic light colors
