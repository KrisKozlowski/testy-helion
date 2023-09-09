class CartPageClass {
    get bookAddedAlert() {
        return $("div.successbox > p")
    }

    get totalPrice() {
        return $("h3#cart-edit-summary")
    }

    get checkbox() {
        return $("div#formularz tr th.checkbox")
    }

    get deleteSelectedLabel() {
        return $("div#usun a")
    }

    get EmptyCart() {
        return $("div.infobox > p")
    }
    
    async getSuccessAlertValue():Promise<string> {
        const alert:WebdriverIO.Element = await this.bookAddedAlert;
        await alert.waitForDisplayed();
        return await alert.getText();
    }

    async getPriceFromCart():Promise<string> {
        const price:WebdriverIO.Element = await this.totalPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }

    async clickCheckbox() {
        const check:WebdriverIO.Element = await this.checkbox;
        await check.waitForDisplayed();
        await check.scrollIntoView();
        await check.click();
    }

    async deleteFromCart() {
        const label:WebdriverIO.Element = await this.deleteSelectedLabel;
        await label.waitForDisplayed();
        await label.scrollIntoView();
        await label.click();
    }

    async acceptDeleteAlert() {
        await browser.acceptAlert();
    }

    async getEmptyCartValue():Promise<string> {
        const alert:WebdriverIO.Element = await this.EmptyCart;
        await alert.waitForDisplayed();
        return await alert.getText();
    }
}

export default new CartPageClass();