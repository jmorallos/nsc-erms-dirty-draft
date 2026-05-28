import { initContent } from "./components/content/content.js";
import { renderSidebar } from "./components/sidebar/sidebar.js"
import { TABS } from "./config/tabs.js";
import { STATE } from "./store/state.js";



const root = document.getElementById("app");

function render() {
    root.innerHTML = `
        ${renderSidebar(TABS, STATE.activeTab)}
        ${initContent()}
    `;

}

function initApp() {
    render();
}

initApp()
