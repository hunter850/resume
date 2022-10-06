import reactImage from "@/images/react.png";
import backendImage from "@/images/backend.png";
import gitImage from "@/images/git.png";
import vueImage from "@/images/vuejs_logo.png";
import html_css_js from "@/images/html_css_js.png";

export const datas = [
    {
        id: 1,
        img: html_css_js,
        imgDescription: "html css and javascript",
        content: ["熟練使用 ES6 語法", "能以 HTML、CSS、JavsScript 實作 RWD 響應式網頁"],
    },
    {
        id: 2,
        img: vueImage,
        imgDescription: "vuejs logo",
        content: ["熟練使用 options API", "熟練使用 composition API", "能以 pinia 管理全域變數"],
    },
    {
        id: 3,
        img: reactImage,
        imgDescription: "react logo",
        content: ["了解 React hooks 用法", "有以 React hooks 團隊協作開發電商網站經驗", "能以 redux 管理全域變數"],
    },
    {
        id: 4,
        img: gitImage,
        imgDescription: "git and github logo",
        content: ["使用 Git 進行版本控制", "使用 Github 進行團隊協作", "了解 Git flow"],
    },
    {
        id: 5,
        img: backendImage,
        imgDescription: "node, mariadb and express logo",
        content: ["能以 mariadb 建立資料表並做正規化", "能以 Node 搭配 Express 撰寫 API 替前端與資料庫對接"],
    },
];
