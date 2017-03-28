import { MtDemoPage } from './app.po';

describe('mt-demo App', () => {
  let page: MtDemoPage;

  beforeEach(() => {
    page = new MtDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
