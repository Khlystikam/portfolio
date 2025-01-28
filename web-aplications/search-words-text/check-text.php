<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_FILES['file']) || !isset($_POST['keywords'])) {
        echo json_encode(['result' => 'Файл и ключевые слова обязательны.']);
        exit;
    }

    $fileTmpPath = $_FILES['file']['tmp_name'];
    $keywords = $_POST['keywords'];
    $keywordList = array_map('trim', explode(';', $keywords));

    if (empty($keywordList)) {
        echo json_encode(['result' => 'Список ключевых слов пуст.']);
        exit;
    }

    $fileContent = '';

    $fileType = mime_content_type($fileTmpPath);
    if ($fileType === 'text/plain') {
        $fileContent = file_get_contents($fileTmpPath);
    } elseif ($fileType === 'application/pdf') {
        echo json_encode(['result' => 'Поддержка PDF временно недоступна.']);
        exit;
    } elseif (strpos($fileType, 'word') !== false) {
        echo json_encode(['result' => 'Поддержка Word временно недоступна.']);
        exit;
    } else {
        echo json_encode(['result' => 'Формат файла не поддерживается.']);
        exit;
    }

    $matches = [];
    foreach ($keywordList as $keyword) {
        $pattern = '/(.{0,5})(' . preg_quote($keyword, '/') . ')(.{0,5})/iu';
        if (preg_match_all($pattern, $fileContent, $matchesData, PREG_SET_ORDER)) {
            foreach ($matchesData as $match) {
                $matches[] = $match[1] . $match[2] . $match[3];
            }
        }
    }

    echo json_encode(['result' => $matches]);
}
?>
