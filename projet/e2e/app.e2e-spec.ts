import { ProjetPage } from './app.po';

describe('projet App', () => {
  let page: ProjetPage;

  beforeEach(() => {
    page = new ProjetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
