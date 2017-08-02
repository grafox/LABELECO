import { MDLPage } from './app.po';

describe('mdl App', () => {
  let page: MDLPage;

  beforeEach(() => {
    page = new MDLPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
