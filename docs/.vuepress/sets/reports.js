module.exports = {
  title: "Esper Console Documentation | %v",
  setTitle: "Reports",
  handle: "craft",
  icon: "/docs/icons/icon-tip.svg",
  baseDir: "reports",
  // versions: [
  //   ["introduction", { label: "1.x" }]
  // ],
  // defaultVersion: "introduction",
  searchPlaceholder: "Search Reports (Press “/” to focus)",
  primarySet: true,
  sidebar: {
    "/": [
      {
        title: "Introduction",
        collapsable: false,
        children: [
          "",
          "view-report",
          "download-customreport",
          "email-subscribe",
          "email-unsubscribe",
          "custom-report",
        ]
      },
    ]
  }
  // locales: {
  //   "/": {
  //     lang: "en-US",
  //     name: "English",
  //     title: "Esper Console Documentation | %v",
  //     config: require("./Introduction/introduction-to-esper-en.js")
  //   },
    // "/ja/": {
    //   lang: "ja",
    //   title: "Esper Console ドキュメント | %v",
    //   config: require("./esper-console-ja.js")
    // },
    // "/fr/": {
    //   lang: "fr",
    //   title: "Esper Console Documentation | %v",
    //   config: require("./esper-console-fr.js")
    // }
  // }
};