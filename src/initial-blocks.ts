import { BlockNode } from 'block-board';

export const initialBlocks: BlockNode = {
  direction: 'vertical',
  firstSlotRelativeSize: 0.5423913043478261,
  slots: [
    {
      direction: 'horizontal',
      firstSlotRelativeSize: 0.5634057971014492,
      slots: ['DHT Cells', 'Entry Graph'],
    },
    {
      direction: 'horizontal',
      firstSlotRelativeSize: 0.5460878885316184,
      slots: [
        'Call Zome Fns',
        {
          direction: 'horizontal',
          firstSlotRelativeSize: 0.5258525852585259,
          slots: ['Source Chain', 'Entry Contents'],
        },
      ],
    },
  ],
};
