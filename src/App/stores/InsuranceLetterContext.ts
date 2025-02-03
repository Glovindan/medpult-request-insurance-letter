import { ApprovalForm } from '../shared/types'
import { initGlobalContext } from './GlobalContext'

/** Данные гарантийного письма */
export class InsuranceLetterData {
	/** Тело файла */
	fileSrc: string
	/** Дата с */
	dateFrom: string
	/** Дата по */
	dateTo: string
	/** Срок действия полиса */
	policyEndDate: string
	/** Идентификаторы застрахованных */
	contractorsIds: string[]
	/** Является коллективным */
	isCollective: boolean
	/** Форма согалсования */
	form: ApprovalForm

	constructor() {
		this.fileSrc = ''
		this.dateFrom = ''
		this.dateTo = ''
		this.policyEndDate = ''
		this.contractorsIds = []
		this.isCollective = false
		this.form = ApprovalForm.verbal
	}
}

/** Данные контекста гарантийного письма */
export class InsuranceLetterContext {
	/** Тело файла */
	insuranceLetter: InsuranceLetterData
	/** Показывать модалку письма в форме бланка */
	isShowPaperModal: boolean
	/** Показывать модалку письма в форме email */
	isShowEmailModal: boolean

	constructor() {
		this.insuranceLetter = new InsuranceLetterData()
	}
}

export const insuranceLetterContext = initGlobalContext<InsuranceLetterContext>(
	new InsuranceLetterContext()
)
