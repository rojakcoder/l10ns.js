(function () {
var phrase1  = "%phrase1",      //different in EN,  different in ZH
    phrase2  = "%phrase2",      //same in EN,       different in ZH
    phrase3  = "%phrase3",      //not in EN-GB,     different in ZH
    phrase4  = "%phrase4",      //not in EN,        different in ZH
    phrase5  = "%phrase5",      //not in EN both,   different in ZH
    phrase6  = "%phrase6",      //different in EN,  same in ZH
    phrase7  = "%phrase7",      //same in EN,       same in ZH
    phrase8  = "%phrase8",      //not in EN-GB,     same in ZH
    phrase9  = "%phrase9",      //not in EN,        same in ZH
    phrase10 = "%phrase10",     //not in EN both,   same in ZH
    phrase11 = "%phrase11",     //different in EN,  not in ZH-TW
    phrase12 = "%phrase12",     //same in EN,       not in ZH-TW
    phrase13 = "%phrase13",     //not in EN-GB,     not in ZH-TW
    phrase14 = "%phrase14",     //not in EN,        not in ZH-TW
    phrase15 = "%phrase15",     //not in EN both,   not in ZH-TW
    phrase16 = "%phrase16",     //different in EN,  not in ZH
    phrase17 = "%phrase17",     //same in EN,       not in ZH
    phrase18 = "%phrase18",     //not in EN-GB,     not in ZH
    phrase19 = "%phrase19",     //not in EN,        not in ZH
    phrase20 = "%phrase20",     //not in EN both,   not in ZH
    phrase21 = "%phrase21",     //different in EN,  not in ZH both
    phrase22 = "%phrase22",     //same in EN,       not in ZH botH
    phrase23 = "%phrase23",     //not in EN-GB,     not in ZH botH
    phrase24 = "%phrase24",     //not in EN,        not in ZH botH
    phrase25 = "%phrase25",     //not in EN both,   not in ZH botH
    e1enUs   = 'Peace and harmony in the neighborhood.',
    e1enGb   = 'Peace and harmony in the neighbourhood.',
    e1zhCn   = '邻里的平静与安宁。',
    e1zhTw   = '鄰里的平靜與安寧。',
    e2en     = 'There is 1 book on the shelf.',
    e2zhCn   = '书架上有一本书。',
    e2zhTw   = '書架上有一本書。',
    e3enUs   = 'For Honor & Glory.',
    e3zhCn   = '为了荣誉和荣燿。',
    e3zhTw   = '为了榮譽和榮耀。',
    e4enGb   = 'There are many colours in this painting.',
    e4zhCn   = '这幅画里有很多颜色。',
    e4zhTw   = '這幅畫裡有很多顏色。'
    e5zhCn   = '对不起我爱你。',
    e5zhTw   = '對不起我愛你。',
    e6enUs   = 'Ice cream flavor',
    e6enGb   = 'Ice cream flavour',
    e6zh     = '冰淇淋的味道',
    e7en     = 'Impossible!',
    e7zh     = '不可能！',
    e8enUs   = "Don't eat grapes.",
    e8zh     = '不吃葡萄。',
    e9enGb   = "He's not human.",
    e9zh     = '他不是人。',
    e10zh    = '乖乖的',
    e11enUs  = 'Color lovers.',
    e11enGb  = 'Colour lovers.',
    e11zhCn  = '颜色爱好者。',
    e12en    = 'Story book',
    e12zhCn  = '故事书',
    e13enUs  = 'Movie Watching',
    e13zhCn  = '看电影',
    e14enGb  = 'Songs',
    e14zhCn  = '歌曲',
    e15zhCn  = '吃豆腐',
    e16enUs  = 'Sense of humor',
    e16enGb  = 'Sense of humour',
    e16zhTw  = '幽默感',
    e17en    = 'I like to drink coffee.',
    e17zhTw  = '我喜歡喝咖啡。',
    e18enUs  = 'Leafy vegetables.',
    e18zhTw  = '綠葉蔬菜。',
    e19enGb  = 'red meat',
    e19zhTw  = '紅肉',
    e20zhTw  = '你愛打羽毛球嗎？',
    e21enUs  = 'Analog circuitry vs. Digital circuitry',
    e21enGb  = 'Analogue circuitry vs. Digital circuitry',
    e22en    = 'And the weak shall inherit the Earth.',
    e23enUs  = 'Game of Thrones',
    e24enGb  = 'Sherlock Holmes',
    e25enzh  = null;

test('4 locales (default)', function () {
    //reset to default
    String.defaultLocale = "";
    String.locale = (navigator && (navigator.language || navigator.userLanguage)) || "";
    String.toLocaleString(false);

    String.toLocaleString({
        'en': {
            '%phrase1':  'Peace and harmony in the neighborhood.',
            '%phrase2':  'There is 1 book on the shelf.',
            '%phrase3':  'For Honor & Glory.',
            '%phrase6':  'Ice cream flavor',
            '%phrase7':  'Impossible!',
            '%phrase8':  "Don't eat grapes.",
            '%phrase11': 'Color lovers.',
            '%phrase12': 'Story book',
            '%phrase13': 'Movie Watching',
            '%phrase16': 'Sense of humor',
            '%phrase17': 'I like to drink coffee.',
            '%phrase18': 'Leafy vegetables.',
            '%phrase21': 'Analog circuitry vs. Digital circuitry',
            '%phrase22': 'And the weak shall inherit the Earth.',
            '%phrase23': 'Game of Thrones'
        },
        'en-GB': {
            '%phrase1':  'Peace and harmony in the neighbourhood.',
            '%phrase2':  'There is 1 book on the shelf.',
            '%phrase4':  'There are many colours in this painting.',
            '%phrase6':  'Ice cream flavour',
            '%phrase7':  'Impossible!',
            '%phrase9':  "He's not human.",
            '%phrase11': 'Colour lovers.',
            '%phrase12': 'Story book',
            '%phrase14': 'Songs',
            '%phrase16': 'Sense of humour',
            '%phrase17': 'I like to drink coffee.',
            '%phrase19': 'red meat',
            '%phrase21': 'Analogue circuitry vs. Digital circuitry',
            '%phrase22': 'And the weak shall inherit the Earth.',
            '%phrase24': 'Sherlock Holmes'
        },
        'zh': {
            '%phrase1':  '邻里的平静与安宁。',
            '%phrase2':  '书架上有一本书。',
            '%phrase3':  '为了荣誉和荣燿。',
            '%phrase4':  '这幅画里有很多颜色。',
            '%phrase5':  '对不起我爱你。',
            '%phrase6':  '冰淇淋的味道',
            '%phrase7':  '不可能！',
            '%phrase8':  '不吃葡萄。',
            '%phrase9':  '他不是人。',
            '%phrase10': '乖乖的',
            '%phrase11': '颜色爱好者。',
            '%phrase12': '故事书',
            '%phrase13': '看电影',
            '%phrase14': '歌曲',
            '%phrase15': '吃豆腐'
        },
        'zh-TW': {
            '%phrase1':  '鄰里的平靜與安寧。',
            '%phrase2':  '書架上有一本書。',
            '%phrase3':  '为了榮譽和榮耀。',
            '%phrase4':  '這幅畫裡有很多顏色。',
            '%phrase5':  '對不起我愛你。',
            '%phrase6':  '冰淇淋的味道',
            '%phrase7':  '不可能！',
            '%phrase8':  '不吃葡萄。',
            '%phrase9':  '他不是人。',
            '%phrase10': '乖乖的',
            '%phrase16': '幽默感',
            '%phrase17': '我喜歡喝咖啡。',
            '%phrase18': '綠葉蔬菜。',
            '%phrase19': '紅肉',
            '%phrase20': '你愛打羽毛球嗎？'
        }
    });

    equal(phrase1.toLocaleString(), e1enUs,
        'phrase 1 translated as "' + e1enUs + '".');
    equal(phrase2.toLocaleString(), e2en,
        'phrase 2 translated as "' + e2en + '".');
    equal(phrase3.toLocaleString(), e3enUs,
        'phrase 3 translated as "' + e3enUs + '".');
    equal(phrase4.toLocaleString(), phrase4,
        'phrase 4 not translated - not in en (US).');
    equal(phrase5.toLocaleString(), phrase5,
        'phrase 5 not translated - not in en (both).');
    equal(phrase6.toLocaleString(), e6enUs,
        'phrase 6 translated as "' + e6enUs + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '".');
    equal(phrase9.toLocaleString(), phrase9,
        'phrase 9 not translated - not in en (US).');
    equal(phrase10.toLocaleString(), phrase10,
        'phrase 10 not translated - not in en (both).');
    equal(phrase11.toLocaleString(), e11enUs,
        'phrase 11 translated as "' + e11enUs + '".');
    equal(phrase12.toLocaleString(), e12en,
        'phrase 12 translated as "' + e12en + '".');
    equal(phrase13.toLocaleString(), e13enUs,
        'phrase 13 translated as "' + e13enUs + '".');
    equal(phrase14.toLocaleString(), phrase14,
        'phrase 14 not translated - not in en (US).');
    equal(phrase15.toLocaleString(), phrase15,
        'phrase 15 not translated - not in en (both).');
    equal(phrase16.toLocaleString(), e16enUs,
        'phrase 16 translated as "' + e16enUs + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '".');
    equal(phrase19.toLocaleString(), phrase19,
        'phrase 19 not translated - not in en (US).');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in en (both).');
    equal(phrase21.toLocaleString(), e21enUs,
        'phrase 21 translated as "' + e21enUs + '".');
    equal(phrase22.toLocaleString(), e22en,
        'phrase 22 translated as "' + e22en + '".');
    equal(phrase23.toLocaleString(), e23enUs,
        'phrase 23 translated as "' + e23enUs + '".');
    equal(phrase24.toLocaleString(), phrase24,
        'phrase 24 not translated - not in en (US).');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in en (both).');
});

test('EN specified', function () {
    String.locale = 'en';

    equal(phrase1.toLocaleString(), e1enUs,
        'phrase 1 translated as "' + e1enUs + '".');
    equal(phrase2.toLocaleString(), e2en,
        'phrase 2 translated as "' + e2en + '".');
    equal(phrase3.toLocaleString(), e3enUs,
        'phrase 3 translated as "' + e3enUs + '".');
    equal(phrase4.toLocaleString(), phrase4,
        'phrase 4 not translated - not in en (US).');
    equal(phrase5.toLocaleString(), phrase5,
        'phrase 5 not translated - not in en (both).');
    equal(phrase6.toLocaleString(), e6enUs,
        'phrase 6 translated as "' + e6enUs + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '".');
    equal(phrase9.toLocaleString(), phrase9,
        'phrase 9 not translated - not in en (US).');
    equal(phrase10.toLocaleString(), phrase10,
        'phrase 10 not translated - not in en (both).');
    equal(phrase11.toLocaleString(), e11enUs,
        'phrase 11 translated as "' + e11enUs + '".');
    equal(phrase12.toLocaleString(), e12en,
        'phrase 12 translated as "' + e12en + '".');
    equal(phrase13.toLocaleString(), e13enUs,
        'phrase 13 translated as "' + e13enUs + '".');
    equal(phrase14.toLocaleString(), phrase14,
        'phrase 14 not translated - not in en (US).');
    equal(phrase15.toLocaleString(), phrase15,
        'phrase 15 not translated - not in en (both).');
    equal(phrase16.toLocaleString(), e16enUs,
        'phrase 16 translated as "' + e16enUs + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '".');
    equal(phrase19.toLocaleString(), phrase19,
        'phrase 19 not translated - not in en (US).');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in en (both).');
    equal(phrase21.toLocaleString(), e21enUs,
        'phrase 21 translated as "' + e21enUs + '".');
    equal(phrase22.toLocaleString(), e22en,
        'phrase 22 translated as "' + e22en + '".');
    equal(phrase23.toLocaleString(), e23enUs,
        'phrase 23 translated as "' + e23enUs + '".');
    equal(phrase24.toLocaleString(), phrase24,
        'phrase 24 not translated - not in en (US).');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in en (both).');
});

test('EN-GB specified', function () {
    String.locale = 'en-GB';

    equal(phrase1.toLocaleString(), e1enGb,
        'phrase 1 translated as "' + e1enGb + '".');
    equal(phrase2.toLocaleString(), e2en,
        'phrase 2 translated as "' + e2en + '".');
    equal(phrase3.toLocaleString(), e3enUs,
        'phrase 3 translated as "' + e3enUs + '" - not in en-GB.');
    equal(phrase4.toLocaleString(), e4enGb,
        'phrase 4 translated as "' + e4enGb + '".');
    equal(phrase5.toLocaleString(), phrase5,
        'phrase 5 not translated - not in en (both).');
    equal(phrase6.toLocaleString(), e6enGb,
        'phrase 6 translated as "' + e6enGb + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '" - not in en-GB.');
    equal(phrase9.toLocaleString(), e9enGb,
        'phrase 9 translated as "' + e9enGb + '".');
    equal(phrase10.toLocaleString(), phrase10,
        'phrase 10 not translated - not in en (both).');
    equal(phrase11.toLocaleString(), e11enGb,
        'phrase 11 translated as "' + e11enGb + '".');
    equal(phrase12.toLocaleString(), e12en,
        'phrase 12 translated as "' + e12en + '".');
    equal(phrase13.toLocaleString(), e13enUs,
        'phrase 13 translated as "' + e13enUs + '" - not in en-GB.');
    equal(phrase14.toLocaleString(), e14enGb,
        'phrase 14 translated as "' + e4enGb + '".');
    equal(phrase15.toLocaleString(), phrase15,
        'phrase 15 not translated - not in en (both).');
    equal(phrase16.toLocaleString(), e16enGb,
        'phrase 16 translated as "' + e16enGb + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '" - not in en-GB.');
    equal(phrase19.toLocaleString(), e19enGb,
        'phrase 19 translated as "' + e19enGb + '".');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in en (both).');
    equal(phrase21.toLocaleString(), e21enGb,
        'phrase 21 translated as "' + e21enGb + '".');
    equal(phrase22.toLocaleString(), e22en,
        'phrase 22 translated as "' + e22en + '".');
    equal(phrase23.toLocaleString(), e23enUs,
        'phrase 23 translated as "' + e23enUs + '" - not in en-GB.');
    equal(phrase24.toLocaleString(), e24enGb,
        'phrase 24 translated as "' + e24enGb + '".');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in en (both).');
});

test('ZH specified', function () {
    String.locale = 'zh';

    equal(phrase1.toLocaleString(), e1zhCn,
        'phrase 1 translated as "' + e1zhCn + '".');
    equal(phrase2.toLocaleString(), e2zhCn,
        'phrase 2 translated as "' + e2zhCn + '".');
    equal(phrase3.toLocaleString(), e3zhCn,
        'phrase 3 translated as "' + e3zhCn + '".');
    equal(phrase4.toLocaleString(), e4zhCn,
        'phrase 4 translated as "' + e4zhCn + '".');
    equal(phrase5.toLocaleString(), e5zhCn,
        'phrase 5 translated as "' + e5zhCn + '".');
    equal(phrase6.toLocaleString(), e6zh,
        'phrase 6 translated as "' + e6zh + '".');
    equal(phrase7.toLocaleString(), e7zh,
        'phrase 7 translated as "' + e7zh + '".');
    equal(phrase8.toLocaleString(), e8zh,
        'phrase 8 translated as "' + e8zh + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 translated as "' + e9zh + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 translated as "' + e10zh + '".');
    equal(phrase11.toLocaleString(), e11zhCn,
        'phrase 11 translated as "' + e11zhCn + '".');
    equal(phrase12.toLocaleString(), e12zhCn,
        'phrase 12 translated as "' + e12zhCn + '".');
    equal(phrase13.toLocaleString(), e13zhCn,
        'phrase 13 translated as "' + e13zhCn + '".');
    equal(phrase14.toLocaleString(), e14zhCn,
        'phrase 14 translated as "' + e14zhCn + '".');
    equal(phrase15.toLocaleString(), e15zhCn,
        'phrase 15 translated as "' + e15zhCn + '".');
    equal(phrase16.toLocaleString(), phrase16,
        'phrase 16 not translated - not in zh (CN).');
    equal(phrase17.toLocaleString(), phrase17,
        'phrase 17 not translated - not in zh (CN).');
    equal(phrase18.toLocaleString(), phrase18,
        'phrase 18 not translated - not in zh (CN).');
    equal(phrase19.toLocaleString(), phrase19,
        'phrase 19 not translated - not in zh (CN).');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in zh (CN).');
    equal(phrase21.toLocaleString(), phrase21,
        'phrase 21 not translated - not in zh (both).');
    equal(phrase22.toLocaleString(), phrase22,
        'phrase 22 not translated - not in zh (both).');
    equal(phrase23.toLocaleString(), phrase23,
        'phrase 23 not translated - not in zh (both).');
    equal(phrase24.toLocaleString(), phrase24,
        'phrase 24 not translated - not in zh (both).');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in zh (both).');
});

test('ZH-TW specified', function () {
    String.locale = 'zh-TW';

    equal(phrase1.toLocaleString(), e1zhTw,
        'phrase 1 translated as "' + e1zhTw + '".');
    equal(phrase2.toLocaleString(), e2zhTw,
        'phrase 2 translated as "' + e2zhTw + '".');
    equal(phrase3.toLocaleString(), e3zhTw,
        'phrase 3 translated as "' + e3zhTw + '".');
    equal(phrase4.toLocaleString(), e4zhTw,
        'phrase 4 translated as "' + e4zhTw + '".');
    equal(phrase5.toLocaleString(), e5zhTw,
        'phrase 5 translated as "' + e5zhTw + '".');
    equal(phrase6.toLocaleString(), e6zh,
        'phrase 6 translated as "' + e6zh + '".');
    equal(phrase7.toLocaleString(), e7zh,
        'phrase 7 translated as "' + e7zh + '".');
    equal(phrase8.toLocaleString(), e8zh,
        'phrase 8 translated as "' + e8zh + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 translated as "' + e9zh + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 translated as "' + e10zh + '".');
    equal(phrase11.toLocaleString(), e11zhCn,
        'phrase 11 translated as "' + e11zhCn + '" - not in zh-TW.');
    equal(phrase12.toLocaleString(), e12zhCn,
        'phrase 12 translated as "' + e12zhCn + '" - not in zh-TW.');
    equal(phrase13.toLocaleString(), e13zhCn,
        'phrase 13 translated as "' + e13zhCn + '" - not in zh-TW.');
    equal(phrase14.toLocaleString(), e14zhCn,
        'phrase 14 translated as "' + e14zhCn + '" - not in zh-TW.');
    equal(phrase15.toLocaleString(), e15zhCn,
        'phrase 15 translated as "' + e15zhCn + '" - not in zh-TW.');
    equal(phrase16.toLocaleString(), e16zhTw,
        'phrase 16 translated as "' + e16zhTw + '".');
    equal(phrase17.toLocaleString(), e17zhTw,
        'phrase 17 translated as "' + e17zhTw + '".');
    equal(phrase18.toLocaleString(), e18zhTw,
        'phrase 18 translated as "' + e18zhTw + '".');
    equal(phrase19.toLocaleString(), e19zhTw,
        'phrase 19 translated as "' + e19zhTw + '".');
    equal(phrase20.toLocaleString(), e20zhTw,
        'phrase 20 translated as "' + e20zhTw + '".');
    equal(phrase21.toLocaleString(), phrase21,
        'phrase 21 not translated - not in zh (both).');
    equal(phrase22.toLocaleString(), phrase22,
        'phrase 22 not translated - not in zh (both).');
    equal(phrase23.toLocaleString(), phrase23,
        'phrase 23 not translated - not in zh (both).');
    equal(phrase24.toLocaleString(), phrase24,
        'phrase 24 not translated - not in zh (both).');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in zh (both).');
});

test('ZH specified, EN default', function () {
    String.defaultLocale = 'en';
    String.locale = 'zh';

    equal(phrase1.toLocaleString(), e1zhCn,
        'phrase 1 translated as "' + e1zhCn + '".');
    equal(phrase2.toLocaleString(), e2zhCn,
        'phrase 2 translated as "' + e2zhCn + '".');
    equal(phrase3.toLocaleString(), e3zhCn,
        'phrase 3 translated as "' + e3zhCn + '".');
    equal(phrase4.toLocaleString(), e4zhCn,
        'phrase 4 translated as "' + e4zhCn + '".');
    equal(phrase5.toLocaleString(), e5zhCn,
        'phrase 5 translated as "' + e5zhCn + '".');
    equal(phrase6.toLocaleString(), e6zh,
        'phrase 6 translated as "' + e6zh + '".');
    equal(phrase7.toLocaleString(), e7zh,
        'phrase 7 translated as "' + e7zh + '".');
    equal(phrase8.toLocaleString(), e8zh,
        'phrase 8 translated as "' + e8zh + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 translated as "' + e9zh + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 translated as "' + e10zh + '".');
    equal(phrase11.toLocaleString(), e11zhCn,
        'phrase 11 translated as "' + e11zhCn + '".');
    equal(phrase12.toLocaleString(), e12zhCn,
        'phrase 12 translated as "' + e12zhCn + '".');
    equal(phrase13.toLocaleString(), e13zhCn,
        'phrase 13 translated as "' + e13zhCn + '".');
    equal(phrase14.toLocaleString(), e14zhCn,
        'phrase 14 translated as "' + e14zhCn + '".');
    equal(phrase15.toLocaleString(), e15zhCn,
        'phrase 15 translated as "' + e15zhCn + '".');
    equal(phrase16.toLocaleString(), e16enUs,
        'phrase 16 not translated - fallback to en "' + e16enUs +'".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 not translated - fallback to en "' + e17en +'".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 not translated - fallback to en "' + e18enUs +'".');
    equal(phrase19.toLocaleString(), phrase19,
        'phrase 19 not translated - not in zh & en.');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in zh &amp; en.');
    equal(phrase21.toLocaleString(), e21enUs,
        'phrase 21 not translated - fallback to en "' + e21enUs +'".');
    equal(phrase22.toLocaleString(), e22en,
        'phrase 22 not translated - fallback to en "' + e22en +'".');
    equal(phrase23.toLocaleString(), e23enUs,
        'phrase 23 not translated - fallback to en "' + e23enUs +'".');
    equal(phrase24.toLocaleString(), phrase24,
        'phrase 24 not translated - not in zh & en.');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in zh & en.');
});

test('ZH specified, EN-GB default', function () {
    String.defaultLocale = 'en-GB';
    String.locale = 'zh';

    equal(phrase1.toLocaleString(), e1zhCn,
        'phrase 1 translated as "' + e1zhCn + '".');
    equal(phrase2.toLocaleString(), e2zhCn,
        'phrase 2 translated as "' + e2zhCn + '".');
    equal(phrase3.toLocaleString(), e3zhCn,
        'phrase 3 translated as "' + e3zhCn + '".');
    equal(phrase4.toLocaleString(), e4zhCn,
        'phrase 4 translated as "' + e4zhCn + '".');
    equal(phrase5.toLocaleString(), e5zhCn,
        'phrase 5 translated as "' + e5zhCn + '".');
    equal(phrase6.toLocaleString(), e6zh,
        'phrase 6 translated as "' + e6zh + '".');
    equal(phrase7.toLocaleString(), e7zh,
        'phrase 7 translated as "' + e7zh + '".');
    equal(phrase8.toLocaleString(), e8zh,
        'phrase 8 translated as "' + e8zh + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 translated as "' + e9zh + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 translated as "' + e10zh + '".');
    equal(phrase11.toLocaleString(), e11zhCn,
        'phrase 11 translated as "' + e11zhCn + '".');
    equal(phrase12.toLocaleString(), e12zhCn,
        'phrase 12 translated as "' + e12zhCn + '".');
    equal(phrase13.toLocaleString(), e13zhCn,
        'phrase 13 translated as "' + e13zhCn + '".');
    equal(phrase14.toLocaleString(), e14zhCn,
        'phrase 14 translated as "' + e14zhCn + '".');
    equal(phrase15.toLocaleString(), e15zhCn,
        'phrase 15 translated as "' + e15zhCn + '".');
    equal(phrase16.toLocaleString(), e16enGb,
        'phrase 16 not translated - fallback to en-GB "' + e16enGb +'".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 not translated - fallback to en-GB "' + e17en +'".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 not translated - fallback to en (US) "' + e18enUs +'".');
    equal(phrase19.toLocaleString(), e19enGb,
        'phrase 19 not translated - fallback to en-GB "' + e19enGb +'".');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in zh & en-GB.');
    equal(phrase21.toLocaleString(), e21enGb,
        'phrase 21 not translated - fallback to en "' + e21enGb +'".');
    equal(phrase22.toLocaleString(), e22en,
        'phrase 22 not translated - fallback to en "' + e22en +'".');
    equal(phrase23.toLocaleString(), e23enUs,
        'phrase 23 not translated - fallback to en (US) "' + e23enUs +'".');
    equal(phrase24.toLocaleString(), e24enGb,
        'phrase 24 not translated - fallback to en-GB "' + e24enGb +'".');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in zh & en.');
});

test('ZH-TW specified, EN default', function () {
    String.defaultLocale = 'en';
    String.locale = 'zh-TW';

    equal(phrase1.toLocaleString(), e1zhTw,
        'phrase 1 translated as "' + e1zhTw + '".');
    equal(phrase2.toLocaleString(), e2zhTw,
        'phrase 2 translated as "' + e2zhTw + '".');
    equal(phrase3.toLocaleString(), e3zhTw,
        'phrase 3 translated as "' + e3zhTw + '".');
    equal(phrase4.toLocaleString(), e4zhTw,
        'phrase 4 translated as "' + e4zhTw + '".');
    equal(phrase5.toLocaleString(), e5zhTw,
        'phrase 5 translated as "' + e5zhTw + '".');
    equal(phrase6.toLocaleString(), e6zh,
        'phrase 6 translated as "' + e6zh + '".');
    equal(phrase7.toLocaleString(), e7zh,
        'phrase 7 translated as "' + e7zh + '".');
    equal(phrase8.toLocaleString(), e8zh,
        'phrase 8 translated as "' + e8zh + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 translated as "' + e9zh + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 translated as "' + e10zh + '".');
    equal(phrase11.toLocaleString(), e11zhCn,
        'phrase 11 translated as "' + e11zhCn + '" - not in zh-TW.');
    equal(phrase12.toLocaleString(), e12zhCn,
        'phrase 12 translated as "' + e12zhCn + '" - not in zh-TW.');
    equal(phrase13.toLocaleString(), e13zhCn,
        'phrase 13 translated as "' + e13zhCn + '" - not in zh-TW.');
    equal(phrase14.toLocaleString(), e14zhCn,
        'phrase 14 translated as "' + e14zhCn + '" - not in zh-TW.');
    equal(phrase15.toLocaleString(), e15zhCn,
        'phrase 15 translated as "' + e15zhCn + '" - not in zh-TW.');
    equal(phrase16.toLocaleString(), e16zhTw,
        'phrase 16 translated as "' + e16zhTw + '".');
    equal(phrase17.toLocaleString(), e17zhTw,
        'phrase 17 translated as "' + e17zhTw + '".');
    equal(phrase18.toLocaleString(), e18zhTw,
        'phrase 18 translated as "' + e18zhTw + '".');
    equal(phrase19.toLocaleString(), e19zhTw,
        'phrase 19 translated as "' + e19zhTw + '".');
    equal(phrase20.toLocaleString(), e20zhTw,
        'phrase 20 translated as "' + e20zhTw + '".');
    equal(phrase21.toLocaleString(), e21enUs,
        'phrase 21 not translated - fallback to en "' + e21enUs +'".');
    equal(phrase22.toLocaleString(), e22en,
        'phrase 22 not translated - fallback to en "' + e22en +'".');
    equal(phrase23.toLocaleString(), e23enUs,
        'phrase 23 not translated - fallback to en "' + e23enUs +'".');
    equal(phrase24.toLocaleString(), phrase24,
        'phrase 24 not translated - not in zh & en.');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in zh & en.');
});

test('ZH-TW specified, EN-GB default', function () {
    String.defaultLocale = 'en-GB';
    String.locale = 'zh-TW';

    equal(phrase1.toLocaleString(), e1zhTw,
        'phrase 1 translated as "' + e1zhTw + '".');
    equal(phrase2.toLocaleString(), e2zhTw,
        'phrase 2 translated as "' + e2zhTw + '".');
    equal(phrase3.toLocaleString(), e3zhTw,
        'phrase 3 translated as "' + e3zhTw + '".');
    equal(phrase4.toLocaleString(), e4zhTw,
        'phrase 4 translated as "' + e4zhTw + '".');
    equal(phrase5.toLocaleString(), e5zhTw,
        'phrase 5 translated as "' + e5zhTw + '".');
    equal(phrase6.toLocaleString(), e6zh,
        'phrase 6 translated as "' + e6zh + '".');
    equal(phrase7.toLocaleString(), e7zh,
        'phrase 7 translated as "' + e7zh + '".');
    equal(phrase8.toLocaleString(), e8zh,
        'phrase 8 translated as "' + e8zh + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 translated as "' + e9zh + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 translated as "' + e10zh + '".');
    equal(phrase11.toLocaleString(), e11zhCn,
        'phrase 11 translated as "' + e11zhCn + '".');
    equal(phrase12.toLocaleString(), e12zhCn,
        'phrase 12 translated as "' + e12zhCn + '".');
    equal(phrase13.toLocaleString(), e13zhCn,
        'phrase 13 translated as "' + e13zhCn + '".');
    equal(phrase14.toLocaleString(), e14zhCn,
        'phrase 14 translated as "' + e14zhCn + '".');
    equal(phrase15.toLocaleString(), e15zhCn,
        'phrase 15 translated as "' + e15zhCn + '".');
    equal(phrase16.toLocaleString(), e16zhTw,
        'phrase 16 translated as "' + e16zhTw + '".');
    equal(phrase17.toLocaleString(), e17zhTw,
        'phrase 17 translated as "' + e17zhTw + '".');
    equal(phrase18.toLocaleString(), e18zhTw,
        'phrase 18 translated as "' + e18zhTw + '".');
    equal(phrase19.toLocaleString(), e19zhTw,
        'phrase 19 translated as "' + e19zhTw + '".');
    equal(phrase20.toLocaleString(), e20zhTw,
        'phrase 20 translated as "' + e20zhTw + '".');
    equal(phrase21.toLocaleString(), e21enGb,
        'phrase 21 not translated - fallback to en "' + e21enGb +'".');
    equal(phrase22.toLocaleString(), e22en,
        'phrase 22 not translated - fallback to en "' + e22en +'".');
    equal(phrase23.toLocaleString(), e23enUs,
        'phrase 23 not translated - fallback to en (US) "' + e23enUs +'".');
    equal(phrase24.toLocaleString(), e24enGb,
        'phrase 24 not translated - fallback to en-GB "' + e24enGb +'".');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in zh & en.');
});

test('EN specified, ZH default', function () {
    String.defaultLocale = 'zh';
    String.locale = 'en';

    equal(phrase1.toLocaleString(), e1enUs,
        'phrase 1 translated as "' + e1enUs + '".');
    equal(phrase2.toLocaleString(), e2en,
        'phrase 2 translated as "' + e2en + '".');
    equal(phrase3.toLocaleString(), e3enUs,
        'phrase 3 translated as "' + e3enUs + '".');
    equal(phrase4.toLocaleString(), e4zhCn,
        'phrase 4 not translated - fallback to zh "' + e4zhCn +'".');
    equal(phrase5.toLocaleString(), e5zhCn,
        'phrase 5 not translated - fallback to zh "' + e5zhCn +'".');
    equal(phrase6.toLocaleString(), e6enUs,
        'phrase 6 translated as "' + e6enUs + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 not translated - fallback to zh "' + e9zh +'".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 not translated - fallback to zh "' + e10zh +'".');
    equal(phrase11.toLocaleString(), e11enUs,
        'phrase 11 translated as "' + e11enUs + '".');
    equal(phrase12.toLocaleString(), e12en,
        'phrase 12 translated as "' + e12en + '".');
    equal(phrase13.toLocaleString(), e13enUs,
        'phrase 13 translated as "' + e13enUs + '".');
    equal(phrase14.toLocaleString(), e14zhCn,
        'phrase 14 not translated - fallback to zh "' + e14zhCn +'".');
    equal(phrase15.toLocaleString(), e15zhCn,
        'phrase 15 not translated - fallback to zh "' + e15zhCn +'".');
    equal(phrase16.toLocaleString(), e16enUs,
        'phrase 16 translated as "' + e16enUs + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '".');
    equal(phrase19.toLocaleString(), phrase19,
        'phrase 19 not translated - not in zh & en.');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in zh & en.');
    equal(phrase21.toLocaleString(), e21enUs,
        'phrase 21 translated as "' + e21enUs + '".');
    equal(phrase22.toLocaleString(), e22en,
        'phrase 22 translated as "' + e22en + '".');
    equal(phrase23.toLocaleString(), e23enUs,
        'phrase 23 translated as "' + e23enUs + '".');
    equal(phrase24.toLocaleString(), phrase24,
        'phrase 24 not translated - not in zh & en.');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in zh & en.');
});

test('EN specified, ZH-TW default', function () {
    String.defaultLocale = 'zh-TW';
    String.locale = 'en';

    equal(phrase1.toLocaleString(), e1enUs,
        'phrase 1 translated as "' + e1enUs + '".');
    equal(phrase2.toLocaleString(), e2en,
        'phrase 2 translated as "' + e2en + '".');
    equal(phrase3.toLocaleString(), e3enUs,
        'phrase 3 translated as "' + e3enUs + '".');
    equal(phrase4.toLocaleString(), e4zhTw,
        'phrase 4 not translated - fallback to zh-TW "' + e4zhTw +'".');
    equal(phrase5.toLocaleString(), e5zhTw,
        'phrase 5 not translated - fallback to zh-TW "' + e5zhTw +'".');
    equal(phrase6.toLocaleString(), e6enUs,
        'phrase 6 translated as "' + e6enUs + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '".');
    equal(phrase9.toLocaleString(), e9zh,
        'phrase 9 not translated - fallback to zh "' + e9zh +'".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 not translated - fallback to zh "' + e10zh +'".');
    equal(phrase11.toLocaleString(), e11enUs,
        'phrase 11 translated as "' + e11enUs + '".');
    equal(phrase12.toLocaleString(), e12en,
        'phrase 12 translated as "' + e12en + '".');
    equal(phrase13.toLocaleString(), e13enUs,
        'phrase 13 translated as "' + e13enUs + '".');
    equal(phrase14.toLocaleString(), e14zhCn,
        'phrase 14 not translated - fallback to zh (CN) "' + e14zhCn +'".');
    equal(phrase15.toLocaleString(), e15zhCn,
        'phrase 15 not translated - fallback to zh (CN) "' + e15zhCn +'".');
    equal(phrase16.toLocaleString(), e16enUs,
        'phrase 16 translated as "' + e16enUs + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '".');
    equal(phrase19.toLocaleString(), e19zhTw,
        'phrase 19 not translated - fallback to zh-TW "' + e19zhTw +'".');
    equal(phrase20.toLocaleString(), e20zhTw,
        'phrase 20 not translated - fallback to zh-TW "' + e20zhTw +'".');
    equal(phrase21.toLocaleString(), e21enUs,
        'phrase 21 translated as "' + e21enUs + '".');
    equal(phrase22.toLocaleString(), e22en,
        'phrase 22 translated as "' + e22en + '".');
    equal(phrase23.toLocaleString(), e23enUs,
        'phrase 23 translated as "' + e23enUs + '".');
    equal(phrase24.toLocaleString(), phrase24,
        'phrase 24 not translated - not in zh & en.');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in zh & en.');
});

test('EN-GB specified, ZH default', function () {
    String.defaultLocale = 'zh';
    String.locale = 'en-GB';

    equal(phrase1.toLocaleString(), e1enGb,
        'phrase 1 translated as "' + e1enGb + '".');
    equal(phrase2.toLocaleString(), e2en,
        'phrase 2 translated as "' + e2en + '".');
    equal(phrase3.toLocaleString(), e3enUs,
        'phrase 3 translated as "' + e3enUs + '". - not in en-GB.');
    equal(phrase4.toLocaleString(), e4enGb,
        'phrase 4 translated as "' + e4enGb + '".');
    equal(phrase5.toLocaleString(), e5zhCn,
        'phrase 5 not translated - fallback to zh "' + e5zhCn +'".');
    equal(phrase6.toLocaleString(), e6enGb,
        'phrase 6 translated as "' + e6enGb + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '". - not in en-GB.');
    equal(phrase9.toLocaleString(), e9enGb,
        'phrase 9 translated as "' + e9enGb + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 not translated - fallback to zh "' + e10zh +'".');
    equal(phrase11.toLocaleString(), e11enGb,
        'phrase 11 translated as "' + e11enGb + '"');
    equal(phrase12.toLocaleString(), e12en,
        'phrase 12 translated as "' + e12en + '"');
    equal(phrase13.toLocaleString(), e13enUs,
        'phrase 13 translated as "' + e13enUs + '" - not in en-GB.');
    equal(phrase14.toLocaleString(), e14enGb,
        'phrase 14 translated as "' + e14enGb + '".');
    equal(phrase15.toLocaleString(), e15zhCn,
        'phrase 15 not translated - fallback to zh "' + e15zhCn +'".');
    equal(phrase16.toLocaleString(), e16enGb,
        'phrase 16 translated as "' + e16enGb + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '". - not in en-GB.');
    equal(phrase19.toLocaleString(), e19enGb,
        'phrase 19 translated as "' + e19enGb + '".');
    equal(phrase20.toLocaleString(), phrase20,
        'phrase 20 not translated - not in en & zh.');
    equal(phrase21.toLocaleString(), e21enGb,
        'phrase 21 translated as "' + e21enGb + '"');
    equal(phrase22.toLocaleString(), e22en,
        'phrase 22 translated as "' + e22en + '"');
    equal(phrase23.toLocaleString(), e23enUs,
        'phrase 23 translated as "' + e23enUs + '" - not in en-GB.');
    equal(phrase24.toLocaleString(), e24enGb,
        'phrase 24 translated as "' + e24enGb + '".');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in en & zh.');
});

test('EN-GB specified, ZH-TW default', function () {
    String.defaultLocale = 'zh-TW';
    String.locale = 'en-GB';

    equal(phrase1.toLocaleString(), e1enGb,
        'phrase 1 translated as "' + e1enGb + '".');
    equal(phrase2.toLocaleString(), e2en,
        'phrase 2 translated as "' + e2en + '".');
    equal(phrase3.toLocaleString(), e3enUs,
        'phrase 3 translated as "' + e3enUs + '" - not in en-GB');
    equal(phrase4.toLocaleString(), e4enGb,
        'phrase 4 translated as "' + e4enGb + '".');
    equal(phrase5.toLocaleString(), e5zhTw,
        'phrase 5 not translated - fallback to zh-TW "' + e5zhTw +'".');
    equal(phrase6.toLocaleString(), e6enGb,
        'phrase 6 translated as "' + e6enGb + '".');
    equal(phrase7.toLocaleString(), e7en,
        'phrase 7 translated as "' + e7en + '".');
    equal(phrase8.toLocaleString(), e8enUs,
        'phrase 8 translated as "' + e8enUs + '" - not in en-GB.');
    equal(phrase9.toLocaleString(), e9enGb,
        'phrase 9 translated as "' + e9enGb + '".');
    equal(phrase10.toLocaleString(), e10zh,
        'phrase 10 not translated - fallback to zh-TW "' + e10zh +'".');
    equal(phrase11.toLocaleString(), e11enGb,
        'phrase 11 translated as "' + e11enGb + '".');
    equal(phrase12.toLocaleString(), e12en,
        'phrase 12 translated as "' + e12en + '".');
    equal(phrase13.toLocaleString(), e13enUs,
        'phrase 13 translated as "' + e13enUs + '" - not in en-GB.');
    equal(phrase14.toLocaleString(), e14enGb,
        'phrase 14 translated as "' + e14enGb + '".');
    equal(phrase15.toLocaleString(), e15zhCn,
        'phrase 15 not translated - fallback to en (US) "' + e15zhCn +'".');
    equal(phrase16.toLocaleString(), e16enGb,
        'phrase 16 translated as "' + e16enGb + '".');
    equal(phrase17.toLocaleString(), e17en,
        'phrase 17 translated as "' + e17en + '".');
    equal(phrase18.toLocaleString(), e18enUs,
        'phrase 18 translated as "' + e18enUs + '" - not in en-GB.');
    equal(phrase19.toLocaleString(), e19enGb,
        'phrase 19 translated as "' + e19enGb + '".');
    equal(phrase20.toLocaleString(), e20zhTw,
        'phrase 20 not translated - fallback to zh-TW "' + e20zhTw +'".');
    equal(phrase21.toLocaleString(), e21enGb,
        'phrase 21 translated as "' + e21enGb + '".');
    equal(phrase22.toLocaleString(), e22en,
        'phrase 22 translated as "' + e22en + '".');
    equal(phrase23.toLocaleString(), e23enUs,
        'phrase 23 not translated - fallback to en (US) "' + e23enUs +'".');
    equal(phrase24.toLocaleString(), e24enGb,
        'phrase 24 translated as "' + e24enGb + '".');
    equal(phrase25.toLocaleString(), phrase25,
        'phrase 25 not translated - not in zh & en.');
});
})();

