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

/** Модальное окно гарантийного письма (Предпросомтр) */
export default function PreviewModal() {
	const { data, setValue } = insuranceLetterContext.useContext();
	const [isFileLoading, setIsFileLoading] = useState<boolean>(false);

	// Инициализация
	React.useLayoutEffect(() => {
		const setInsuredData = (letterData: InsuranceLetterData) => {
			setValue("insuranceLetter", letterData);
		}

		Scripts.appendSetLetterDataCallback(setInsuredData)
	}, [])

	const onChangeDateFrom = (date: string) => {
		const letterData = data.insuranceLetter
		letterData.dateFrom = date;

		setValue("insuranceLetter", letterData);
	}

	const onChangeDateTo = (date: string) => {
		const letterData = data.insuranceLetter
		letterData.dateTo = date;

		setValue("insuranceLetter", letterData);
	}

	const onClickVerbal = async () => {
		// setValue("isShowPaperModal", true);
	}

	const onClickEmail = async () => {
		setValue("isShowEmailModal", true);
	}

	const onClickPaper = async () => {
		await Scripts.handlePaperClick()
	}

	const onClickCancel = async () => {
		await Scripts.handleCancelClick()
	}

	const onClickUpdate = async () => {
		setIsFileLoading(true)

		const letterData = data.insuranceLetter
		await Scripts.handleUpdateClick(letterData)

		setIsFileLoading(false)
	}

	return (
		<div className='insurance-letter-modal'>
			<div className="insurance-letter-modal__header">
				<span className="insurance-letter-modal__label">Гарантийное письмо</span>
			</div>
			<div className='insurance-letter-modal__content'>
				{/* Предпросмотр файла */}
				<div className='insurance-letter-modal__viewer'>
					<FileViewer src={data.insuranceLetter.fileSrc} isFileLoading={isFileLoading} />
				</div>
				<div className='insurance-letter-modal__separator'></div>
				{/* Даты */}
				<LabledField label={"Срок действия согласования"} >
					<div className='insurance-letter-modal__dates'>
						<LabledField label={"Дата с"} >
							<CustomInputDate type={InputDateType.date} value={data.insuranceLetter.dateFrom} setValue={onChangeDateFrom} />
						</LabledField>
						<LabledField label={"Дата по"} >
							<CustomInputDate type={InputDateType.date} value={data.insuranceLetter.dateTo} setValue={onChangeDateTo} />
						</LabledField>
					</div>
				</LabledField>
				{/* Кнопка обновить */}
				<div>
					<Button title={"Обновить"} buttonType={ButtonType.outline} clickHandler={onClickUpdate} />
				</div>
				<div className='insurance-letter-modal__separator'></div>
				{/* Кнопки */}
				<div className='insurance-letter-modal__buttons'>
					<Button title={"Устное"} clickHandler={onClickVerbal} />
					<Button title={"Email"} clickHandler={onClickEmail} />
					<Button title={"ГП на бланке"} clickHandler={onClickPaper} />
					<Button title={"Отмена"} buttonType={ButtonType.outline} clickHandler={onClickCancel} />
				</div>

			</div>
		</div>
	)
}