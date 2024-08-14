import { defineConfig } from 'cypress';
import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on('file:preprocessor', createBundler({
    plugins: [createEsbuildPlugin(config)],
  }));

  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space/',
    env: {
        USER: 'user1',
        PASSWORD: 'password1',
        USER_DATA_FILE: 'cypress/fixtures/userData1.json',
        CAR_DATA_FILE: 'cypress/fixtures/car.json',
        API_BASE_URL: 'https://qauto.forstudy.space/api'
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    specPattern: 'cypress/integration/features/*.feature',  
    setupNodeEvents,
    reporter: 'mochawesome',
    reporterOptions: {      
      reportDir: 'cucumber-reports',
      reportFilename: 'cucumber-report',
      quiet: true,
      overwrite: false,
      html: true,
      json: true
    }
  },
});
