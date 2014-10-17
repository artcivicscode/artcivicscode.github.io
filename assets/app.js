/* set a top-level directory to active in the menu */
var pathname = window.location.pathname;
var page = pathname.substr(1, pathname.length-2);
var section = page.split('/')[0];
var link = document.querySelector('#' + section + '-link');
if (link) link.className = 'active';