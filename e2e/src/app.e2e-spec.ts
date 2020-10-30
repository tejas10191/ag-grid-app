import { AppPage } from './app.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getTitleText()).toEqual('ag-grid-app app is running!');
  // });

  describe('when clicking filter hamburger icon', () => {
    it('should open a menu', async function () {
      page.navigateTo();
      const el = element(by.css('.ag-cell-label-container'));
      console.log('1.1 - Checking if we can find a cell');
      console.log('1.2 - Is cell present: ' + await el.isPresent());
      console.log('1.3 - Check complete');
      console.log('2.1 - Opening filter menu');
      await page.openFilter();
      console.log('2.2 - Opening filter menu complete');
      console.log('3.1 - Checking if we can find same cell from 1.1');
      console.log('3.2 - Is cell present: ' + await el.isPresent());
      console.log('3.3 - Check complete');
    });
  });

  // afterEach(async () => {
  //   // Assert that there are no errors emitted from the browser
  //   const logs = await browser.manage().logs().get(logging.Type.BROWSER);
  //   expect(logs).not.toContain(jasmine.objectContaining({
  //     level: logging.Level.SEVERE,
  //   } as logging.Entry));
  // });
});
