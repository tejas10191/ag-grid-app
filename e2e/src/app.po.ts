import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }

  async openFilter(): Promise<void> {
    await browser.actions().mouseMove(element(by.css('.ag-cell-label-container'))).perform();
    await browser.actions().mouseMove(element(by.css('.ag-icon-menu'))).perform();
    return browser.actions().click().perform();
  }
}
