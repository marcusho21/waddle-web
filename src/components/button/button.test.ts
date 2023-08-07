import { WdlButton } from './button';
import { expect, fixture } from '@open-wc/testing';

describe('WdlButton', () => {
  let wdlButton: WdlButton;

  beforeEach(async () => {
    wdlButton = await fixture('<wdl-button></wdl-button>');
  });

  it('should be defined', () => {
    expect(wdlButton).to.be.an.instanceOf(WdlButton);
  });
});
