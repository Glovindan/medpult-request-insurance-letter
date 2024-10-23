import React, { useEffect, useRef, useState } from 'react';

interface FileViewerProps {
	/** Тело файла */
	src?: string;
}

/** Валидация тела файла */
const validateFileViewerBody = (body: string): boolean => {
	return Boolean(body.match(/data:application\/pdf;base64,.*$/gm));
}

/** Просмотр файла */
export default function FileViewer({ src }: FileViewerProps) {
	return (
		<div className='file-viewer'>
			<iframe id="pdfViewer" src={src && validateFileViewerBody(src) ? src : ""} allowFullScreen={true}></iframe>
		</div>
	)
}