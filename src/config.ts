import { type SomeCompanionConfigField } from '@companion-module/base'

export interface StageTimeConfig {
  host: string
  port: number
  pollInterval: number
}

export function getConfigFields(): SomeCompanionConfigField[] {
  return [
    {
      type: 'textinput',
      id: 'host',
      label: 'Host',
      width: 8,
      default: '127.0.0.1',
    },
    {
      type: 'number',
      id: 'port',
      label: 'Port',
      width: 4,
      default: 8088,
      min: 1,
      max: 65535,
    },
    {
      type: 'number',
      id: 'pollInterval',
      label: 'Poll Interval (ms)',
      width: 4,
      default: 500,
      min: 200,
      max: 5000,
    },
  ]
}
