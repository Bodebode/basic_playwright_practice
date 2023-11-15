import {Page, test} from '@playwright/test';

export class LoginPage {
    constructor(private readonly page: Page) {}

    async login(username: string, password: string) {
        await

            this.page.fill('input[name="username"]', username);
        await

            this.page.fill('input[name="password"]', password);
        await

            this.page.click('#submit');
    }
}
