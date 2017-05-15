import { Angular4MicroarchitecturePage } from './app.po';

describe('angular4-microarchitecture App', () => {
  let page: Angular4MicroarchitecturePage;

  beforeEach(() => {
    page = new Angular4MicroarchitecturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
