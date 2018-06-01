/**
 * 计分器类
 */
import { DataStore } from '../base/DataStore.js'

export class Score {
  constructor() {
    this.ctx = DataStore.getInstance().ctx
    this.scoreNumber = 0
    this.isScore = true
  }

  draw() {
    this.ctx.font = '25px Arial'
    this.ctx.fillStyle = '#333'
    this.ctx.fillText(
      this.scoreNumber.toString(),
      DataStore.getInstance().canvas.width / 2,
      DataStore.getInstance().canvas.height / 22,
      1000
    )
  }
}
