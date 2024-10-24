import React, { useEffect, useRef, useState } from 'react';
import { insuranceLetterContext, InsuranceLetterContext, InsuranceLetterData } from '../../../stores/InsuranceLetterContext';
import { getDataFromDraft } from '../../../shared/utils/utils';
import Panel from '../../../../UIKit/Panel/Panel';
import CustomInputDate from '../../../../UIKit/CustomInputDate/CustomInputDate';
import { InputDateType } from '../../../../UIKit/CustomInputDate/CustomInputDateTypes';
import Button from '../../../../UIKit/Button/Button';
import { ButtonType } from '../../../../UIKit/Button/ButtonTypes';
import { iframeSrc } from '../../../shared/utils/constants';
import FileViewer from '../FileViewer/FileViewer';
import LabledField from '../../LabledField/LabledField';
import Scripts from '../../../shared/utils/clientScripts';
import Loader from '../../../../UIKit/Loader/Loader';

/** Модальное окно гарантийного письма (В форме бланка) */
export default function EmailModal() {
	const { data, setValue } = insuranceLetterContext.useContext();
	// Флаг загрузки текста по шаблону
	const [isTextLoading, setIsTextLoading] = useState<boolean>(false);
	// Текст
	const [text, setText] = useState<string>("");

	// Генерация текста по шаблону
	useEffect(() => {
		setIsTextLoading(true);
		Scripts.generateEmailText().then(text => {
			setText(text)
			setIsTextLoading(false);
		})
	}, [])

	const onClickCopy = async () => {
		navigator.clipboard.writeText(text)
		await Scripts.handleVerbalClick()
		setValue("isShowEmailModal", false);
	}

	const onClickCancel = async () => {
		setValue("isShowEmailModal", false);
	}

	return (
		<div className='insurance-letter-modal'>
			<div className="insurance-letter-modal__header">
				<span className="insurance-letter-modal__label">Гарантийное письмо email</span>
			</div>
			<div className='insurance-letter-modal__content' style={{ width: "500px" }}>
				{/* Текст */}
				<div className='insurance-letter-modal__text'>
					{
						isTextLoading
							? <Loader />
							: text
					}
				</div>
				{/* Кнопки */}
				<div className='insurance-letter-modal__buttons'>
					{!isTextLoading && <Button title={"Скопировать и закрыть"} clickHandler={onClickCopy} />}
					<Button title={"Отмена"} buttonType={ButtonType.outline} clickHandler={onClickCancel} />
				</div>
			</div>
		</div>
	)
}