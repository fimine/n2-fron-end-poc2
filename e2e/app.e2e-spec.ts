import { FrontEndPOCPage } from './app.po';

describe('front-end-poc App', function() {
  let page: FrontEndPOCPage;

  beforeEach(() => {
    page = new FrontEndPOCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
