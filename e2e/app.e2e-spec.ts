import { NgbootcampPage } from './app.po';

describe('ngbootcamp App', () => {
  let page: NgbootcampPage;

  beforeEach(() => {
    page = new NgbootcampPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
