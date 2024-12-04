import React, { useState } from 'react';
import { insuranceLetterContext, InsuranceLetterData } from '../../../stores/InsuranceLetterContext';
import CustomInputDate from '../../../../UIKit/CustomInputDate/CustomInputDate';
import { InputDateType } from '../../../../UIKit/CustomInputDate/CustomInputDateTypes';
import Button from '../../../../UIKit/Button/Button';
import { ButtonType } from '../../../../UIKit/Button/ButtonTypes';
import FileViewer from '../FileViewer/FileViewer';
import LabledField from '../../LabledField/LabledField';
import Scripts from '../../../shared/utils/clientScripts';
import InsuredList from '../../InsuredList/InsuredList';
import { ApprovalForm } from '../../../shared/types';

/** Модальное окно гарантийного письма (Предпросомтр) */
export default function PreviewModal() {
	const { data, setValue } = insuranceLetterContext.useContext();
	const [isFileLoading, setIsFileLoading] = useState<boolean>(false);

	// Инициализация
	React.useLayoutEffect(() => {
		const setLetterData = (letterData: InsuranceLetterData) => {
			setValue("insuranceLetter", letterData);
		}

		Scripts.appendSetLetterDataCallback(setLetterData)
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
		const letterData = data.insuranceLetter
		letterData.form = ApprovalForm.verbal;
		await Scripts.updateApprovalData(letterData)

		await Scripts.handleVerbalClick()
	}

	const onClickEmail = async () => {
		const letterData = data.insuranceLetter
		letterData.form = ApprovalForm.email;
		await Scripts.updateApprovalData(letterData)

		setValue("isShowEmailModal", true);
	}

	const onClickPaper = async () => {
		const letterData = data.insuranceLetter
		letterData.form = ApprovalForm.paper;
		await Scripts.updateApprovalData(letterData)

		setValue("isShowPaperModal", true);
	}

	const onClickSave = async () => {
		const letterData = data.insuranceLetter
		await Scripts.updateApprovalData(letterData)
		await Scripts.handleSaveClick()
	}
	const onClickCancel = async () => {
		await Scripts.handleCancelClick()
	}

	/** Изменить идентификаторы выбранных контрагентов */
	const setSelectedContractorsIds = (ids: string[]) => {
		const letterData = data.insuranceLetter;

		letterData.contractorsIds = ids;

		setValue("insuranceLetter", letterData)
	}

	return (
		<div className='insurance-letter-modal'>
			<div className="insurance-letter-modal__header">
				<span className="insurance-letter-modal__label">Гарантийное письмо</span>
			</div>
			<div className='insurance-letter-modal__content' style={{ width: "600px", height: "600px" }}>
				{/* Даты */}
				<LabledField label={"Срок действия согласования"} >
					<div className='insurance-letter-modal__dates'>
						<LabledField label={"Дата с"} >
							<CustomInputDate type={InputDateType.date} value={data.insuranceLetter.dateFrom} setValue={onChangeDateFrom} disabled />
						</LabledField>
						<LabledField label={"Дата по"} >
							<CustomInputDate type={InputDateType.date} value={data.insuranceLetter.dateTo} setValue={onChangeDateTo} disabled />
						</LabledField>
					</div>
				</LabledField>
				{data.insuranceLetter.isCollective &&
					<div className='insurance-letter-modal__insured-list'>
						<InsuredList selectedContractorsIds={data.insuranceLetter.contractorsIds} setSelectedContractorsIds={setSelectedContractorsIds} />
					</div>
				}
				{/* Кнопка обновить */}
				{/* <div>
					<Button title={"Обновить"} buttonType={ButtonType.outline} clickHandler={onClickUpdate} />
				</div> */}
				{/* <div className='insurance-letter-modal__separator'></div> */}
				{/* Кнопки */}
				<div className='insurance-letter-modal__buttons'>
					{!isFileLoading && <Button title={"Устное"} clickHandler={onClickVerbal} />}
					{!isFileLoading && <Button title={"Email"} clickHandler={onClickEmail} />}
					{!isFileLoading && <Button title={"ГП на бланке"} clickHandler={onClickPaper} />}
					{/* <Button title={"Сохранить"} buttonType={ButtonType.outline} clickHandler={onClickSave} /> */}
					<Button title={"Отмена"} buttonType={ButtonType.outline} clickHandler={onClickCancel} />
				</div>
			</div>
		</div>
	)
}