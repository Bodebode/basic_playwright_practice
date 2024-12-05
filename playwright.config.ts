import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'safari',
      use: { ...devices['Mobile Pixel 5'] },
    },
    {
        name: 'firefox',
        use: { ...devices['Mobile Pixel 5'] },
      },
  ],
});
