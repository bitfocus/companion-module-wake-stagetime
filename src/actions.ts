import type { CompanionActionDefinitions } from '@companion-module/base'
import type { StageTimeInstance } from './main.js'

export function getActions(self: StageTimeInstance): CompanionActionDefinitions {
  return {
    start: {
      name: 'Start Timer',
      options: [],
      callback: async () => {
        await self.sendApi('/api/start')
      },
    },
    stop: {
      name: 'Stop Timer',
      options: [],
      callback: async () => {
        await self.sendApi('/api/stop')
      },
    },
    toggle: {
      name: 'Toggle Start/Stop',
      options: [],
      callback: async () => {
        await self.sendApi('/api/toggle')
      },
    },
    clear: {
      name: 'Clear Timer',
      options: [],
      callback: async () => {
        await self.sendApi('/api/clear')
      },
    },
    setTime: {
      name: 'Set Time',
      options: [
        {
          type: 'number',
          id: 'minutes',
          label: 'Minutes',
          default: 0,
          min: 0,
          max: 999,
        },
        {
          type: 'number',
          id: 'seconds',
          label: 'Seconds',
          default: 0,
          min: 0,
          max: 59,
        },
      ],
      callback: async (action) => {
        const m = action.options.minutes ?? 0
        const s = action.options.seconds ?? 0
        await self.sendApi(`/api/set?minutes=${m}&seconds=${s}`)
      },
    },
    addMinutes: {
      name: 'Add/Subtract Minutes',
      options: [
        {
          type: 'number',
          id: 'amount',
          label: 'Minutes (negative to subtract)',
          default: 1,
          min: -999,
          max: 999,
        },
      ],
      callback: async (action) => {
        const amount = action.options.amount ?? 1
        await self.sendApi(`/api/add?minutes=${amount}`)
      },
    },
    addSeconds: {
      name: 'Add/Subtract Seconds',
      options: [
        {
          type: 'number',
          id: 'amount',
          label: 'Seconds (negative to subtract)',
          default: 30,
          min: -999,
          max: 999,
        },
      ],
      callback: async (action) => {
        const amount = action.options.amount ?? 30
        await self.sendApi(`/api/add?seconds=${amount}`)
      },
    },
    loadPreset: {
      name: 'Load Preset',
      options: [
        {
          type: 'dropdown',
          id: 'slot',
          label: 'Preset Slot',
          default: '1',
          choices: [
            { id: '1', label: 'Preset 1' },
            { id: '2', label: 'Preset 2' },
            { id: '3', label: 'Preset 3' },
            { id: '4', label: 'Preset 4' },
            { id: '5', label: 'Preset 5' },
          ],
        },
      ],
      callback: async (action) => {
        const slot = action.options.slot ?? '1'
        await self.sendApi(`/api/preset/${slot}`)
      },
    },
    showMessage: {
      name: 'Show Message',
      options: [
        {
          type: 'textinput',
          id: 'text',
          label: 'Message Text',
          default: 'WRAP UP',
        },
      ],
      callback: async (action) => {
        const text = encodeURIComponent(String(action.options.text ?? ''))
        await self.sendApi(`/api/message?text=${text}`)
      },
    },
    hideMessage: {
      name: 'Hide Message',
      options: [],
      callback: async () => {
        await self.sendApi('/api/message/hide')
      },
    },
    modeCountdown: {
      name: 'Mode: Count Down',
      options: [],
      callback: async () => {
        await self.sendApi('/api/countup/off')
        await self.sendApi('/api/mode/countdown')
      },
    },
    modeLocalTime: {
      name: 'Mode: Local Time',
      options: [],
      callback: async () => {
        await self.sendApi('/api/mode/local')
      },
    },
    countUpOn: {
      name: 'Mode: Count Up',
      options: [],
      callback: async () => {
        await self.sendApi('/api/countup/on')
      },
    },
    countUpOff: {
      name: 'Count Up: Off',
      options: [],
      callback: async () => {
        await self.sendApi('/api/countup/off')
      },
    },
    flashOn: {
      name: 'Flash at Zero: On',
      options: [],
      callback: async () => {
        await self.sendApi('/api/flash/on')
      },
    },
    flashOff: {
      name: 'Flash at Zero: Off',
      options: [],
      callback: async () => {
        await self.sendApi('/api/flash/off')
      },
    },
    stopAtZeroOn: {
      name: 'Stop at Zero: On',
      options: [],
      callback: async () => {
        await self.sendApi('/api/stopatzero/on')
      },
    },
    stopAtZeroOff: {
      name: 'Stop at Zero: Off',
      options: [],
      callback: async () => {
        await self.sendApi('/api/stopatzero/off')
      },
    },
    setWrapUp: {
      name: 'Set Wrap-Up Warning',
      options: [
        {
          type: 'number',
          id: 'minutes',
          label: 'Minutes',
          default: 2,
          min: 0,
          max: 999,
        },
        {
          type: 'number',
          id: 'seconds',
          label: 'Seconds',
          default: 0,
          min: 0,
          max: 59,
        },
      ],
      callback: async (action) => {
        const m = action.options.minutes ?? 0
        const s = action.options.seconds ?? 0
        await self.sendApi(`/api/wrapup?minutes=${m}&seconds=${s}`)
      },
    },
    bgBlue: {
      name: 'Background: Blue',
      options: [],
      callback: async () => {
        await self.sendApi('/api/background/blue')
      },
    },
    bgBlack: {
      name: 'Background: Black',
      options: [],
      callback: async () => {
        await self.sendApi('/api/background/black')
      },
    },
  }
}
