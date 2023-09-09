import {HelionHomepageURL, SearchProductURL, addedProductURL} from "../../config/pagesURL";
import SearchbarClass from "../../pages/components/searchbarComponents";
import { searchPhrase, deleteAlert, emptyCartString } from "../../config/data";
import ResultPageClass from "../../pages/ResultPage";
import productPage from "../../pages/components/productPage";
import CartPageClass from "../../pages/components/CartPage";
import CartPage from "../../pages/components/CartPage";

describe("E2E - Product", async () => {
    let bookTitle: string = "";
    let price: string = "";

    before(() => {
        browser.url(HelionHomepageURL);
    });

    it("Should type a search phrase and click the search button", async () => {
        await SearchbarClass.putValueIntoTheSearchbar(searchPhrase);
        await SearchbarClass.IsSearchbarVisible();
        await SearchbarClass.clickOnSearchIcon();
        expect (browser).toHaveUrl(SearchProductURL);
})

it("Should click the 1st book", async () => {
    await ResultPageClass.clickFirstBook();
    //await browser.pause(3000);
    await productPage.ProperProductTitle();
    await productPage.addToCartButtonIsVisible();
    bookTitle = await productPage.getProductTitleValue();
    price = await productPage.getProductPrice();
})

it("Should click the cart button", async () => {
    await productPage.clickCartButton();
    expect (browser).toHaveUrl(addedProductURL);
    //expect (browser).toHaveUrlContaining(addedProductURL);
    console.log(await CartPageClass.getSuccessAlertValue());
    expect(await CartPage.getSuccessAlertValue()).toContain(bookTitle);
    expect(await CartPage.getPriceFromCart()).toContain(price);
})

it("Should delete the product from the cart", async () => {
    await CartPage.clickCheckbox();
    await CartPage.deleteFromCart();
    //expect(await CartPage.getPriceFromCart()).toContain(price);
    //@ts-ignore
    // await browser.pause(3000);
    expect(await browser.getAlertText()).toContain(deleteAlert);
    await CartPage.acceptDeleteAlert();
    expect(await CartPage.getEmptyCartValue()).toContain(emptyCartString);
})

})