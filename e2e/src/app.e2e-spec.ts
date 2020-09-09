import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('curenncy-converter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  // test case to check page object functions are implemented
  it('should have implemented the functions in AppPage', () => {
    page.navigateTo();
    expect(page.getAppConverter().getTagName()).toBe('app-converter');
    expect(page.getForm().getTagName()).toBe('form');
    expect(page.getFormRow().getTagName()).toBe('div');
    expect(page.getInput(0).getTagName()).toBe('div');
    expect(page.getAppComparator().getTagName()).toBe('app-comparator');
    expect(page.getTable().getTagName()).toBe('table');
  });

  // write here all test cases for descriptions mentioned in PROBLEM.md using AppPage

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });
});
