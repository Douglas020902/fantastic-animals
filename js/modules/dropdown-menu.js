import outsideClick  from './outsideclick.js';

export default function initDropDownMenu() {
    const dropdowmMenus = document.querySelectorAll('[data-dropdowm]');

dropdowmMenus.forEach(menu => {
    ['touchstart', 'click'].forEach(userEvent => {
        menu.addEventListener(userEvent, handleClick);
    });
});

function handleClick(event) {
    event.preventDefault();
    this.classList.toggle('active');
    outsideClick(this, ['touchstart', 'click'], () => {
        this.classList.remove('active');
    });
};
}
