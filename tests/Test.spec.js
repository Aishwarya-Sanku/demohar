import { test, expect, request } from "@playwright/test";
const objectRepository = require("../objectRepository")
const dataRepository = require("../dataRepository.json")
require("dotenv").config()

test("Test1 @smoke", async ({ page, context }) => {
  await page.goto("https://www.google.com/");
  await objectRepository.default.DPXIy(page).click();
  await objectRepository.default.text_covid_cases_in_india(page).click();
  await objectRepository.default.link_indiafightscorona_covid19(page).click();
  await objectRepository.default.link_latest_notifications(page).click();
  const page1Promise = page.waitForEvent("popup");
  await objectRepository.default.link_guidelines_for_international_arrivals_updated_on_19th_july_2023_source_(page).click();
  const page1 = await page1Promise;
  await objectRepository.default.text_mygov_corona_live_helpdesk_919013151515_get_help(page).click();
});
