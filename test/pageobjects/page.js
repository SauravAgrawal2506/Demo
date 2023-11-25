import { browser } from '@wdio/globals'

export default class Page {

    open(path) {
        return browser.url(`https://testpages.herokuapp.com/styled/tag/dynamic-table.html`)
    }
}
