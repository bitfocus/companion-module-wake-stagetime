import type { CompanionVariableDefinition } from '@companion-module/base'
import type { StageTimeStatus } from './api.js'

export function getVariableDefinitions(): CompanionVariableDefinition[] {
  return [
    { variableId: 'formattedTime', name: 'Formatted Time (MM:SS)' },
    { variableId: 'remainingSeconds', name: 'Remaining Seconds' },
    { variableId: 'running', name: 'Timer Running' },
    { variableId: 'lightColor', name: 'Light Color (green/yellow/red/gray)' },
    { variableId: 'lightColorHex', name: 'Light Color Hex (#00ff00)' },
    { variableId: 'localMode', name: 'Local Time Mode' },
    { variableId: 'countUpMode', name: 'Count Up Mode' },
    { variableId: 'messageVisible', name: 'Message Visible' },
    { variableId: 'flashOn', name: 'Flash at Zero' },
    { variableId: 'stopAtZero', name: 'Stop at Zero' },
    { variableId: 'wrapUpSeconds', name: 'Wrap-Up Seconds' },
    { variableId: 'presetCount', name: 'Preset Count' },
    { variableId: 'preset_1_name', name: 'Preset 1 Name' },
    { variableId: 'preset_1_time', name: 'Preset 1 Time' },
    { variableId: 'preset_2_name', name: 'Preset 2 Name' },
    { variableId: 'preset_2_time', name: 'Preset 2 Time' },
    { variableId: 'preset_3_name', name: 'Preset 3 Name' },
    { variableId: 'preset_3_time', name: 'Preset 3 Time' },
    { variableId: 'preset_4_name', name: 'Preset 4 Name' },
    { variableId: 'preset_4_time', name: 'Preset 4 Time' },
    { variableId: 'preset_5_name', name: 'Preset 5 Name' },
    { variableId: 'preset_5_time', name: 'Preset 5 Time' },
  ]
}

export function getVariableValues(state: StageTimeStatus): Record<string, string | number | boolean> {
  return {
    formattedTime: state.formattedTime,
    remainingSeconds: state.remainingSeconds,
    running: state.running ? 'true' : 'false',
    lightColor: state.lightColor,
    lightColorHex: state.lightColorHex,
    localMode: state.localMode ? 'true' : 'false',
    countUpMode: state.countUpMode ? 'true' : 'false',
    messageVisible: state.messageVisible ? 'true' : 'false',
    flashOn: state.flashOn ? 'true' : 'false',
    stopAtZero: state.stopAtZero ? 'true' : 'false',
    wrapUpSeconds: state.wrapUpSeconds,
    presetCount: state.presetCount,
    preset_1_name: state.preset_1_name,
    preset_1_time: state.preset_1_time,
    preset_2_name: state.preset_2_name,
    preset_2_time: state.preset_2_time,
    preset_3_name: state.preset_3_name,
    preset_3_time: state.preset_3_time,
    preset_4_name: state.preset_4_name,
    preset_4_time: state.preset_4_time,
    preset_5_name: state.preset_5_name,
    preset_5_time: state.preset_5_time,
  }
}
