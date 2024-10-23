import React, { useEffect, useState } from 'react';
import CustomList from '../../../UIKit/CustomList/CustomList';
import { ItemData, ListColumnData } from '../../../UIKit/CustomList/CustomListTypes';
import Scripts from '../../shared/utils/clientScripts';
import { SelectTaskFilters, selectTaskContext } from '../../stores/SelectTaskContext';
import { SelectTaskData } from '../../shared/types';
import utils from '../../shared/utils/utils';

interface SelectTaskListProps {
	/** Ширина списка */
	width: number;
}

/** Фильтры формы отбра задач */
export default function SelectTaskList({ width }: SelectTaskListProps) {
	const { data, setValue } = selectTaskContext.useContext();

	useEffect(() => { data.onClickSearch() }, [data.onClickSearch])

	/** Установка обработчика нажатия на поиск */
	const setSearchHandler = (callback: () => void) => {
		console.log("setSearchHandler")
		setValue("onClickSearch", callback)
	}

	/** Обработчик нажатия на номер задачи */
	const onClickTaskNumber = async (props: ItemData) => {
		const taskId = props.info;
		if (!taskId) return
		// Установка обращения
		const requestId = await Scripts.getRequestIdByTaskId(taskId)
		utils.setRequest(requestId)

		localStorage.setItem("taskId", taskId);

		// Переход
		const link = await Scripts.getRequestLink()
		utils.redirectSPA(link)
	}

	/** Обработчик нажатия на номер обращения */
	const onClickRequest = async (props: ItemData) => {
		const requestId = props.info;
		if (!requestId) return
		// Установка обращения
		utils.setRequest(requestId)

		// Переход
		const link = await Scripts.getRequestLink()
		utils.redirectSPA(link)
	}

	// Вычислить количество отобранных элементов
	useEffect(() => {
		Scripts.getTasksCount(data.filters).then(count => setValue("elementsCount", count))
	}, [])

	/** Доступ к поиску */
	const searchAccess = Scripts.getSelectTaskAccessSettings().searchButton == 2;

	/** Колонки списка */
	const columns = [
		new ListColumnData({ name: data.filters.number.fieldName, code: data.filters.number.fieldCode, fr: 1, isSortable: searchAccess, isLink: true, onClick: onClickTaskNumber }),
		new ListColumnData({ name: data.filters.status.fieldName, code: data.filters.status.fieldCode, fr: 1, isSortable: searchAccess }),
		new ListColumnData({ name: data.filters.type.fieldName, code: data.filters.type.fieldCode, fr: 1, isSortable: searchAccess }),
		new ListColumnData({ name: data.filters.sort.fieldName, code: data.filters.sort.fieldCode, fr: 1, isSortable: searchAccess }),
		new ListColumnData({ name: data.filters.createdAt.fieldName, code: data.filters.createdAt.fieldCode, fr: 1, isSortable: searchAccess }),
		new ListColumnData({ name: data.filters.controledAt.fieldName, code: data.filters.controledAt.fieldCode, fr: 1, isSortable: searchAccess }),
		new ListColumnData({ name: data.filters.author.fieldName, code: data.filters.author.fieldCode, fr: 1, isSortable: searchAccess }),
		new ListColumnData({ name: data.filters.executor.fieldName, code: data.filters.executor.fieldCode, fr: 1, isSortable: searchAccess }),
		new ListColumnData({ name: data.filters.request.fieldName, code: data.filters.request.fieldCode, fr: 1, isSortable: searchAccess, isLink: true, onClick: onClickRequest }),
	]

	return (
		<div className="select-task-list">
			<CustomList<SelectTaskFilters, SelectTaskData> setSearchHandler={setSearchHandler} searchData={data.filters} columnsSettings={columns} getDataHandler={Scripts.getTasks} height='70vh' listWidth={width} />
		</div>
	)
}