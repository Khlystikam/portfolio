import React, { useState } from "react";
import "./mainSearchWordsText.css";

const TextCheckComponent: React.FC = () => {
    const [file, setFile] = useState<File | null>(null);
    const [keywords, setKeywords] = useState<string>("");
    const [result, setResult] = useState<string>("");
    const [templates, setTemplates] = useState<{ name: string; words: string }[]>([]);
    const [newTemplateName, setNewTemplateName] = useState<string>("");
    const [placeholderInputText, setPlaceholderInputText] = useState<string>("Введите название нового шаблона");
    const [placeholderTextarea, setPlaceholderTextarea] = useState<string>("Введите слова через ;");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    const handleKeywordsChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setKeywords(e.target.value);
    };

    const handleSubmit = async () => {
        if (!file || !keywords.trim()) {
            alert("Необходимо загрузить файл и ввести слова для проверки.");
            return;
    }

    const formData = new FormData();
        formData.append("file", file);
        formData.append("keywords", keywords);

        try {
            const response = await fetch("/check-text.php", {
            method: "POST",
            body: formData,
            });

            if (!response.ok) {
            throw new Error("Ошибка при обработке запроса.");
            }

            const data = await response.json();
            setResult(data.result || "Нет совпадений.");
        } catch (error) {
            console.error("Ошибка:", error);
            setResult("Произошла ошибка при обработке запроса.");
        }
        };

        const handleTemplateSelect = (words: string) => {
        setKeywords(words);
        };

        const handleSaveTemplate = () => {
        if (!newTemplateName.trim() || !keywords.trim()) {
            alert("Введите название шаблона и слова для сохранения.");
            return;
        }

            setTemplates([...templates, { name: newTemplateName, words: keywords }]);
            setNewTemplateName("");
        };

        return (
            <div className="main-text-check-container">
                <h1 className="main-text-check-container-text-h1">
                    Дает возможность определить, содержится ли слово в списке в тексте из загруженного файла
                </h1>

                <div className="words-change-dropzone-imput">
                    <div className="words-change-dropzone-container">
                        <p className="words-change-dropzone-p">Перетащите файлы сюда или нажмите, чтобы выбрать файл</p>
                        <input
                            className="words-change-dropzone"
                            type="file"
                            accept=".doc,.docx,.pdf,.txt"
                            onChange={handleFileChange}
                        />
                        {file && (
                            <ul className="dropzone-container-name-file">
                                <li className="dropzone-container-p-name-file">
                                {`Выбран файл: ${file.name}`}
                                </li>
                            </ul>
                            )}
                    </div>

                    <textarea
                        placeholder={placeholderTextarea}
                        onFocus={() => setPlaceholderTextarea("")}
                        onBlur={(e) => {
                            if (!e.target.value) setPlaceholderTextarea("Введите слова через ;");
                        }}
                        value={keywords}
                        onChange={(e) => handleKeywordsChange(e)}
                        className="words-change-dropzone-textarea"
                    />

                    <div className="words-change-dropzone-sample">
                        <input
                            type="text"
                            placeholder={placeholderInputText}
                            onFocus={() => setPlaceholderInputText("")}
                            onBlur={(e) => {
                                if (!e.target.value) setPlaceholderInputText("Введите название нового шаблона");
                            }}
                            value={newTemplateName}
                            onChange={(e) => setNewTemplateName(e.target.value)}
                            className="words-change-sample-new-template"
                        />

                        <button
                            onClick={handleSaveTemplate}
                            className="words-change-sample-new-template-button"
                        >
                            Сохранить шаблон
                        </button>

                        <select
                            onChange={(e) => handleTemplateSelect(e.target.value)}
                            className="words-change-sample-new-template-select"
                        >
                            <option value="">Выберите шаблон</option>
                                {templates.map((template, index) => (
                                    <option key={index} value={template.words}>
                                        {template.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>


            <div className="">

            </div>

            <button
                onClick={handleSubmit}
                className="text-check-button-process"
            >
                Проверить текст
            </button>

            <div className="words-change-result">
                <h2 className="words-change-result-h2">Результат:</h2>
                <div className="words-change-result-text">{result}</div>
            </div>
        </div>
    );
};

export default TextCheckComponent;
