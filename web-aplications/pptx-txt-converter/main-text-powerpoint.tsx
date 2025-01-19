import React, { useState } from 'react';
import './main-text-powerpoint.css';

const MainTextPowerpoint: React.FC = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFiles(Array.from(e.target.files)); // Преобразуем список файлов в массив
        }
    };

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData();
        files.forEach(file => {
            formData.append('pptx_files[]', file);
        });

        try {
            const response = await fetch('/php/pptx-txt/pptx-api.php', {
                method: 'POST',
                body: formData,
            });

            const data = await response.json(); // Обработка JSON-ответа

            if (data.error) {
                console.error('Ошибка:', data.error);
                alert(data.error); // Показываем сообщение об ошибке пользователю
            } else if (data.downloadUrl) {
                setDownloadUrl(data.downloadUrl); // Сохраняем ссылку для скачивания
            }
        } catch (error) {
            console.error('Ошибка сети:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = () => {
        if (downloadUrl) {
            // Открытие ссылки в новом окне браузера
            window.open(downloadUrl, '_blank');
        }
    };

    return (
        <form
            onSubmit={handleFormSubmit}
            encType="multipart/form-data"
        >
            <div className="main-text-powerpoint-container">
                <h2>Здесь можно извлечь текст из презентаций PowerPoint и сохранить его в текстовый файл.</h2>

                <div className="main-text-powerpoint-dropzone-container">
                    <p className="dropzone-container-p">Перетащите файлы сюда или нажмите, чтобы выбрать файлы.</p>
                    <input
                        className="main-text-powerpoint-dropzone"
                        type="file"
                        name="pptx_files[]"
                        accept=".pptx"
                        onChange={handleFileInput}
                        id="fileInput"
                        placeholder="Перетащите файлы сюда или нажмите, чтобы выбрать файлы."
                        multiple
                    />
                    {files.length > 0 && (
                        files.length < 14 ? (
                            <ul className="dropzone-container-name-file">
                                {files.map((file, index) => (
                                    <li key={index} className="dropzone-container-p-name-file">
                                        Выбран файл: {file.name}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="dropzone-container-p-name-file-count">
                                Выбрано количество файлов: {files.length}
                            </p>
                        )
                    )}
                </div>

                <button
                    className="main-text-powerpoint-button"
                    type="submit"
                    disabled={isLoading}
                >
                    {isLoading ? 'Обрабатываем файлы...' : 'Загрузить файлы'}
                </button>

                {downloadUrl && (
                    <button
                        className="main-text-powerpoint-button"
                        type="button"
                        onClick={handleDownload}
                    >
                        Скачать txt файлы
                    </button>
                )}
            </div>
        </form>
    );
};

export default MainTextPowerpoint;
