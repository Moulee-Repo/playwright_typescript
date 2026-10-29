import { Page, expect } from '@playwright/test'
import { saucedemoLocator } from '../pageLocators/saucedemoLocator'

export class sauceKeywords {
    private page: Page;
    private locator: saucedemoLocator;

    constructor(page: Page) {
        this.page = page
        this.locator = new saucedemoLocator()
    }

    async userLogin(username: any, password: any) {
        await this.page.locator(this.locator.username).fill(username)
        await this.page.locator(this.locator.password).fill(password)
        await this.page.locator(this.locator.loginBtn).click()
    }

    async verifyUserLogin() {
        await expect(this.page.locator(this.locator.cartIcon)).toBeVisible({ timeout: 10000 })
    }

    async verifyloginError(expectedMessage?: string) {
        const errorMessage = this.page.locator(this.locator.loginError)
        await expect(errorMessage).toBeVisible({ timeout: 10000 })
        if (expectedMessage) {
            await expect(errorMessage).toHaveText(expectedMessage)
        }
    }
}