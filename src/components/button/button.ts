import { customElement } from 'lit/decorators.js';
import { Button } from './internal/button';

@customElement('wdl-button')
export class WdlButton extends Button {}

declare global {
  interface HTMLElementTagNameMap {
    'wdl-button': WdlButton & ARIAMixin;
  }
}
