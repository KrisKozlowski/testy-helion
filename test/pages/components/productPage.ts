class ProductPageClass {
    get productTitle() {
        return $("div.title-group >h1 > span[itemprop='name']");
    }

    get addToCartButton() {
        return $("#addToBasket_tefust");
    }

    get productPrice() {
        return $("ins#cena_d");
    }

    async ProperProductTitle() {
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
    }

    async addToCartButtonIsVisible() {
        const cart:WebdriverIO.Element = await this.addToCartButton;
        await cart.waitForDisplayed();
    }

    async clickCartButton() {
        const cart:WebdriverIO.Element = await this.addToCartButton;
        await cart.waitForDisplayed();
        await cart.click();
    }

    async getProductTitleValue():Promise<string> {
        const title:WebdriverIO.Element = await this.productTitle;
        await title.waitForDisplayed();
        return await title.getText();
    }

    async getProductPrice():Promise<string> {
        const price:WebdriverIO.Element = await this.productPrice;
        await price.waitForDisplayed();
        return await price.getText();
    }
    }



    export default new ProductPageClass();