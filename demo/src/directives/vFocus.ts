export const vFocus = {
  mounted(el: HTMLElement) {
    el.focus();
    el.style.outline = "none";
    el.style.border = "2px solid #42b983";
  },
};
