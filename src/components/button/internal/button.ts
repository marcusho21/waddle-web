import { LitElement, html, unsafeCSS } from 'lit';
import { property, query } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { literal, html as staticHtml } from 'lit/static-html.js';
import { ARIAMixinStrict } from '../../../utils/types/aria';
import styles from './button.scss?inline';

export abstract class Button extends LitElement {
  static get styles() {
    return [unsafeCSS(styles)];
  }

  /**
   * @description Whether the button is disabled.
   */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /**
   * @description href attribute for link button
   */
  @property() href?: string;

  /**
   * @description the target attribute for link button
   */
  @property() target?: string;

  /**
   * @description
   * type of a button. Valid values are "submit", "reset" and "button".
   * Defaults to "submit" in order to mimic native browser behavior.
   */
  @property() type: 'submit' | 'reset' | 'button' = 'submit';

  @query('.button') private readonly button?: HTMLButtonElement;

  // form support setup
  static get formAssociated() {
    return true;
  }

  private readonly internals = this.attachInternals();

  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  };

  override focus() {
    this.button?.focus();
  }

  override blur() {
    this.button?.blur();
  }

  protected override render() {
    const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
    const button = this.href ? literal`a` : literal`button`;

    return staticHtml`
      <${button}
        class="button"
        ?disabled="${this.disabled}"
        href=${ifDefined(this.href)}
        target=${ifDefined(this.target)}
        aria-label=${ifDefined(ariaLabel)}
        aria-haspopup=${ifDefined(ariaHasPopup)}
        aria-expanded=${ifDefined(ariaExpanded)}
      >
        ${this.renderButtonText}
      </${button}>
    `;
  }

  private get renderButtonText() {
    return html`
      <span class="button-text"><slot></slot></span>
    `;
  }
}
