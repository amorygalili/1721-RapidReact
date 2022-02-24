import { html, css, LitElement } from 'lit';

class BooleanBox extends LitElement {

  static properties = {
    value: { type: Boolean, primary: true },
    trueColor: { type: String, attribute: 'true-color' },
    falseColor: { type: String, attribute: 'false-color' },
    label: { type: String }
  }

  static styles = css`
    :host { 
      display: inline-block; 
      width: 100px;
      height: 100px;
      margin: 5px;
    }
    
    .box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;
      background-color: var(--box-color);
      text-align: center;
    }
  `;

  constructor() {
    super();
    this.value = false;
    this.trueColor = '#00ff00';
    this.falseColor = '#ff0000';
    this.label = '';
  }

  updated() {
    const backgroundNode = this.renderRoot.querySelector('.box');
    const backgroundColor = this.value ? this.trueColor : this.falseColor;

    backgroundNode.style.setProperty('--box-color', backgroundColor);
  }

  render() {
    return html`
      <div class="box">
        ${this.label}
      </div>
    `;
  }
}

customElements.define('frc-boolean-box', BooleanBox);