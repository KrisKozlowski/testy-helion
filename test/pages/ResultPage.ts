class ResultPageClass {
 
    get searchResults() {
        return $("div#page-title > h1")
    }
     
    get getBooks() {
        return $$("ul.list > li")
    }

    get firstBook() {
        return $("ul.list > li:nth-child(1) > a")
    }
     
    async getPageTitle():Promise<string> {
        const h1:WebdriverIO.Element = await this.searchResults;
        await browser.pause(3000);
        await h1.waitForDisplayed();
        return await h1.getText();
    }
     
    async getNoOfBooks():Promise<number> {
        //const books:WebdriverIO.ElementArray = await this.getBooks;
        return await this.getBooks.length;
    }

    async clickFirstBook() {
        const item:WebdriverIO.Element = await this.firstBook;
        await item.waitForDisplayed();
        await item.click();
    }
     
    }
     
    export default new ResultPageClass();