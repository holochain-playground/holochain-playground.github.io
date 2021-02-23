import { ScopedElementsMixin } from '@open-wc/scoped-elements';
import { css, html, LitElement, property, query } from 'lit-element';
import {
  HolochainPlaygroundContainer,
  DhtCells,
  EntryGraph,
  CallZomeFns,
} from '@holochain-playground/elements';
import { TopAppBarFixed } from 'scoped-material-components/mwc-top-app-bar-fixed';
import { Button } from 'scoped-material-components/mwc-button';
import { BlockBoard, BlockNode, BlockSet } from 'block-board';
import { blockSets } from './block-sets';
import { initialBlocks } from './initial-blocks';

export class HolochainPlaygroundApp extends ScopedElementsMixin(LitElement) {
  @query('#block-board')
  board!: BlockBoard;

  @property({ type: Boolean })
  _editing = false;

  renderBarItems() {
    if (!this._editing)
      return html` <mwc-button
        icon="edit"
        slot="actionItems"
        label="Edit Layout"
        class="white-button"
        @click=${() => {
          this._editing = true;
        }}
      ></mwc-button>`;
    else {
      return html`<mwc-button
        icon="save"
        slot="actionItems"
        label="Save Layout"
        .disabled=${!this.board || this.board.isEditingLayoutEmpty()}
        class="white-button"
        @click=${() => {
          this.board.save();
          this._editing = false;
        }}
      ></mwc-button> `;
    }
  }

  render() {
    return html` <div class="column" style="flex: 1;">
      <mwc-top-app-bar-fixed>
        <div slot="title">Holochain Playground</div>

        ${this.renderBarItems()}
      </mwc-top-app-bar-fixed>
      <holochain-playground-container style="flex: 1;">
        <block-board
          id="block-board"
          style="flex: 1;"
          .editing=${this._editing}
          .initialBlockLayout=${initialBlocks}
          .blockSets=${blockSets}
          @layout-updated=${() => this.requestUpdate()}
        ></block-board>
        <!--         <div class="column fill">
          <div class="row" style="flex: 1">
            <dht-cells style="flex: 1" class="block"></dht-cells>
            <entry-graph style="flex: 1" class="block"></entry-graph>
          </div>
          <call-zome-fns style="flex: 1" class="block"></call-zome-fns>
        </div>
 -->
      </holochain-playground-container>
    </div>`;
  }

  static get styles() {
    return css`
      :host {
        display: flex;
      }
      .row {
        display: flex;
        flex-direction: row;
      }
      .column {
        display: flex;
        flex-direction: column;
      }

      .white-button {
        --mdc-button-disabled-ink-color: rgba(255, 255, 255, 0.5);
        --mdc-theme-primary: white;
      }
    `;
  }

  static get scopedElements() {
    return {
      'holochain-playground-container': HolochainPlaygroundContainer,
      'dht-cells': DhtCells,
      'call-zome-fns': CallZomeFns,
      'entry-graph': EntryGraph,
      'mwc-top-app-bar-fixed': TopAppBarFixed,
      'mwc-button': Button,
      'block-board': BlockBoard,
    };
  }
}
