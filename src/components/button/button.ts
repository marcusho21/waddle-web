import { LitElement, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';
import styles from './button.scss?inline';

@customElement('wdl-button')
export class WdlButton extends LitElement {
  static get styles() {
    return [unsafeCSS(styles)];
  }

  render() {
    return html`
      <button><slot></slot></button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wdl-button': WdlButton;
  }
}
