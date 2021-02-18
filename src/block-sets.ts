import { DhtCells, CallZomeFns, EntryGraph, EntryDetail, SourceChain } from '@holochain-playground/elements';
import { BlockSet } from 'block-board';
import { render, html } from 'lit-html';

export const blockSets: BlockSet[] = [
  {
    name: 'Global Views',
    blocks: [
      {
        name: 'DHT Cells',
        render: root =>
          render(html`<dht-cells style="margin: 8px; flex: 1;"></dht-cells>`, root),
      },
      {
        name: 'Entry Graph',
        render: root =>
          render(html`<entry-graph style="margin: 8px; flex: 1;"></entry-graph>`, root),
      },
    ],
  },
  {
    name: 'Cell Views',
    blocks: [
      {
        name: 'Source Chain',
        render: root =>
          render(html`<source-chain style="margin: 8px; flex: 1;"></source-chain>`, root),
      },
      {
        name: 'Call Zome Fns',
        render: root =>
          render(html`<call-zome-fns style="margin: 8px; flex: 1;"></call-zome-fns>`, root),
      },
    ],
  },
];

customElements.define('dht-cells', DhtCells);
customElements.define('source-chain', SourceChain);
customElements.define('call-zome-fns', CallZomeFns);
customElements.define('entry-graph', EntryGraph);
customElements.define('entry-detail', EntryDetail);
