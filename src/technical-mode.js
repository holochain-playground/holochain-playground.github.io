import { LitElement, html, css } from 'lit-element';
import { selectActiveConductor } from 'holochain-playground/state/selectors';
import { blackboardConnect } from 'holochain-playground/blackboard/blackboard-connect';

import 'holochain-playground/elements/holochain-playground-dht-graph';
import 'holochain-playground/elements/holochain-playground-conductor-detail';
import 'holochain-playground/elements/holochain-playground-dht-stats';
import { sharedStyles } from 'holochain-playground/elements/sharedStyles';

export class TechnicalMode extends blackboardConnect(
  'holochain-playground',
  LitElement
) {
  static get styles() {
    return [
      sharedStyles,
      css`
        :host {
          display: flex;
        }
      `,
    ];
  }

  render() {
    return html`
      <div class="row fill">
        <div style="flex: 1;" class="column">
          <mwc-card style="width: auto; margin: 16px; margin-bottom: 0;">
            <holochain-playground-dht-stats></holochain-playground-dht-stats>
          </mwc-card>

          ${selectActiveConductor(this.state)
            ? html`
                <holochain-playground-conductor-detail
                  class="fill"
                ></holochain-playground-conductor-detail>
              `
            : html`
                <div class="row fill center-content">
                  <span class="placeholder">Select node to see its state</span>
                </div>
              `}
        </div>
        <div class="column" style="flex: 1;">
          <holochain-playground-dht-graph
            style="flex: 1;"
          ></holochain-playground-dht-graph>
        </div>
      </div>
    `;
  }
}

customElements.define('technical-mode', TechnicalMode);
