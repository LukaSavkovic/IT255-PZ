import { PzPage } from './app.po';

describe('pz App', function() {
  let page: PzPage;

  beforeEach(() => {
    page = new PzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
