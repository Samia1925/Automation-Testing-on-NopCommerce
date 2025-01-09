import { expect, test } from "@playwright/test";

// Verify placeholder text of input field
test("Verify placeholder text of input field", async ({ page }) => {
    // Navigate to the target URL
    await page.goto("https://test460.nop-station.com/en/");
    
    // Locate the message input field
    const messageInput = page.locator("//input[@id='small-searchterms']");
    
    await messageInput.scrollIntoViewIfNeeded();
    // Log the placeholder attribute value
    console.log(await messageInput.getAttribute("placeholder"));
    
    // Verify the placeholder attribute value
    await expect(messageInput).toHaveAttribute("placeholder", "Search store");
    console.log("Before entering data: " + await messageInput.inputValue());
    await messageInput.type("computer");
    console.log("After entering data: " + await messageInput.inputValue());
    const getValuesBtn = page.locator("//button[contains(text(), 'Search')]");
    await getValuesBtn.click();
    
});
