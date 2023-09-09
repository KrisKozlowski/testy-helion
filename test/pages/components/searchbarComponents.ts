class SearchbarClass {
    get searchInput() {
        return $("#inputSearch");
    }

    get searchIcon() {
        return $("//button[contains(text(), 'Szukaj')]")
    }

    get suggestPopUp() {
        return $("form#szukanie div.suggest-list")
    }

    get seeAllBooksBtn() {
        return $("li.wszystkie > p > a")
    }

    get notFound() {
        return $(".not-found")
    }


    async IsSearchbarVisible() {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        expect(input.isDisplayed()).toBeTruthy();
    }

    async clickOnSearchIcon() {
        const SearchButton:WebdriverIO.Element = await this.searchIcon;
        await SearchButton.waitForDisplayed();
        await SearchButton.click();
    }

    async putValueIntoTheSearchbar(value: string) {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.setValue(value);
    }

    async verifyVisibilityOfPopUp() {
        const popUp:WebdriverIO.Element = await this.suggestPopUp;
        await popUp.waitForDisplayed();
        await popUp.scrollIntoView();
        expect(popUp.isDisplayed()).toBeTruthy();
    }
    async ClickSeeAllBooksBtn() {
        const btn:WebdriverIO.Element = await this.seeAllBooksBtn;
        await btn.waitForDisplayed();
        await btn.scrollIntoView();
        await btn.click();
    }

    async ClearSearchbar() {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.scrollIntoView();
        await input.clearValue();
    }

    async getInputValue():Promise<string> {
        const input:WebdriverIO.Element = await this.searchInput;
        await input.waitForDisplayed();
        await input.scrollIntoView();
        return await input.getValue();
    }

    async getNotFoundValue():Promise<string> {
        const input:WebdriverIO.Element = await this.notFound;
        await input.waitForDisplayed();
        await input.scrollIntoView();
        return await input.getText();
    }

}
export default new SearchbarClass();