/**
 * 
 * @param {Array} tab 
 * @returns HTMLElement
 */

export function createSidebarTab(tab, activeTab) {
    const isActive = tab.id === activeTab.id

    return /* html */ `
    <button 
        class="sidebar__tab ${isActive ? "sidebar__tab--active" : ""}" type="button" 
        role="tab" 
        id="tab-${tab.id}" 
        aria-selected="${isActive ? "true" : "false"}"
        tabindex="1" 
        aria-controls="panel-${tab.id}">
        <svg class="icon">
            <use href="./assets/icons.svg#icon-${tab.icon}"></use>
        </svg>
        ${tab.label}
    </button>
`;

}