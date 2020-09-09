import { browser } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  // function to get app-converter element
  getAppConverter() {
    return null;
  }

  // function to get form element inside app-converter
  getForm() {
    return null;
  }

  // function to get div element with class 'form-row' inside the form
  getFormRow() {
    return null;
  }

  // function to get input from all inputs inside the div element based on index
  getInput(i: number) {
    return null;
  }

  // function to get app-comparator element inside app-converter
  getAppComparator() {
    return null;
  }

  // function to get table element with class 'table table-dark' inside app-comparator element
  getTable() {
    return null;
  }
}
