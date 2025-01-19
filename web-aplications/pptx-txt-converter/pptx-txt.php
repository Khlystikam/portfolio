<?php
// Предварительно нужно установить библиотеку для php PhpPresentation

require 'vendor/autoload.php'; // Подключение Composer Autoloader
use PhpOffice\PhpPresentation\IOFactory;

// Разрешаем доступ с вашего фронтенда
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Если это preflight запрос (OPTIONS), сразу возвращаем статус 200
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Папки для загрузки и сохранения файлов
$uploadDirectory = "uploads/";
$outputDir = "output/";
$zipFile = "/var/www/html/php/pptx-txt/text_files.zip"; // Абсолютный путь к архиву (поменяйте на свой, если нужно)

// Создаем папки, если они не существуют
if (!is_dir($uploadDirectory)) {
    mkdir($uploadDirectory, 0777, true);
}
if (!is_dir($outputDir)) {
    mkdir($outputDir, 0777, true);
}

// Проверяем, были ли файлы отправлены
if (isset($_FILES['pptx_files'])) {
    $files = $_FILES['pptx_files']; // Получаем массив с файлами

    // Удаляем старый архив, если он существует
    if (file_exists($zipFile)) {
        unlink($zipFile); // Удаляем файл архива
    }

    // Создаем новый ZIP архив
    $zip = new ZipArchive();
    if ($zip->open($zipFile, ZipArchive::CREATE) !== TRUE) {
        echo json_encode(['error' => 'Не удалось открыть архив для записи.']);
        exit();
    }

    // Проходим по каждому файлу
    foreach ($files['name'] as $key => $fileName) {
        // Проверяем на наличие ошибок при загрузке
        if ($files['error'][$key] === UPLOAD_ERR_OK) {
            $tmpName = $files['tmp_name'][$key]; // Временный файл

            // Генерируем имя для текстового файла
            $txtFileName = pathinfo($fileName, PATHINFO_FILENAME) . ".txt";
            $txtFilePath = $outputDir . $txtFileName;

            try {
                // Загружаем PPTX файл
                $pptReader = IOFactory::createReader('PowerPoint2007');
                $presentation = $pptReader->load($tmpName);

                // Извлекаем текст из каждого слайда
                $textContent = "";
                $slideIndex = 1; // Счётчик слайдов
                foreach ($presentation->getAllSlides() as $slide) {
                    $slideText = "Слайд $slideIndex:" . PHP_EOL; // Добавляем заголовок для слайда
                    foreach ($slide->getShapeCollection() as $shape) {
                        try {
                            // Проверяем, является ли shape текстовым
                            if ($shape instanceof \PhpOffice\PhpPresentation\Shape\RichText) {
                                $slideText .= $shape->getPlainText() . PHP_EOL;
                            }
                        } catch (\Exception $e) {
                            // Игнорируем ошибки обработки отдельных элементов
                            continue;
                        }
                    }
                    $textContent .= $slideText . PHP_EOL; // Добавляем перенос строки между слайдами
                    $slideIndex++;
                }

                // Записываем текст в .txt файл
                file_put_contents($txtFilePath, $textContent);

                // Добавляем .txt файл в ZIP архив
                $zip->addFile($txtFilePath, $txtFileName);
            } catch (Exception $e) {
                echo json_encode(['error' => "Ошибка обработки файла $fileName: " . $e->getMessage()]);
                exit();
            }
        }
    }

    // Закрываем архив
    $zip->close();

    // Удаляем все файлы в папке uploads
    deleteFilesInDirectory($uploadDirectory);

    // Удаляем все файлы в папке output
    deleteFilesInDirectory($outputDir);

    // Возвращаем ссылку на архив
    echo json_encode(['downloadUrl' => "Ваш хостинг/php/pptx-txt/text_files.zip"]);
} else {
    echo json_encode(['error' => 'Файлы не были загружены.']);
}

// Функция для удаления только файлов в директории, но не самой директории
function deleteFilesInDirectory($dir) {
    if (is_dir($dir)) {
        $files = array_diff(scandir($dir), array('.', '..'));
        foreach ($files as $file) {
            $filePath = $dir . DIRECTORY_SEPARATOR . $file;
            if (is_dir($filePath)) {
                deleteFilesInDirectory($filePath);
                rmdir($filePath); // Удаляем вложенные папки
            } else {
                unlink($filePath); // Удаляем файл
            }
        }
    }
}
?>
