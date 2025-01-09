function switchLanguage(lang) {
    document.getElementById('content-en').classList.toggle('hidden', lang !== 'en');
    document.getElementById('content-jp').classList.toggle('hidden', lang !== 'jp');
    document.documentElement.lang = lang;
}