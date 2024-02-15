let active: HTMLElement | null = null;

const details = (title: string, content: string): HTMLElement => {
	const res = document.createElement('div');
	res.innerHTML = `
		<h2>${title}</h2>
		<p>${content}</p>
		<button>Close</button>
	`;

	res.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			res.remove();
		}
	});

	res.querySelector('button')?.addEventListener('click', () => {
		res.remove();
	});

	res.style.cssText = `
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
		padding: 1em;
		border: 1px solid black;
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
	`;

	return res;
};

document.addEventListener('dblclick', (e) => {
	const selection = window.getSelection();
	if (!selection) return; // double-click on something that isn't text
	const text = selection.toString().trim();
	if (!text) return; // double-click on whitespaces or tabs
	if (active) active.remove();
	active = details('Details', text);
	(e.target! as HTMLElement).append(active!);
});
