import Page from './page.js';
import assert from 'assert'

class dynamicTable extends Page {

    get tableDataButton() {
        return $('details summary');
    }
    get tableDataInputBox() {
        return $('#jsondata');
    }
    get refreshTableButton() {
        return $('#refreshtable');
    }
    get tableDataValues() {
        return $$('//table[@id="dynamictable"]//tr//td');
    }

    async AddTableData(data) {
        await this.tableDataButton.click()
        const inputBox = await this.tableDataInputBox
        await inputBox.waitForDisplayed({ timeout: 3000 })
        await inputBox.setValue(JSON.stringify(data))
    }

    async refreshTable() {
        await this.refreshTableButton.click()
    }


    async verifyTableData(data) {
        const tableData = await this.tableDataValues
        for (let i = 0; i < (tableData.length / 3); i++) {

            let name = await tableData[(i * 3)].getText()
            expect(name).toEqual(data[i].name)

            let age = await tableData[((i * 3) + 1)].getText()
            expect(parseInt(age)).toEqual(data[i].age)

            let gender = await tableData[((i * 3) + 2)].getText()
            expect(gender).toEqual(data[i].gender)

        }
    }
}


export default new dynamicTable();
