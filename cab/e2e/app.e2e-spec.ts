import { CabPage } from './app.po';

describe('cab App', function() {
  let page: CabPage;

  beforeEach(() => {
    page = new CabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
