import {
  HolochainPlaygroundContainer,
  DhtCells,
  EntryGraph,
  CallZomeFns,
  EntryDetail,
} from '@holochain-playground/elements';
import { TopAppBarFixed } from 'scoped-material-components/mwc-top-app-bar-fixed';
import { BlockBoard } from 'block-board';
import { html, render } from 'lit-html';

customElements.define(
  'holochain-playground-container',
  HolochainPlaygroundContainer
);
customElements.define('dht-cells', DhtCells);
customElements.define('call-zome-fns', CallZomeFns);
customElements.define('entry-graph', EntryGraph);
customElements.define('entry-detail', EntryDetail);
customElements.define('mwc-top-app-bar-fixed', TopAppBarFixed);

customElements.define('block-board', BlockBoard);

const board = document.getElementById('block-board') as BlockBoard;

board.blockSets = [
  {
    name: '',
    blocks: [
      {
        name: 'DHT Cells',
        render: root => render(html`<dht-cells style=" margin: 16px;"></dht-cells>`, root),
      },
    ],
  },
];
