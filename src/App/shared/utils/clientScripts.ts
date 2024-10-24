import { InsuranceLetterContext, InsuranceLetterData } from '../../stores/InsuranceLetterContext'
/** Ожидание */
function sleep(ms: number) {
	return new Promise((resolve) => window.setTimeout(resolve, ms))
}
type SetLetterDataCallback = (data: InsuranceLetterData) => void
/** Функция обратного вызова заполнения данных модалки */
let setLetterDataCallback: SetLetterDataCallback | undefined
async function appendSetLetterDataCallback(callback: SetLetterDataCallback) {
	setLetterDataCallback = callback
}

/** Обработчик нажатия на кнопку отмена */
async function handleCancelClick() {
	// TODO
}

/** Обработчик нажатия на кнопку обновить */
async function handleUpdateClick(data: InsuranceLetterData) {
	// TODO
	await sleep(1000)
}

/** Обработчик нажатия на кнопку устное */
async function handleVerbalClick() {
	// TODO
	await sleep(1000)
}

/** Обработчик нажатия на кнопку email */
async function handleEmailClick() {
	// TODO
	await sleep(1000)
}

/** Обработчик нажатия на кнопку гп на бланке */
async function handlePaperClick() {
	// TODO
	await sleep(1000)
}

export default {
	appendSetLetterDataCallback,
	handleCancelClick,
	handleUpdateClick,
	handleVerbalClick,
	handleEmailClick,
	handlePaperClick,
}
