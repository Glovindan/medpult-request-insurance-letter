import { FetchData, ItemData, SortData } from '../../../UIKit/CustomList/CustomListTypes'
import { InsuranceLetterContext, InsuranceLetterData } from '../../stores/InsuranceLetterContext'
import { InsuredListData } from '../types'
/** Ожидание */
function sleep(ms: number) {
	return new Promise((resolve) => window.setTimeout(resolve, ms))
}
type SetLetterDataCallback = (data: InsuranceLetterData) => void
/** Функция обратного вызова заполнения данных модалки */
let setLetterDataCallback: SetLetterDataCallback | undefined
async function appendSetLetterDataCallback(callback: SetLetterDataCallback) {
	setLetterDataCallback = callback
	;(window as any)['setLetterDataCallback'] = callback
}

/** Обработчик нажатия на кнопку отмена */
async function handleCancelClick() {
	// TODO
}

/** Обработчик нажатия на кнопку сохранить */
async function handleSaveClick() {
	// TODO
}

/** Обработчик нажатия на кнопку сохранить Email */
async function handleSaveEmailClick() {
	// TODO
}

/** Обработчик нажатия на кнопку сохранить на бланке */
async function handleSavePaperClick() {
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
async function updateApprovalData(data: InsuranceLetterData): Promise<void> {
	// TODO
	await sleep(1000)
}

/** Получение файла согласования */
async function generateFile(): Promise<string> {
	// TODO
	await sleep(1000)

	return ''
}

/** Получение списка задач */
async function getInsuredList(
	page: number,
	sortData?: SortData
): Promise<FetchData<InsuredListData>> {
	console.log({
		page,
		sortData,
	})

	const mockData: InsuredListData = {
		fullname: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		birthdate: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		phone: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		email: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policy: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyStartDate: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyEndDate: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyTerm: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyRegion: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		policyProduct: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		plan: new ItemData({ value: 'TS00000001/23', info: 'test' }),
		moreButton: new ItemData({ value: 'Подробнее', info: 'test' }),
	}

	return {
		items: Array(20)
			.fill(0)
			.map((data, index) => {
				return {
					id: String(index),
					data: new InsuredListData(mockData),
				}
			}),
		hasMore: true,
	}
}

export default {
	appendSetLetterDataCallback,
	handleCancelClick,
	handleVerbalClick,
	handleEmailClick,
	handlePaperClick,
	generateEmailText,
	updateApprovalData,
	generateFile,
	handleSaveClick,

	getInsuredList,

	handleSaveEmailClick,
	handleSavePaperClick,
}
