import{test,expect}from "@playwright/test"
test("TO verify the Test leaf login",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("demoCSR2")
    await page.locator("#password").fill("crmsfa")
    await page.locator(".decorativeSubmit").click()

    await page.locator('text="CRM/SFA"').click()
    await page.locator('text="Create Lead"').click()
    await page.locator('#createLeadForm_companyName').fill("Test Company")
    await page.locator('#createLeadForm_firstName').fill("John")
    await page.locator('#createLeadForm_lastName').fill("Doe")
    await page.locator('#createLeadForm_personalTitle').fill("Mr.")
    await page.locator('#createLeadForm_generalProfTitle').fill("Sir")
    await page.locator('#createLeadForm_annualRevenue').fill("5000")
    await page.locator('#createLeadForm_departmentName').fill("IT")
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9876543210")
    
    await page.locator(".smallSubmit").click()




})