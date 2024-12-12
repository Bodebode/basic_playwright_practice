import { Page, } from 'playwright';

export class LoginPage {
    constructor(private page: Page) {}

    async navigate() {
        await this.page.goto('https://practicetestautomation.com/practice-test-login/');
        await this.page.waitForSelector('#username');
    }

    async enterUsername(username: string) {
        await this.page.fill('#username', username);
    }

    async enterPassword(password: string) {
        await this.page.fill('#password', password);
    }

    async clickLogin() {
        await this.page.click('/html/body/div/div/section/section/div[1]/button');
    }
}

