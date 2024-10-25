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

// /** Обработчик нажатия на кнопку обновить */
// async function handleUpdateClick(data: InsuranceLetterData) {
// 	// TODO
// 	await sleep(1000)
// }

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

/** Генерация текста для email */
async function generateEmailText(): Promise<string> {
	// TODO
	await sleep(1000)

	return 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloremque consectetur quasi facere repellendus. Quae, quaerat incidunt ratione dolorum, fugit consectetur et, labore accusantium nisi ea sunt illum porro debitis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloremque consectetur quasi facere repellendus. Quae, quaerat incidunt ratione dolorum, fugit consectetur et, labore accusantium nisi ea sunt illum porro debitis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloremque consectetur quasi facere repellendus. Quae, quaerat incidunt ratione dolorum, fugit consectetur et, labore accusantium nisi ea sunt illum porro debitis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloremque consectetur quasi facere repellendus. Quae, quaerat incidunt ratione dolorum, fugit consectetur et, labore accusantium nisi ea sunt illum porro debitis! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero doloremque consectetur quasi facere repellendus. Quae, quaerat incidunt ratione dolorum, fugit consectetur et, labore accusantium nisi ea sunt illum porro debitis!'
}

/** Обновление дат согласования */
async function updateApprovalDates(data: InsuranceLetterData): Promise<void> {
	// TODO
	await sleep(1000)
}

/** Получение файла согласования */
async function generateFile(): Promise<string> {
	// TODO
	await sleep(1000)

	return ''
}

export default {
	appendSetLetterDataCallback,
	handleCancelClick,
	handleVerbalClick,
	handleEmailClick,
	handlePaperClick,
	generateEmailText,
	updateApprovalDates,
	generateFile,
}
