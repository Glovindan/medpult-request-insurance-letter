import React, { useEffect } from 'react';
import { insuranceLetterContext } from '../../stores/InsuranceLetterContext';
import EmailModal from './EmailModal/EmailModal';
import PreviewModal from './PreviewModal/PreviewModal';

/** Модальное окно гарантийного письма */
export default function InsuranceLetterModal() {
	const [data, setValue] = insuranceLetterContext.useState()
	useEffect(() => { console.log(data) }, [data])
	return (
		<div style={{ display: "flex", backgroundColor: "gray", width: "100vw", height: "100vh", justifyContent: 'center', alignItems: "center" }}>
			<insuranceLetterContext.Provider value={{ data, setValue }}>
				{data.isShowEmailModal && <EmailModal />}
				{!data.isShowPaperModal && !data.isShowEmailModal && <PreviewModal />}
			</insuranceLetterContext.Provider >
		</div>
	)
}