import React, { useEffect, useRef, useState } from 'react';
import { insuranceLetterContext, InsuranceLetterContext, InsuranceLetterData } from '../../stores/InsuranceLetterContext';
import { getDataFromDraft } from '../../shared/utils/utils';
import Panel from '../../../UIKit/Panel/Panel';
import CustomInputDate from '../../../UIKit/CustomInputDate/CustomInputDate';
import { InputDateType } from '../../../UIKit/CustomInputDate/CustomInputDateTypes';
import Button from '../../../UIKit/Button/Button';
import { ButtonType } from '../../../UIKit/Button/ButtonTypes';
import { iframeSrc } from '../../shared/utils/constants';
import FileViewer from './FileViewer/FileViewer';
import LabledField from '../LabledField/LabledField';
import Scripts from '../../shared/utils/clientScripts';

/** Модальное окно гарантийного письма */
export default function InsuranceLetterModal() {
	const [data, setValue] = insuranceLetterContext.useState()

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

	return (
		<div style={{ display: "flex", backgroundColor: "gray", width: "100vw", height: "100vh", justifyContent: 'center', alignItems: "center" }}>
			<insuranceLetterContext.Provider value={{ data, setValue }}>
				<div className='insurance-letter-modal'>
					<div className="insurance-letter-modal__header">
						<span className="insurance-letter-modal__label">Гарантийное письмо</span>
					</div>
					<div className='insurance-letter-modal__content'>
						{/* Предпросмотр файла */}
						<div className='insurance-letter-modal__viewer'>
							<FileViewer src={iframeSrc} />
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
							<Button title={"Обновить"} buttonType={ButtonType.outline} clickHandler={undefined} />
						</div>
						<div className='insurance-letter-modal__separator'></div>
						{/* Кнопки */}
						<div className='insurance-letter-modal__buttons'>
							<Button title={"Устное"} clickHandler={undefined} />
							<Button title={"Email"} clickHandler={undefined} />
							<Button title={"ГП на бланке"} clickHandler={undefined} />
							<Button title={"Отмена"} buttonType={ButtonType.outline} clickHandler={undefined} />
						</div>
					</div>
				</div>
			</insuranceLetterContext.Provider >
		</div>
	)
}