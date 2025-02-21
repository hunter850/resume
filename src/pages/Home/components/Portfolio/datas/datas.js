import coffee from "@/images/0+b_frontpage.png";
import overwatch from "@/images/ow_slicing_practice.png";
import asus from "@/images/asus_slicing_practice.png";
import resume from "@/images/resume.png";
import scrollAnimation from "@/images/scroll_animatiom.png";
import vueCart from "@/images/vue_cart.png";
import holoDashboard from "@/images/holo_dashboard.jpg";

export const datas = [
    {
        id: 1,
        image: vueCart,
        alt: "vue cart",
        link: "https://github.com/iona0511/coffee_project",
        title: "ASUS官網切版練習",
        content: `
            以 Vue、php 搭配 MySQL 建立資料表及後臺網站。
        `,
        tags: ["Vue", "php", "MySQL"],
    },
    {
        id: 2,
        image: scrollAnimation,
        alt: "scroll animation",
        link: "https://hunter850.github.io/scroll_animation/",
        title: "捲動進場動畫",
        content: `
            偵測卷軸捲動判斷動畫進場，參考 aos 的 data sets 用法，並嘗試練習 proxy。
        `,
        tags: ["JavaScript", "Bootstrap"],
    },
    {
        id: 3,
        image: asus,
        alt: "ASUS slicing",
        link: "https://hunter850.github.io/slicing_practice/",
        title: "ASUS官網切版練習",
        content: `
            以 HTML 及 CSS，練習 flex 等排版技巧。
        `,
        tags: ["HTML", "CSS"],
    },
    {
        id: 4,
        image: coffee,
        alt: "0+b coffee",
        link: "https://project0plusb.netlify.app/",
        title: `0+b咖啡電商網站`,
        content: `
            8人合作以 React 撰寫電商網站，負責購物車及共用元件的開發，並以 Express 自己開 api 與後端對接。
        `,
        tags: ["React", "Node", "MySQL"],
    },
    {
        id: 5,
        image: resume,
        alt: "Kevin's resume",
        link: "https://hunter850.github.io/resume/",
        title: "個人簡歷頁",
        content: `
            以 React 搭配 SCSS ，製作個人簡歷網站，
        `,
        tags: ["React", "SCSS"],
    },
    {
        id: 6,
        image: overwatch,
        alt: "overwatch slicing",
        link: "https://hunter850.github.io/slicing_practice_RWD/",
        title: "鬥陣特公官網切版練習",
        content: `
            以 HTML、CSS 及 JavaScript，切出具有 RWD 且有互動效果的網頁。
        `,
        tags: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: 7,
        image: holoDashboard,
        alt: "Holo Dashboard",
        link: "https://holo-board.hlkw.me/",
        title: `Holo Dashboard`,
        content: `
            以 Nextjs 搭配 Tailwind 開發，並以 Express 搭配 Cheerio 爬取 Youtube 及 Hololive 官網資料，將圖片存於aws S3。
        `,
        tags: ["Nextjs", "Tailwind CSS", "Express", "Cheerio"],
    },
];
