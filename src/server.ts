export type Map = {
  url: string;
  entries: Entry[];
};

export type Entry = {
  title: string;
  description: string;
  images: string[];

  markerX: number;
  markerY: number;
};

export const maps: Map[] = [
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/1/17/BlankMap-World-noborders.png",
    entries: [
      {
        title: "Северная Америка",
        description:
          "Се́верная Аме́рика (англ. North America, фр. Amérique du Nord, исп. América del Norte, Norteamérica, аст. Ixachitlān Mictlāmpa) — один из шести материков планеты Земля, расположенный на севере Западного полушария Земли, занимающий 1/6 часть суши и имеющий большее количество островов. Площадь материковой Северной Америки — 20 360 000 км², а с учётом островов — 24 365 000 км²[1][2][3]. К островам Северной Америки относятся Гренландия, Канадский Арктический архипелаг, Вест-Индия, Алеутские острова и другие. Население Северной Америки составляет ~579 млн человек, что составляет 7 % от населения мира. В пределах материка часто выделяют Североамериканский регион, объединяющий США, Канаду, Гренландию, Сен-Пьер и Микелон и Бермуды. Северная Америка, как и Австралия, является материком, где нет стран без выхода к морю.",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/4/43/Location_North_America.svg",
        ],
        markerX: 150,
        markerY: 170,
      },
      {
        title: "Евра́зия",
        description:
          "Евра́зия — крупнейший из шести материков на Земле. Площадь — 53,6 млн км²[2], что составляет 36 % площади суши. Население — 5,349 млрд чел. (1 июл. 2019 г.)[1], что составляет более 70 % населения планеты[3]. Примерно 2/3 населения и территории материка приходится на страны Шанхайской организации сотрудничества. ",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/3/30/Eurasia_%28orthographic_projection%29.svg",
        ],
        markerX: 840,
        markerY: 100,
      },
      {
        title: "А́фрика",
        description:
          "А́фрика — второй по площади материк после Евразии, омывается Средиземным морем с севера, Красным — с северо-востока, Атлантическим океаном с запада и Индийским океаном с востока, и обоими океанами с юга, с разделением по 20° в. д. Африкой называется также часть света, состоящая из материка Африка и прилегающих островов. Площадь Африки без островов составляет 29,2 млн км², с островами — около 30,3 млн км²[3], покрывая, таким образом, 6 % общей площади поверхности Земли и 20,4 % поверхности суши. По площади Африка на 32 % меньше Азии и Америки, являясь после них третьей по величине частью света. На территории Африки расположено 55 государств (включая зависимые территории). Население составляет 1,46 млрд чел. (7 декабря 2023 года; 18,2 % населения Земли) и, таким образом, сравнимо с самыми населёнными государствами мира — Китаем и Индией. Африка считается прародиной человечества: именно здесь нашли самые древние останки рода Homo и вида Homo sapiens, и его вероятных предков, включая сахелантропов, Australopithecus africanus, A. afarensis, Homo erectus, H. habilis и H. ergaster. Африканский континент пересекает экватор и имеет много климатических зон; это единственный континент, протянувшийся от северного субтропического климатического пояса до южного субтропического. Из-за недостатка постоянных осадков и орошения — равно как ледников или водоносного горизонта горных систем — естественного регулирования климата нигде, кроме побережий, практически не наблюдается. ",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/8/86/Africa_%28orthographic_projection%29.svg",
        ],
        markerX: 635,
        markerY: 300,
      },
      {
        title: "Австралия",
        description:
          "Австра́лия[8] (англ. Australia, МФА: [əˈstreɪljə], от лат. austrālis — «южный»), официальная форма — Австрали́йский Сою́з[9], или Содру́жество Австра́лии (англ. Commonwealth of Australia[10], МФА: [ˈkɒm.ənˌwɛlθ əv əˈstreɪljə]) — государство в Южном полушарии, занимающее одноимённый материк, остров Тасмания и несколько других островов Индийского и Тихого океанов[a]; является шестым государством по площади в мире. К северу от Австралийского Союза расположены Восточный Тимор, Индонезия и Папуа — Новая Гвинея, к северо-востоку — Вануату, Новая Каледония и Соломоновы Острова, к юго-востоку — Новая Зеландия. От главного острова Папуа — Новой Гвинеи материковая часть Австралийского Союза отделена Торресовым проливом минимальной шириной около 150 км[12], а расстояние от австралийского острова Боигу до Папуа — Новой Гвинеи составляет около 5 километров[13]. Население на 30 июня 2023 года оценивалось в 26 638 544 человека, большинство из которых проживает в городах на восточном побережье[14]. Австралия является одной из самых развитых стран мира, будучи четырнадцатой по размеру экономикой в мире, и имеет девятое место в мире по ВВП в расчёте на душу населения. Военные расходы Австралии являются двенадцатыми по размеру в мире. С пятым по величине индексом человеческого развития Австралия занимает высокое место во многих сферах, таких как качество жизни, здоровье, образование, экономическая свобода, защита гражданских свобод и политических прав[15]. Австралия является членом G20, ОЭСР, ВТО, АТЭС, ООН, Содружества наций, АНЗЮСа, АУКУСа и Форума тихоокеанских островов. ",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/d/da/Australia_with_AAT_%28orthographic_projection%29.svg",
        ],
        markerX: 1080,
        markerY: 460,
      },
      {
        title: "Южная Америка",
        description:
          "Ю́жная Аме́рика — один из шести материков планеты Земля, расположенный на юге Западного полушария. Омывается на западе Тихим океаном, на востоке — Атлантическим, на севере — Карибским морем, которое является естественным рубежом между двумя Америками. Панамский перешеек на северо-западе материка соединяет Южную Америку с Северной. Оба материка составляют часть света Америка. В состав Южной Америки также входят различные острова, большинство из которых принадлежит странам континента. Страны Южной Америки, которые граничат с Карибским морем — включая Колумбию, Венесуэлу, Гайану, Суринам, Французскую Гвиану и Панаму — известны как Карибская Южная Америка. Площадь континента — 17,84 млн км² (4-е место среди континентов; по площади лишь чуть больше России), население — 438 039 139 (2021 г.) человек (4-е место среди континентов).",
        images: [
          "https://upload.wikimedia.org/wikipedia/commons/0/0f/South_America_%28orthographic_projection%29.svg",
        ],
        markerX: 320,
        markerY: 420,
      },
    ],
  },
  {
    url: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Forig11.deviantart.net%2F562f%2Ff%2F2016%2F089%2Fc%2Fb%2Fcb44bc8b275d1eafbbf7fcf13c400b7c-d9x29tt.jpg&f=1&nofb=1&ipt=0cc2a54840da7c00628d6e2af39e857f60d4fb1fd9501f9be5ba5a0752a27e8b&ipo=images",
    entries: [
      {
        title: "test",
        description: "lorem ipsum dolor sit amet",
        images: [
          "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8b%2Ffe%2F2f%2F8bfe2fc268abda981133434a4c1ec8b3.jpg&f=1&nofb=1&ipt=9efc334a3893a5aa7ab67842980a322b1b8ee13b23c277477e1f301a90a0fe2c&ipo=images",
        ],
        markerX: 20,
        markerY: 30,
      },
    ],
  },
];
