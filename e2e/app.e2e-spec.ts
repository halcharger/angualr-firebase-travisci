import { AngualrFirebaseTravisciPage } from './app.po';

describe('angualr-firebase-travisci App', function() {
  let page: AngualrFirebaseTravisciPage;

  beforeEach(() => {
    page = new AngualrFirebaseTravisciPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
