import { combineRgb, type CompanionPresetDefinitions } from '@companion-module/base'

export function getPresets(): CompanionPresetDefinitions {
  const presets: CompanionPresetDefinitions = {}

  // --- Timer Controls ---
  presets['toggle'] = {
    type: 'button',
    category: 'Timer Controls',
    name: 'Start / Stop',
    style: {
      text: 'START',
      size: 18,
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 100, 0),
    },
    steps: [{ down: [{ actionId: 'toggle', options: {} }], up: [] }],
    feedbacks: [
      {
        feedbackId: 'timerRunning',
        style: { bgcolor: combineRgb(150, 0, 0), text: 'STOP' },
        options: {},
      },
      {
        feedbackId: 'timerStopped',
        style: { bgcolor: combineRgb(0, 100, 0), text: 'START' },
        options: {},
      },
    ],
  }

  presets['clear'] = {
    type: 'button',
    category: 'Timer Controls',
    name: 'Clear',
    style: {
      text: 'CLEAR',
      size: 18,
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(30, 30, 80),
    },
    steps: [{ down: [{ actionId: 'clear', options: {} }], up: [] }],
    feedbacks: [],
  }

  // --- Time Adjustment ---
  const timeAdjustments: Array<{ label: string; actionId: string; amount: number }> = [
    { label: '+1 MIN', actionId: 'addMinutes', amount: 1 },
    { label: '+5 MIN', actionId: 'addMinutes', amount: 5 },
    { label: '+10 MIN', actionId: 'addMinutes', amount: 10 },
    { label: '+30 SEC', actionId: 'addSeconds', amount: 30 },
    { label: '-1 MIN', actionId: 'addMinutes', amount: -1 },
    { label: '-5 MIN', actionId: 'addMinutes', amount: -5 },
    { label: '-10 MIN', actionId: 'addMinutes', amount: -10 },
    { label: '-30 SEC', actionId: 'addSeconds', amount: -30 },
  ]

  for (const adj of timeAdjustments) {
    const key = `adj_${adj.actionId}_${String(adj.amount).replace('-', 'neg')}`
    presets[key] = {
      type: 'button',
      category: 'Time Adjustment',
      name: adj.label,
      style: {
        text: adj.label,
        size: 14,
        color: combineRgb(255, 255, 255),
        bgcolor: combineRgb(40, 40, 40),
      },
      steps: [{ down: [{ actionId: adj.actionId, options: { amount: adj.amount } }], up: [] }],
      feedbacks: [],
    }
  }

  // --- Quick Set ---
  const quickSets = [5, 10, 15, 30, 45, 60]
  for (const min of quickSets) {
    presets[`set_${min}`] = {
      type: 'button',
      category: 'Quick Set',
      name: `Set ${min} min`,
      style: {
        text: `${min}:00`,
        size: 18,
        color: combineRgb(255, 255, 255),
        bgcolor: combineRgb(40, 40, 60),
      },
      steps: [{ down: [{ actionId: 'setTime', options: { minutes: min, seconds: 0 } }], up: [] }],
      feedbacks: [],
    }
  }

  // --- Presets ---
  for (let i = 1; i <= 5; i++) {
    presets[`preset_${i}`] = {
      type: 'button',
      category: 'Presets',
      name: `Load Preset ${i}`,
      style: {
        text: `P${i}\\n$(wakemedia-stagetime:preset_${i}_name)`,
        size: 14,
        color: combineRgb(255, 255, 255),
        bgcolor: combineRgb(30, 30, 50),
      },
      steps: [{ down: [{ actionId: 'loadPreset', options: { slot: String(i) } }], up: [] }],
      feedbacks: [],
    }
  }

  // --- Messages ---
  presets['msg_wrapup'] = {
    type: 'button',
    category: 'Messages',
    name: 'Show WRAP UP',
    style: {
      text: 'WRAP\\nUP',
      size: 14,
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(100, 50, 0),
    },
    steps: [{ down: [{ actionId: 'showMessage', options: { text: 'WRAP UP' } }], up: [] }],
    feedbacks: [
      {
        feedbackId: 'messageVisible',
        style: { bgcolor: combineRgb(150, 50, 0) },
        options: {},
      },
    ],
  }

  presets['msg_show'] = {
    type: 'button',
    category: 'Messages',
    name: 'Show Message',
    style: {
      text: 'SHOW\\nMSG',
      size: 14,
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(50, 30, 80),
    },
    steps: [{ down: [{ actionId: 'showMessage', options: { text: 'MESSAGE' } }], up: [] }],
    feedbacks: [
      {
        feedbackId: 'messageVisible',
        style: { bgcolor: combineRgb(80, 30, 120) },
        options: {},
      },
    ],
  }

  presets['msg_hide'] = {
    type: 'button',
    category: 'Messages',
    name: 'Hide Message',
    style: {
      text: 'HIDE\\nMSG',
      size: 14,
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(50, 50, 50),
    },
    steps: [{ down: [{ actionId: 'hideMessage', options: {} }], up: [] }],
    feedbacks: [],
  }

  // --- Mode ---
  presets['mode_countdown'] = {
    type: 'button',
    category: 'Mode',
    name: 'Count Down',
    style: {
      text: 'COUNT\\nDOWN',
      size: 14,
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(40, 40, 60),
    },
    steps: [{ down: [{ actionId: 'modeCountdown', options: {} }], up: [] }],
    feedbacks: [
      {
        feedbackId: 'modeCountdown',
        style: { bgcolor: combineRgb(0, 120, 0) },
        options: {},
      },
    ],
  }

  presets['mode_clock'] = {
    type: 'button',
    category: 'Mode',
    name: 'Local Time',
    style: {
      text: 'LOCAL\\nTIME',
      size: 14,
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(40, 40, 60),
    },
    steps: [{ down: [{ actionId: 'modeLocalTime', options: {} }], up: [] }],
    feedbacks: [
      {
        feedbackId: 'modeLocalTime',
        style: { bgcolor: combineRgb(0, 120, 0) },
        options: {},
      },
    ],
  }

  presets['mode_countup'] = {
    type: 'button',
    category: 'Mode',
    name: 'Count Up',
    style: {
      text: 'COUNT\\nUP',
      size: 14,
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(40, 40, 60),
    },
    steps: [{ down: [{ actionId: 'countUpOn', options: {} }], up: [] }],
    feedbacks: [
      {
        feedbackId: 'countUpActive',
        style: { bgcolor: combineRgb(0, 120, 0) },
        options: {},
      },
    ],
  }

  // --- Live Display ---
  presets['live_timer'] = {
    type: 'button',
    category: 'Live Display',
    name: 'Live Timer (display only)',
    style: {
      text: '$(wakemedia-stagetime:formattedTime)',
      size: 18,
      color: combineRgb(255, 255, 255),
      bgcolor: combineRgb(0, 0, 0),
    },
    steps: [{ down: [], up: [] }],
    feedbacks: [
      {
        feedbackId: 'lightColor',
        options: {},
      },
    ],
  }

  return presets
}
