import { InsuranceLetterContext, InsuranceLetterData } from '../../stores/InsuranceLetterContext'

type SetLetterDataCallback = (data: InsuranceLetterData) => void
/** Функция обратного вызова заполнения данных модалки */
let setLetterDataCallback: SetLetterDataCallback | undefined
async function appendSetLetterDataCallback(callback: SetLetterDataCallback) {
	setLetterDataCallback = callback
}

export default { appendSetLetterDataCallback }
