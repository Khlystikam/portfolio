<?php
header("Access-Control-Allow-Origin: *"); // Разрешаем запросы с локального фронта
header("Access-Control-Allow-Methods: GET, POST, OPTIONS"); // Разрешаем методы
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Разрешаем заголовки

require 'vendor/autoload.php'; // Подключаем автозагрузку Composer

use Smalot\PdfParser\Parser;
use PhpOffice\PhpWord\IOFactory;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_FILES['file']) || !isset($_POST['keywords'])) {
        echo json_encode(['result' => 'Файл и ключевые слова обязательны.'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    $fileTmpPath = $_FILES['file']['tmp_name'];
    $keywords = $_POST['keywords'];
    $keywordList = array_filter(array_map('trim', explode(';', $keywords)));

    if (empty($keywordList)) {
        echo json_encode(['result' => 'Список ключевых слов пуст.'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    // Определяем тип файла
    $fileType = mime_content_type($fileTmpPath);
    $fileContent = '';

    if ($fileType === 'text/plain') {
        $fileContent = file_get_contents($fileTmpPath);
        $encoding = mb_detect_encoding($fileContent, ['UTF-8', 'Windows-1251', 'ISO-8859-1', 'KOI8-R'], true);
        if ($encoding !== 'UTF-8') {
            $fileContent = mb_convert_encoding($fileContent, 'UTF-8', $encoding);
        }
    } elseif ($fileType === 'application/pdf') {
        $parser = new Parser();
        $pdf = $parser->parseFile($fileTmpPath);
        $fileContent = $pdf->getText();
    } elseif ($fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        $phpWord = IOFactory::load($fileTmpPath);
        foreach ($phpWord->getSections() as $section) {
            foreach ($section->getElements() as $element) {
                if (method_exists($element, 'getText')) {
                    $fileContent .= $element->getText();
                }
            }
        }
    } else {
        echo json_encode(['result' => 'Формат файла не поддерживается.'], JSON_UNESCAPED_UNICODE);
        exit;
    }

    // Разбиваем текст на предложения
    $sentences = preg_split('/(?<=[.!?])\s+/', $fileContent, -1, PREG_SPLIT_NO_EMPTY);
    $matches = [];

    foreach ($sentences as $sentence) {
        $foundWords = [];

        foreach ($keywordList as $keyword) {
            $pattern = '/(.{0,15})(' . preg_quote($keyword, '/') . ')(.{0,15})/ui';
            if (preg_match_all($pattern, $sentence, $matchesData, PREG_SET_ORDER)) {
                foreach ($matchesData as $match) {
                    $foundWords[] = $match[1] . $match[2] . $match[3] . "\n"; // Добавлен перенос строки
                }
            }
        }

        if (!empty($foundWords)) {
            $matches[] = implode("\n", $foundWords); // Разделяем найденные отрывки переносами строк
        }
    }

    echo json_encode(['result' => implode("\n\n", $matches)], JSON_UNESCAPED_UNICODE);
}
?>
