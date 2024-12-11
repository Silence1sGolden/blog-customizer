import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { Select } from 'src/ui/select';
import { ArticleStateType, backgroundColors, contentWidthArr, defaultArticleState, fontColors, fontFamilyOptions, fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import clsx from 'clsx';
import { Text } from 'src/ui/text';
import { useEffect, useRef, useState } from 'react';

type ArticleParamsFormProps = {
	setMainState: (data: ArticleStateType) => void,
}

export const ArticleParamsForm = ({ setMainState }: ArticleParamsFormProps) => {
	const [open, setOpen] = useState(false);
	const [formState, setFormState] = useState(defaultArticleState);
	const container = useRef<HTMLDivElement>(null);

	useEffect(() => {
		document.addEventListener('click', onOutsideClick);
	}, []);

	function onConfirm(evt: React.MouseEvent) {
		evt.preventDefault();
		setMainState(formState);
	}

	function onReset() {
		setFormState(defaultArticleState);
		setMainState(defaultArticleState);
	}

	function onOutsideClick(evt: MouseEvent) {
		const target = evt.target as HTMLElement;

		if (!container.current?.contains(target) && document.contains(target)) {
			setOpen(false);
		}
	}

	function setFontFamily(data: OptionType) {
		setFormState({
			...formState,
			fontFamilyOption: data
		});
	}

	function setFontSize(data: OptionType) {
		setFormState({
			...formState,
			fontSizeOption: data
		});
	}

	function setColor(data: OptionType) {
		setFormState({
			...formState,
			fontColor: data
		});
	}

	function setBackgroundColor(data: OptionType) {
		setFormState({
			...formState,
			backgroundColor: data
		})
	}

	function setContentWidth(data: OptionType) {
		setFormState({
			...formState,
			contentWidth: data
		})
	}

	return (
		<div ref={container}>
			<ArrowButton isOpen={open} onClick={() => { open ? setOpen(false) : setOpen(true) }} />
			<aside className={clsx(styles.container, { [styles.container_open]: open })}>
				<form className={styles.form}>
					<Text as={"h2"} size={31} weight={800} uppercase={true}>Задайте Параметры</Text>
					<Select title='Шрифт' selected={formState.fontFamilyOption} options={fontFamilyOptions} onChange={setFontFamily}/>
					<RadioGroup title='Размер Шрифта' name='size' selected={formState.fontSizeOption} options={fontSizeOptions} onChange={setFontSize}/>
					<Select title='Цвет Шрифта' selected={formState.fontColor} options={fontColors} onChange={setColor}/>
					<Separator />
					<Select title='Цвет Фона' selected={formState.backgroundColor} options={backgroundColors} onChange={setBackgroundColor} />
					<Select title='Ширина Контента' selected={formState.contentWidth} options={contentWidthArr} onChange={setContentWidth}/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' onClick={onReset}/>
						<Button title='Применить' htmlType='submit' type='apply' onClick={onConfirm}/>
					</div>
				</form>
			</aside>
		</div>
	);
};
