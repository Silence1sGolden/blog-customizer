import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, useRef } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	
	const [mainState, setMainState] = useState(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{ 
					'--font-family': mainState.fontFamilyOption.value,
					'--font-size': mainState.fontSizeOption.value,
					'--font-color': mainState.fontColor.value,
					'--container-width': mainState.contentWidth.value,
					'--bg-color': mainState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setMainState={setMainState} />
			<Article/>
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
