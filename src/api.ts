import http from 'http'

export interface StageTimeStatus {
  ok: boolean
  version?: string
  remainingSeconds: number
  running: boolean
  localMode: boolean
  flashOn: boolean
  stopAtZero: boolean
  wrapUpSeconds: number
  messageVisible: boolean
  countUpMode: boolean
  lightColor: string
  lightColorHex: string
  formattedTime: string
  presetCount: number
  preset_1_name: string
  preset_1_time: string
  preset_2_name: string
  preset_2_time: string
  preset_3_name: string
  preset_3_time: string
  preset_4_name: string
  preset_4_time: string
  preset_5_name: string
  preset_5_time: string
}

export function getDefaultStatus(): StageTimeStatus {
  return {
    ok: false,
    remainingSeconds: 0,
    running: false,
    localMode: false,
    flashOn: false,
    stopAtZero: false,
    wrapUpSeconds: 0,
    messageVisible: false,
    countUpMode: false,
    lightColor: 'gray',
    lightColorHex: '#666666',
    formattedTime: '00:00',
    presetCount: 0,
    preset_1_name: '', preset_1_time: '',
    preset_2_name: '', preset_2_time: '',
    preset_3_name: '', preset_3_time: '',
    preset_4_name: '', preset_4_time: '',
    preset_5_name: '', preset_5_time: '',
  }
}

export function sendCommand(host: string, port: number, path: string): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    const req = http.get({ hostname: host, port, path, timeout: 3000 }, (res) => {
      let data = ''
      res.on('data', (chunk) => (data += chunk))
      res.on('end', () => {
        try {
          resolve(JSON.parse(data))
        } catch {
          reject(new Error('Invalid JSON response'))
        }
      })
    })
    req.on('error', reject)
    req.on('timeout', () => {
      req.destroy()
      reject(new Error('Request timed out'))
    })
  })
}

export async function fetchStatus(host: string, port: number): Promise<StageTimeStatus> {
  const data = (await sendCommand(host, port, '/api/status')) as unknown as StageTimeStatus
  return data
}
