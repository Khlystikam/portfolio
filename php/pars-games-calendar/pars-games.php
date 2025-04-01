<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

header('Content-Type: application/json; charset=utf-8');

// Функция для парсинга данных
function newsDataFunction() {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // URL для парсинга
    $url = 'https://stopgame.ru/games/dates';

    // Инициализация cURL
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $html = curl_exec($ch);
    curl_close($ch);

    // Проверка на ошибки
    if (!$html) {
        return ['error' => 'Не удалось загрузить данные с сайта'];
    }

    // Парсинг HTML через DOMDocument
    $doc = new DOMDocument();
    libxml_use_internal_errors(true);
    $doc->loadHTML($html);
    libxml_clear_errors();

    $xpath = new DOMXPath($doc);

    // XPath-запросы
    $titleMonth = $xpath->query("//button[contains(@class, '_month-widget__month_1ylry_1')]")->item(0)->nodeValue ?? 'Неизвестный месяц';
    $gamesNodes = $xpath->query("//article[contains(@class, '_game_1ylry_300')]");

    $games = [];
    foreach ($gamesNodes as $node) {
        // $test = $xpath->query(".//a[contains(@class, '_game__small-poster_1ylry_607')]//picture//img", $node);

        $imgNode = $xpath->query(".//a[contains(@class, '_game__small-poster_1ylry_607')]//picture//img", $node);
        $imgSrc = $imgNode->item(0)->getAttribute('src') ?? '';

        $link = $xpath->query(".//div[contains(@class, '_game__info_1ylry_313')]//a", $node);
        $nameGame = $xpath->query(".//div[contains(@class, '_game__info_1ylry_313')]//h2", $node);
        $platform = $xpath->query(".//div[contains(@class, '_game__info_1ylry_313')]//p[contains(@class, '_game__platforms_1ylry_534')]", $node);
        $date = $xpath->query(".//div[contains(@class, '_game__info_1ylry_313')]//div[contains(@class, '_game__footer--left_1ylry_1')]//span[2]", $node);

        $stopMonth = trim($date->item(0)->nodeValue ?? '');

        if (strlen($stopMonth) !== 4) {
            $games[] = [
                'link' => "https://stopgame.ru" . trim($link->item(0)->getAttribute('href') ?? ''),
                'image' => $imgSrc,
                'nameGame' => trim($nameGame->item(0)->nodeValue ?? ''),
                'platform' => trim($platform->item(0)->nodeValue ?? ''),
                'date' => trim($date->item(0)->nodeValue ?? ''),
            ];
        }
    }

    return [
        'month' => trim($titleMonth),
        'games' => $games
    ];
}

// Вывод результата в формате JSON
$data = newsDataFunction();
echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

?>
