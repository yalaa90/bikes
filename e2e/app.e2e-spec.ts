import { RoomsPage } from './app.po';

describe('rooms App', () => {
  let page: RoomsPage;

  beforeEach(() => {
    page = new RoomsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
