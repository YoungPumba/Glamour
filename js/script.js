document.addEventListener('DOMContentLoaded', function () {
    const treatments = document.querySelectorAll('.treatment');

    // Przechowywanie opisów w kodzie JS
    const tooltipsData = {
        'STRZYŻENIE DAMSKIE': 'Usługa obejmuje konsultację fryzjerską, mycie włosów, profesjonalne cięcie dopasowane do kształtu twarzy oraz modelowanie końcowe. Strzyżenie wykonywane jest przez doświadczonych fryzjerów z uwzględnieniem indywidualnych potrzeb klientki. Pracujemy zarówno na włosach krótkich, półdługich, jak i długich.',
        'STRZYŻENIE NOŻYCZKAMI NA GORĄCO': 'Usługa "strzyżenie nożyczkami na gorąco" to innowacyjna metoda cięcia włosów przy użyciu specjalnych nożyczek nagrzewających się do odpowiedniej temperatury. Dzięki temu podczas strzyżenia końcówki włosów są jednocześnie zamykane, co zapobiega ich rozdwajaniu i utracie wilgoci. Efektem jest zdrowszy wygląd włosów, większy połysk oraz lepsza odporność na uszkodzenia. Idealna usługa dla osób z włosami suchymi, łamliwymi lub podatnymi na rozdwajanie.',
        'MYCIE WŁOSÓW': 'Delikatne oczyszczenie włosów i skóry głowy z wykorzystaniem profesjonalnych kosmetyków dopasowanych do potrzeb klienta. To także chwila relaksu przed dalszymi etapami stylizacji.',
        'MODELOWANIE': 'Stylizacja włosów przy użyciu szczotek, suszarki lub innych narzędzi, nadająca fryzurze pożądany kształt i objętość – idealne na co dzień i na specjalne okazje.',
        'KOLORYZACJA ODROSTÓW': 'Precyzyjne pokrycie odrostów kolorem dopasowanym do reszty włosów, zapewniające świeży i spójny wygląd fryzury.',
        'TONOWANIE': 'Zabieg nadający włosom odpowiedni odcień i blask, idealny po rozjaśnianiu lub koloryzacji, by wyrównać ton lub zneutralizować niechciane refleksy.',
        'PASEMKA': 'Rozświetlenie fryzury cienkimi pasemkami w wybranym kolorze, nadające włosom lekkości, głębi i naturalnego efektu.',
        'BALEJAŻ': 'Subtelna koloryzacja włosów w kilku odcieniach, tworząca wielowymiarowy, rozświetlony efekt – idealna dla osób szukających naturalnego wyglądu z nutą świeżości.',
        'BOTOKS': 'Zabieg intensywnej regeneracji, który odżywia, wygładza i wzmacnia włosy dzięki składnikom aktywnym zamykanym wewnątrz włókna włosa.',
        'NANOPLASTIA': 'Innowacyjna metoda trwałego prostowania włosów bez użycia szkodliwych chemikaliów. Włosy stają się gładkie, lśniące i bardziej odporne na puszenie.',
        'KERATYNOWE PROSTOWANIE': 'Profesjonalny zabieg wygładzający, który dzięki keratynie regeneruje włosy, nadając im prostą, jedwabistą strukturę i wyjątkowy połysk.',
        'TRWAŁA': 'Zabieg zmieniający strukturę włosa, umożliwiający uzyskanie trwałych loków lub fal – idealny dla osób pragnących długotrwałej objętości i sprężystości.',
        'UPIĘCIE': 'Profesjonalne uczesanie na specjalne okazje – od romantycznych splotów po eleganckie koki, dopasowane do stylizacji i charakteru wydarzenia.',
        'FALE': 'Stylowe podkręcenie włosów w formie luźnych fal – doskonałe na co dzień i na większe wyjścia, nadające fryzurze lekkości i kobiecego uroku.',
        'STRZYŻENIE MĘSKIE': 'Nowoczesne lub klasyczne cięcie dostosowane do kształtu twarzy i typu włosów, z precyzyjnym wykończeniem i stylizacją.',
        'BRODA': 'Stylizacja, konturowanie i pielęgnacja brody – dla zadbanego, męskiego wyglądu. Dopasowanie kształtu zarostu do rysów twarzy.',
        'RETUSZ SIWYCH WŁOSÓW': 'Szybkie i dyskretne pokrycie siwych włosów, bez efektu „farbowania” – idealne rozwiązanie dla osób ceniących naturalny wygląd.',
        'STRZYŻENIE DZIECIĘCE': 'Delikatne i szybkie cięcie w przyjaznej atmosferze – dopasowane do wieku dziecka, jego urody i preferencji rodziców.',
        'SAUNA': 'Zabieg pielęgnacyjny z użyciem ciepła, który otwiera łuski włosa, umożliwiając wchłonięcie składników regenerujących i odżywczych.',
        'REGENERACJA': 'Głębokie odżywienie i odbudowa struktury włosa przy użyciu profesjonalnych preparatów – włosy stają się miękkie, lśniące i bardziej odporne na zniszczenia.'
    };

    treatments.forEach(function (treatment) {
        // Tworzymy element tooltip
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        treatment.appendChild(tooltip);

        // Pobieramy tekst z tekstu wewnętrznego elementu
        const treatmentName = treatment.textContent.trim();

        // Sprawdzamy czy dla danego zabiegu mamy przypisany opis w JS
        if (tooltipsData[treatmentName]) {
            // Obsługuje pojawianie się tooltipa
            treatment.addEventListener('mouseenter', function () {
                tooltip.textContent = tooltipsData[treatmentName]; // Ustawiamy tekst z JS
                tooltip.style.opacity = 1;
                tooltip.style.visibility = 'visible';
            });

            // Obsługuje znikanie tooltipa
            treatment.addEventListener('mouseleave', function () {
                tooltip.style.opacity = 0;
                tooltip.style.visibility = 'hidden';
            });
        }
    });
});

const scrollContainer = document.querySelector('.gallery__scroll');
const items = document.querySelectorAll('.gallery__scroll__item');
let currentIndex = 0;
const delay = 10000; // Przerwa w milisekundach (2 sekundy)

function scrollToNextItem() {
    if (currentIndex >= items.length) {
        currentIndex = 0; // Wracamy na początek po dotarciu do końca
    }

    const nextItem = items[currentIndex];
    scrollContainer.scrollTo({
        left: nextItem.offsetLeft, 
        behavior: 'smooth' // Płynne przewijanie
    });

    currentIndex++; // Przechodzimy do kolejnego elementu
    setTimeout(scrollToNextItem, delay); // Odczekujemy i ponawiamy
}

// Uruchamiamy automatyczne przewijanie
setTimeout(scrollToNextItem, delay);
