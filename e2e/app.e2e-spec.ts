import { AngularJS2DemosPage } from './app.po';

describe('angular-js2-demos App', () => {
  let page: AngularJS2DemosPage;

  beforeEach(() => {
    page = new AngularJS2DemosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
