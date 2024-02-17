import { wordDisplay, CSS } from './wordpopup/wordDisplay';

let active: HTMLElement | null = null;
let styles: HTMLStyleElement | null = null;

document.addEventListener('dblclick', (e) => {
	const selection = window.getSelection();
	if (!selection) return; // double-click on something that isn't text
	const text = selection.toString().trim();
	if (!text) return; // double-click on whitespaces or tabs
	if (active) active.remove();
	wordDisplay(text).then((html) => {
		if (!html) return;
		if (!styles) {
			styles = document.createElement('style');
			styles.textContent = CSS;
			document.body.append(styles);
		}

		document.body.append(html);
		active = html;
	});
});
