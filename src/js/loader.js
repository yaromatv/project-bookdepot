export const loader = {
  loaderEl: `<p class="loader">Loading books, please wait...<span class="loader-img"></span></p>`,
  hideLoaderEl() {
    this.classList.add('hidden');
  },
  showLoaderEl() {
    this.classList.remove('hidden');
  },
};
