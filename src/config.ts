export const SITE = {
  website: "https://astro-paper.pages.dev/", // replace this with your deployed domain
  author: "yuAng",
  profile: "",
  desc: "Personal blog of yuAng for sharing ideas, thoughts and experiences.",
  title: "YuCreate",
  ogImage: "yucreate-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 5,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  showAbout: false, // show about page link
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/wowyuarm/blog/edit/main/src/data/blog/", // append post slug to this url
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Bangkok", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;
