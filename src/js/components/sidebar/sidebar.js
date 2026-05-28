import { createSidebarTab } from "./tab.js";

export function renderSidebar(tabs) {


    return /* html */ `
        <aside id="sidebar" class="sidebar">
            <div class="sidebar__brand">
                <strong>NSC ERMS</strong>
            </div>

            <div class=sidebar__tablist id="tablist" role="tablist">
            ${tabs.map(createSidebarTab).join('')}
            </div>

            <div id="logout-login" class="logout-login">
                <button class="sidebar__tab" type="button">
                    <svg class="icon">
                        <use href="./assets/icons.svg#icon-logout"></use>
                    </svg>
                    Logout
                </button>
            </div>
        </aside>
    `;
}