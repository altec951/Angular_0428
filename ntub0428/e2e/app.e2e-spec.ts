import { Ntub0428Page } from './app.po';

describe('ntub0428 App', () => {
  let page: Ntub0428Page;

  beforeEach(() => {
    page = new Ntub0428Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
