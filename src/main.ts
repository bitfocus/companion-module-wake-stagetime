import { InstanceBase, InstanceStatus, runEntrypoint } from '@companion-module/base'
import { type StageTimeConfig, getConfigFields } from './config.js'
import { type StageTimeStatus, getDefaultStatus, fetchStatus, sendCommand } from './api.js'
import { getActions } from './actions.js'
import { getFeedbacks } from './feedbacks.js'
import { getVariableDefinitions, getVariableValues } from './variables.js'
import { getPresets } from './presets.js'

export class StageTimeInstance extends InstanceBase<StageTimeConfig> {
  config: StageTimeConfig = { host: '127.0.0.1', port: 8088, pollInterval: 500 }
  timerState: StageTimeStatus = getDefaultStatus()
  pollTimer: ReturnType<typeof setInterval> | null = null

  async init(config: StageTimeConfig): Promise<void> {
    this.config = config
    this.updateStatus(InstanceStatus.Connecting)

    this.setActionDefinitions(getActions(this))
    this.setFeedbackDefinitions(getFeedbacks(this))
    this.setVariableDefinitions(getVariableDefinitions())
    this.setPresetDefinitions(getPresets())
    this.setVariableValues(getVariableValues(this.timerState))

    this.startPolling()
  }

  async configUpdated(config: StageTimeConfig): Promise<void> {
    this.config = config
    this.stopPolling()
    this.updateStatus(InstanceStatus.Connecting)
    this.startPolling()
  }

  async destroy(): Promise<void> {
    this.stopPolling()
  }

  getConfigFields() {
    return getConfigFields()
  }

  // --- API helper (called by actions) ---
  async sendApi(path: string): Promise<void> {
    try {
      await sendCommand(this.config.host, this.config.port, path)
    } catch (err) {
      this.log('error', `API call failed: ${path} — ${err}`)
    }
  }

  // --- Polling ---
  startPolling(): void {
    this.stopPolling()

    // Do an initial poll immediately
    this.poll()

    this.pollTimer = setInterval(() => {
      this.poll()
    }, this.config.pollInterval)
  }

  stopPolling(): void {
    if (this.pollTimer) {
      clearInterval(this.pollTimer)
      this.pollTimer = null
    }
  }

  async poll(): Promise<void> {
    try {
      const state = await fetchStatus(this.config.host, this.config.port)
      this.timerState = state
      this.updateStatus(InstanceStatus.Ok)
      this.setVariableValues(getVariableValues(state))
      this.checkFeedbacks()
    } catch (err) {
      this.updateStatus(InstanceStatus.ConnectionFailure, String(err))
    }
  }
}

runEntrypoint(StageTimeInstance, [])
