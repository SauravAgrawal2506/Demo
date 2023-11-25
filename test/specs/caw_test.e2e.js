
import LoginPage from '../pageobjects/login.page.js'
import dataTablePage from '../pageobjects/dataTable.page.js'
import { userData } from '../testData/userData.js'

describe('Test Assignment', () => {
    it('Insert and Validate dyanmic table data', async () => {
        await LoginPage.open()
        await dataTablePage.addTableData(userData)
        await dataTablePage.refreshTable()
        await dataTablePage.verifyTableData(userData)
    })

    after(async () => {
        await browser.deleteCookies()
    })
})

