import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';

import styles from './ArticleParamsForm.module.scss';
import { Select } from 'src/ui/select';
import { ArticleStateType, backgroundColors, contentWidthArr, fontColors, fontFamilyOptions, fontSizeOptions, OptionType } from 'src/constants/articleProps';
import { RadioGroup } from 'src/ui/radio-group';
import { Separator } from 'src/ui/separator';
import clsx from 'clsx';
import { Text } from 'src/ui/text';

type ArticleParamsFormProps = {
	asideForm: React.RefObject<HTMLElement>,
	open: boolean,
	state: ArticleStateType,
	setOpen: (data: boolean) => void,
	setFormState: (data: ArticleStateType) => void,
	onConfirm: (evt: any) => void,
	onReset: (evt: any) => void,
}

export const ArticleParamsForm = ({ asideForm, open, state, setOpen, setFormState, onConfirm, onReset }: ArticleParamsFormProps) => {

	function setFontFamily(data: OptionType) {
		setFormState({
			...state,
			fontFamilyOption: data
		});
	}

	function setFontSize(data: OptionType) {
		setFormState({
			...state,
			fontSizeOption: data
		});
	}

	function setColor(data: OptionType) {
		setFormState({
			...state,
			fontColor: data
		});
	}

	function setBackgroundColor(data: OptionType) {
		setFormState({
			...state,
			backgroundColor: data
		})
	}

	function setContentWidth(data: OptionType) {
		setFormState({
			...state,
			contentWidth: data
		})
	}

	return (
		<>
			<ArrowButton isOpen={open} onClick={() => { open ? setOpen(false) : setOpen(true) }} />
			<aside ref={asideForm} className={clsx(styles.container, { [styles.container_open]: open })}>
				<form className={styles.form}>
					<Text size={31} weight={800} uppercase={true}>Задайте Параметры</Text>
					<Select title='Шрифт' selected={state.fontFamilyOption} options={fontFamilyOptions} onChange={setFontFamily}/>
					<RadioGroup title='Размер Шрифта' name='size' selected={state.fontSizeOption} options={fontSizeOptions} onChange={setFontSize}/>
					<Select title='Цвет Шрифта' selected={state.fontColor} options={fontColors} onChange={setColor}/>
					<Separator />
					<Select title='Цвет Фона' selected={state.backgroundColor} options={backgroundColors} onChange={setBackgroundColor} />
					<Select title='Ширина Контента' selected={state.contentWidth} options={contentWidthArr} onChange={setContentWidth}/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' onClick={onReset}/>
						<Button title='Применить' htmlType='submit' type='apply' onClick={onConfirm}/>
					</div>
				</form>
			</aside>
		</>
	);
};
