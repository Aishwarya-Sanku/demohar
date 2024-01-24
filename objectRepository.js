const objectRepository = {
  "default": {
    "DPXIy": (page) => page.locator(".DPXIy"),
    "text_covid_cases_in_india": (page) => page.getByText("covid cases in india"),
    "link_indiafightscorona_covid19": (page) => page.getByRole("link", { name: "IndiaFightsCorona COVID-19" }),
    "link_latest_notifications": (page) => page.getByRole("link", { name: "Latest Notifications" }),
    "link_guidelines_for_international_arrivals_updated_on_19th_july_2023_source_": (page) => page.getByRole("link", { name: "Guidelines for International Arrivals (updated on 19th July 2023) - Source :" }),
    "text_mygov_corona_live_helpdesk_919013151515_get_help": (page) => page.getByText("MyGov Corona Live HelpDesk - 919013151515 Get Help"),
  },
};
module.exports = objectRepository;