/**
 * 下半部分铅笔类
 */
import Pencil from './Pencil';
import Sprite from '@/module/base/Sprite';

export default class DownPencil extends Pencil {
  public constructor(top: number) {
    const image: HTMLImageElement = Sprite.getImage('pencilDown');
    super(image, top);
  }

  public draw(): void {
    // 两支铅笔之间固定的间距
    const gap: number = window.innerHeight / 9;
    this.y = this.top + gap;
    super.draw();
  }
}
