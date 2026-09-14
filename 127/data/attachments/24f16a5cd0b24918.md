# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> Standard User >> TC-LP-003: Verify logout functionality
- Location: tests/login.spec.ts:27:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Logout' })

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic:
          - generic:
            - generic [ref=e7]:
              - button "Open Menu" [ref=e8] [cursor=pointer]
              - img "Open Menu" [ref=e9]
            - generic [ref=e10]:
              - navigation [ref=e12]:
                - button "All Items" [active] [ref=e13] [cursor=pointer]
                - button "Dynamic Catalog" [ref=e14] [cursor=pointer]: Dynamic Catalog
                - link "About" [ref=e16] [cursor=pointer]:
                  - /url: https://saucelabs.com/
                - button "Logout" [ref=e17] [cursor=pointer]
                - button "Reset App State" [ref=e18] [cursor=pointer]
              - generic [ref=e19]:
                - button "Close Menu" [ref=e20] [cursor=pointer]
                - img "Close Menu" [ref=e21]
        - generic [ref=e23]: Swag Labs
        - button "Cart, empty" [ref=e25]
      - generic [ref=e26]:
        - generic [ref=e27]: Products
        - generic [ref=e29] [cursor=pointer]:
          - generic [ref=e30]: Name (A to Z)
          - combobox "Sort products" [ref=e31]:
            - option "Name (A to Z)" [selected]
            - option "Name (Z to A)"
            - option "Price (low to high)"
            - option "Price (high to low)"
    - main [ref=e32]:
      - generic [ref=e35]:
        - generic [ref=e36]:
          - button "View details for Sauce Labs Backpack" [ref=e38] [cursor=pointer]:
            - img "Sauce Labs Backpack" [ref=e39]
          - generic [ref=e40]:
            - generic [ref=e41]:
              - button "View details for Sauce Labs Backpack" [ref=e42] [cursor=pointer]:
                - generic [ref=e43]: Sauce Labs Backpack
              - generic [ref=e44]: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.
            - generic [ref=e45]:
              - generic [ref=e46]: $29.99
              - button "Add to cart" [ref=e47] [cursor=pointer]
        - generic [ref=e48]:
          - button "View details for Sauce Labs Bike Light" [ref=e50] [cursor=pointer]:
            - img "Sauce Labs Bike Light" [ref=e51]
          - generic [ref=e52]:
            - generic [ref=e53]:
              - button "View details for Sauce Labs Bike Light" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: Sauce Labs Bike Light
              - generic [ref=e56]: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.
            - generic [ref=e57]:
              - generic [ref=e58]: $9.99
              - button "Add to cart" [ref=e59] [cursor=pointer]
        - generic [ref=e60]:
          - button "View details for Sauce Labs Bolt T-Shirt" [ref=e62] [cursor=pointer]:
            - img "Sauce Labs Bolt T-Shirt" [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - button "View details for Sauce Labs Bolt T-Shirt" [ref=e66] [cursor=pointer]:
                - generic [ref=e67]: Sauce Labs Bolt T-Shirt
              - generic [ref=e68]: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.
            - generic [ref=e69]:
              - generic [ref=e70]: $15.99
              - button "Add to cart" [ref=e71] [cursor=pointer]
        - generic [ref=e72]:
          - button "View details for Sauce Labs Fleece Jacket" [ref=e74] [cursor=pointer]:
            - img "Sauce Labs Fleece Jacket" [ref=e75]
          - generic [ref=e76]:
            - generic [ref=e77]:
              - button "View details for Sauce Labs Fleece Jacket" [ref=e78] [cursor=pointer]:
                - generic [ref=e79]: Sauce Labs Fleece Jacket
              - generic [ref=e80]: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.
            - generic [ref=e81]:
              - generic [ref=e82]: $49.99
              - button "Add to cart" [ref=e83] [cursor=pointer]
        - generic [ref=e84]:
          - button "View details for Sauce Labs Onesie" [ref=e86] [cursor=pointer]:
            - img "Sauce Labs Onesie" [ref=e87]
          - generic [ref=e88]:
            - generic [ref=e89]:
              - button "View details for Sauce Labs Onesie" [ref=e90] [cursor=pointer]:
                - generic [ref=e91]: Sauce Labs Onesie
              - generic [ref=e92]: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.
            - generic [ref=e93]:
              - generic [ref=e94]: $7.99
              - button "Add to cart" [ref=e95] [cursor=pointer]
        - generic [ref=e96]:
          - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e98] [cursor=pointer]:
            - img "Test.allTheThings() T-Shirt (Red)" [ref=e99]
          - generic [ref=e100]:
            - generic [ref=e101]:
              - button "View details for Test.allTheThings() T-Shirt (Red)" [ref=e102] [cursor=pointer]:
                - generic [ref=e103]: Test.allTheThings() T-Shirt (Red)
              - generic [ref=e104]: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.
            - generic [ref=e105]:
              - generic [ref=e106]: $15.99
              - button "Add to cart" [ref=e107] [cursor=pointer]
  - contentinfo [ref=e108]:
    - list [ref=e109]:
      - listitem [ref=e110]:
        - link "X" [ref=e111] [cursor=pointer]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e112]:
        - link "Facebook" [ref=e113] [cursor=pointer]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e114]:
        - link "LinkedIn" [ref=e115] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e116]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1   | import { Locator, Page } from "@playwright/test";
  2   | import { BasePage } from "./base-page";
  3   | 
  4   | export class HomePage extends BasePage{
  5   |     readonly shoppingCart: Locator;
  6   |     readonly burgerMenuBtn: Locator;
  7   |     readonly burgerMenuItems: Locator;
  8   | 
  9   |     readonly aboutBtn: Locator;
  10  |     readonly resetAppStateBtn: Locator;
  11  |     readonly logOutBtn: Locator;
  12  |     readonly sauceLabsBackpackImg: Locator;
  13  |     readonly itemPrices: Locator;
  14  |     readonly sortSelection: Locator;
  15  |     readonly productNames: Locator;
  16  |     readonly productsDesc: Locator;
  17  | 
  18  |     readonly removeBoltTShirtBtn: Locator;
  19  |     readonly addBoltTShirtBtn: Locator;
  20  | 
  21  |     readonly addBackpackBtn: Locator;
  22  |     readonly removeBackpackBtn: Locator;
  23  | 
  24  |     readonly itemCountBadge: Locator;
  25  | 
  26  |     constructor(page: Page){
  27  |         super(page);
  28  |         this.shoppingCart = page.locator('#shopping_cart_container');
  29  |         this.burgerMenuBtn = page.locator('#react-burger-menu-btn');
  30  |         this.burgerMenuItems = page.locator('nav.bm-item-list a');
  31  | 
  32  |         this.aboutBtn = page.getByTestId('about-sidebar-link');
  33  |         this.resetAppStateBtn = page.getByTestId('reset-sidebar-link');
  34  |         this.logOutBtn = page.getByRole('link',{name: 'Logout'});
  35  |         this.sauceLabsBackpackImg = page.getByTestId('inventory-item-sauce-labs-backpack-img');
  36  |         this.itemPrices = page.getByTestId('inventory-item-price');
  37  |         this.sortSelection = page.getByTestId('product-sort-container');
  38  |         this.productNames = page.getByTestId('inventory-item-name');
  39  |         this.productsDesc = page.getByTestId('inventory-item-description');
  40  |         this.removeBoltTShirtBtn = page.getByTestId('remove-sauce-labs-bolt-t-shirt');
  41  |         this.addBoltTShirtBtn = page.getByTestId('add-to-cart-sauce-labs-bolt-t-shirt');
  42  |         this.itemCountBadge = page.getByTestId('shopping-cart-badge');
  43  | 
  44  |         this.addBackpackBtn = page.getByTestId('add-to-cart-sauce-labs-backpack');
  45  |         this.removeBackpackBtn = page.getByTestId('remove-sauce-labs-backpack');
  46  | 
  47  | 
  48  |     }
  49  | 
  50  |     async clickBurgerMenuBtn(){
  51  |         await this.burgerMenuBtn.click();
  52  |     }
  53  | 
  54  |     async clickLogOutBtn(){
> 55  |         await this.logOutBtn.click();
      |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  56  |     }
  57  |     
  58  |     async getAllItemPrices(){
  59  |         await this.itemPrices.last().waitFor();
  60  | 
  61  |         const prices = await this.itemPrices.all();
  62  |         return prices
  63  |     }
  64  | 
  65  |     async getPricesList(){
  66  |         await this.itemPrices.last().waitFor();
  67  |         const pricesText = await this.itemPrices.allInnerTexts();
  68  |         const prices = pricesText.map(p=> parseFloat(p.replace('$','')));
  69  | 
  70  |         return prices
  71  |     }
  72  | 
  73  |     async getProductNamesList(){
  74  |         await this.productNames.last().waitFor();
  75  |         return (await this.productNames.allInnerTexts());
  76  |     }
  77  |     async selectSortType(type: string){
  78  |         await this.sortSelection.selectOption(type);
  79  | 
  80  |     }
  81  | 
  82  |     async clickToProductByName(productName: string){
  83  |         await this.productNames.filter({hasText: productName}).click();
  84  |         
  85  |     }
  86  | 
  87  |     async addToCart(productName: string){
  88  |         const targetProductName = this.productNames.filter({hasText: productName});
  89  |         const targetProductDesc = this.productsDesc.filter({has: targetProductName});
  90  |         await targetProductDesc.getByRole('button',{name: 'Add to cart'}).click();
  91  |     }
  92  | 
  93  |     async clickRemoveBoltTShirtBtn(){
  94  |         await this.removeBoltTShirtBtn.click();
  95  |     }
  96  | 
  97  |     async clickAboutBtn(){
  98  |         await this.aboutBtn.click();
  99  |     }
  100 | 
  101 |     async clickResetAppStateBtn(){
  102 |         await this.resetAppStateBtn.click();
  103 |     }
  104 | 
  105 |     async clickToCart(){
  106 |         await this.shoppingCart.click();
  107 |     }
  108 | 
  109 | }
```