// tests/functional.test.js
const fetch = require('node-fetch');

// Functional Test: Ensures core logic and output are correct
describe('Functional Test', () => {
    // REQUIRED: 1 Functional Test
    test('Home route displays correct environment message', async () => {
        // The application runs locally on port 3001 inside the test environment
        const response = await fetch('http://localhost:3001/');
        const text = await response.text();

        expect(response.status).toBe(200);
        // Checks that the main content is present in the response
        expect(text).toContain('AetherFlow is running!');
    }, 10000); 
});