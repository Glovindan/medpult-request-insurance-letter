import { initGlobalContext } from './GlobalContext'

/** Данные гарантийного письма */
export class InsuranceLetterData {
	/** Тело файла */
	fileSrc: string
	/** Дата с */
	dateFrom: string
	/** Дата по */
	dateTo: string

	constructor() {
		this.fileSrc = ''
		this.dateFrom = ''
		this.dateTo = ''
	}
}

/** Данные контекста гарантийного письма */
export class InsuranceLetterContext {
	/** Тело файла */
	insuranceLetter: InsuranceLetterData

	constructor() {
		this.insuranceLetter = new InsuranceLetterData()
	}
}

export const insuranceLetterContext = initGlobalContext<InsuranceLetterContext>(
	new InsuranceLetterContext()
)