/**
 * 
 * @param {Array} tab 
 * @returns HTMLElement
 */

export function createSidebarTab(tab) {

    return /* html */ `
    <button 
        class="sidebar__tab" type="button" 
        role="tab" 
        id="tab-${tab.id}" 
        aria-selected=""
        tabindex="1" 
        aria-controls="panel-${tab.id}">
        <svg class="icon">
            <use href="./assets/icons.svg#icon-${tab.icon}"></use>
        </svg>
        ${tab.label}
    </button>
`;

}