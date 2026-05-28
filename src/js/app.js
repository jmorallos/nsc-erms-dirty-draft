import { initContent } from "./components/content/content.js";
import { renderSidebar } from "./components/sidebar/sidebar.js"
import { TABS } from "./config/tabs.js";



const root = document.getElementById("app");

function initApp() {
    root.innerHTML = `
        ${renderSidebar(TABS)}
        ${initContent()}
    `;
}

initApp()
