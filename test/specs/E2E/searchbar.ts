import GlobalPageClass from "../../pages/globalPage";
import {HelionHomepageURL, HelionSearchPage, AfterSearchPage, AfterClear} from "../../config/pagesURL";
import SearchbarClass from "../../pages/components/searchbarComponents";
import ResultPageClass from "../../pages/ResultPage";
//import { searchPhrase, ResultPhrase, IncorrectSearchPhrase, NotFoundMsg } from "../../config/data";
import { ResultPhrase, searchPhrase, IncorrectSearchPhrase, NotFoundMsg } from "../../config/data";
//import { searchPhrase } from "../../config/data";

 
describe("E2E - Searchbar", async () => {
    it("Open the Helion homepage and verify URL and visible searchbar", async () => {
        await GlobalPageClass.openPage(HelionHomepageURL, HelionHomepageURL);
        await SearchbarClass.IsSearchbarVisible();
    })
 
    it("Should click on search button and verify url", async () => {
        await SearchbarClass.clickOnSearchIcon();
        expect (browser).toHaveUrl(HelionSearchPage);
    })

    it("Insert value and verify visibility Of the pop-up", async () => {
        await SearchbarClass.putValueIntoTheSearchbar(searchPhrase);
        
        await SearchbarClass.verifyVisibilityOfPopUp();
        //expect (browser).toHaveUrl(HelionSearchPage);
    })

    it("Should click see all books button", async () => {
        await SearchbarClass.ClickSeeAllBooksBtn();
        await browser.pause(2000);
        expect (browser).toHaveUrl(AfterSearchPage);
        await browser.pause(3000);
    })

    it("Should return result string", async () => {
        const title:string = await ResultPageClass.getPageTitle();
        await browser.pause(3000);
        console.log(title);
        await expect(title).toContain(ResultPhrase);
        await browser.pause(2000);
    })

    it("Should verify number of books", async () => {
        //const title:string = await ResultPageClass.getPageTitle();
        const numberOfBooks:number = await ResultPageClass.getNoOfBooks();
        console.log(numberOfBooks);
        await expect(numberOfBooks).toEqual(120);
    })


    it("Should clear input value", async () => {
        await SearchbarClass.ClearSearchbar();
        await browser.pause(2500);
        await expect(await SearchbarClass.getInputValue()).toContain("");
    })

    it("Should type incorrect value & verify message", async () => {
        await SearchbarClass.putValueIntoTheSearchbar(IncorrectSearchPhrase);
        await SearchbarClass.clickOnSearchIcon();
        expect (browser).toHaveUrl(HelionSearchPage);
        //await SearchbarClass.getNotFoundValue(NotFoundMsg),
        await browser.pause(2500);
        await expect(await SearchbarClass.getNotFoundValue()).toContain(NotFoundMsg);
    })

    it("Should clear input value and click on search icon", async () => {
        await SearchbarClass.ClearSearchbar();
        await browser.pause(2500);
        await SearchbarClass.clickOnSearchIcon();
        expect (browser).toHaveUrl(AfterClear);
    })
})