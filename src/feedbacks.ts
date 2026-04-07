import {
  combineRgb,
  type CompanionFeedbackDefinitions,
} from '@companion-module/base'
import type { StageTimeInstance } from './main.js'

export function getFeedbacks(self: StageTimeInstance): CompanionFeedbackDefinitions {
  return {
    lightColor: {
      type: 'advanced',
      name: 'Light Color',
      description: 'Changes button background to match the timer traffic light',
      options: [],
      callback: () => {
        const color = self.timerState.lightColor
        switch (color) {
          case 'green':
            return { bgcolor: combineRgb(0, 180, 0), color: combineRgb(255, 255, 255) }
          case 'yellow':
            return { bgcolor: combineRgb(200, 180, 0), color: combineRgb(0, 0, 0) }
          case 'red':
            return { bgcolor: combineRgb(200, 0, 0), color: combineRgb(255, 255, 255) }
          default:
            return { bgcolor: combineRgb(50, 50, 50), color: combineRgb(150, 150, 150) }
        }
      },
    },
    timerRunning: {
      type: 'boolean',
      name: 'Timer is Running',
      description: 'True when the timer is actively counting',
      options: [],
      defaultStyle: {
        bgcolor: combineRgb(0, 100, 0),
        color: combineRgb(255, 255, 255),
      },
      callback: () => {
        return self.timerState.running
      },
    },
    timerStopped: {
      type: 'boolean',
      name: 'Timer is Stopped',
      description: 'True when the timer is not running',
      options: [],
      defaultStyle: {
        bgcolor: combineRgb(100, 0, 0),
        color: combineRgb(255, 255, 255),
      },
      callback: () => {
        return !self.timerState.running
      },
    },
    modeCountdown: {
      type: 'boolean',
      name: 'Mode: Count Down Active',
      description: 'True when in normal countdown mode',
      options: [],
      defaultStyle: {
        bgcolor: combineRgb(0, 120, 0),
        color: combineRgb(255, 255, 255),
      },
      callback: () => {
        return !self.timerState.localMode && !self.timerState.countUpMode
      },
    },
    modeLocalTime: {
      type: 'boolean',
      name: 'Mode: Local Time Active',
      description: 'True when showing local time',
      options: [],
      defaultStyle: {
        bgcolor: combineRgb(0, 120, 0),
        color: combineRgb(255, 255, 255),
      },
      callback: () => {
        return self.timerState.localMode
      },
    },
    countUpActive: {
      type: 'boolean',
      name: 'Mode: Count Up Active',
      description: 'True when in count-up (stopwatch) mode',
      options: [],
      defaultStyle: {
        bgcolor: combineRgb(0, 120, 0),
        color: combineRgb(255, 255, 255),
      },
      callback: () => {
        return self.timerState.countUpMode
      },
    },
    messageVisible: {
      type: 'boolean',
      name: 'Message is Visible',
      description: 'True when a message overlay is showing',
      options: [],
      defaultStyle: {
        bgcolor: combineRgb(100, 0, 100),
        color: combineRgb(255, 255, 255),
      },
      callback: () => {
        return self.timerState.messageVisible
      },
    },
  }
}
