export class Angular2TutorialPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-tutorial-app h1')).getText();
  }
}
