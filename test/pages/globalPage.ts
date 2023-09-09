class GlobalPageClass {
    async openPage(pageURL:string, expectedPageUrl:string) {
        await browser.url(pageURL);
        await expect(browser).toHaveUrl(expectedPageUrl)
    }
}
 
export default new GlobalPageClass();