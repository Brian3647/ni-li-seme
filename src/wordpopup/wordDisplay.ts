import { Word } from '@kulupu-linku/sona';
import { fetchWord } from './data';

export const wordDisplay = async (id: string): Promise<HTMLElement | null> => {
	let word;

	try {
		word = await fetchWord(id);
	} catch {
		return null;
	}

	const container = document.createElement('div');
	container.classList.add('tpt-container');

	container.innerHTML = `
		<div class="tpt-word">
			<div class="tpt-info">
				<div class="tpt-name">
					<span>${id}</span>
					<div class="tpt-rarity ${word.usage_category}" />
						<a
							href="https://nimi.li/${word.word}"
							target="_blank"
							title="Open in nimi.li"
						>
						${OPEN_ICON}
					</a>
				</div>
				<div tpt-class="details">
					${[
						word.usage_category,
						word.book === 'none' ? null : word.book,
						word.coined_year
					]
						.filter(Boolean)
						.join(' · ')}
				</div>
				<div tpt-class="desc">${word.usage['en']}</div>
			</div>
			<img class="tpt-image" src="https://sitelen.nimi.li/img/64/${word.id}.png" />
		</div>
	`;

	return container;
};

const OPEN_ICON = `
	<svg
	  xmlns="http://www.w3.org/2000/svg"
	  viewBox="0 0 20 20"
	  fill="currentColor"
	  class="open-icon"
	>
	  <path
		fill-rule="evenodd"
		d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z"
		clip-rule="evenodd"
	  />
	  <path
		fill-rule="evenodd"
		d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z"
		clip-rule="evenodd"
	  />
	</svg>
  `;

export const CSS = `
.tpt-container {
	position: fixed;
	box-sizing: border-box;
	top: 0;
	right: 0;
	left: 0;
	z-index: 2147483647;
	pointer-events: none;
	margin-top: 1em;

	display: flex;
	justify-content: center;

	font-family:
		'Open Sans',
		system-ui,
		-apple-system,
		BlinkMacSystemFont,
		'Segoe UI',
		Roboto,
		Oxygen,
		Ubuntu,
		Cantarell,
		'Helvetica Neue',
		sans-serif;
	font-weight: 400;
	font-size: 16px;
	line-height: 1.3;

	color: #eee;
}

.tpt-container a {
	display: contents;
	color: #89b4fa;
	text-decoration: none;
}

.tpt-container a:hover {
	color: #eee;
}

.tpt-word {
	display: flex;
	background-color: #000;
	border: 1px solid #1f2937;
	padding: 1em;
	border-radius: 0.5em;
	pointer-events: all;
	max-width: calc(100% - 4em);
	width: 64ch;
}

.tpt-info {
	flex: 1;
}

.tpt-image {
	margin-left: 1em;
	width: 2.5em;
	height: 2.5em;
}

.tpt-image img {
	height: 100%;
	width: 100%;
}

.tpt-name {
	display: flex;
	gap: 0.25em;
	align-items: center;
	font-size: 120%;
	font-weight: 600;
}

.tpt-rarity {
	display: inline-block;
	border: 2px solid #000;
	box-sizing: border-box;
	width: 0.75em;
	height: 0.75em;
	border-radius: 50%;
	margin-top: 2px;
}

.tpt-core {
	background-color: #059669;
}

.tpt-widespread {
	background-color: #0284c7;
}

.tpt-common {
	background-color: #7c3aed;
}

.tpt-uncommon {
	background-color: #ca8a04;
}

.tpt-rare {
	background-color: #dc2626;
}

.tpt-obscure {
	background-color: #52525b;
}

.tpt-open-icon {
	width: 1em;
	height: 1em;
}

.tpt-details {
	color: #999;
}
`;
