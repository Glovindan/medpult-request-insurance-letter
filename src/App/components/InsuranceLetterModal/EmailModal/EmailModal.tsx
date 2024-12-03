import React, { useEffect, useState } from 'react';
import { insuranceLetterContext } from '../../../stores/InsuranceLetterContext';
import { copy } from '../../../shared/utils/utils';
import Button from '../../../../UIKit/Button/Button';
import { ButtonType } from '../../../../UIKit/Button/ButtonTypes';
import Scripts from '../../../shared/utils/clientScripts';
import Loader from '../../../../UIKit/Loader/Loader';

/** Модальное окно гарантийного письма (Email) */
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
		copy(text)
		await Scripts.handleEmailClick()
		setValue("isShowEmailModal", false);
	}

	const onClickCancel = async () => {
		setValue("isShowEmailModal", false);
	}

	const onClickSave = async () => {
		const letterData = data.insuranceLetter
		await Scripts.updateApprovalData(letterData)
		await Scripts.handleSaveEmailClick()
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
					{/* {!isTextLoading && <Button title={"Скопировать и закрыть"} clickHandler={onClickCopy} />} */}
					{!isTextLoading && <Button title={"Сохранить"} clickHandler={onClickSave} />}

					<Button title={"Отмена"} buttonType={ButtonType.outline} clickHandler={onClickCancel} />
				</div>
			</div>
		</div>
	)
}