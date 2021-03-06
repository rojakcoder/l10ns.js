(function () {
var phrase1  = "%phrase1",
    e1allSingular = 'The neighbourhood is very friendly.',
    e1allPlural = 'The neighbourhoods are very friendly.',
    e1usSingular = 'The neighborhood is very friendly.',
    e1usPlural = 'The neighborhoods are very friendly.',
    e1usPluralOnly = 'The neighborhoods are very friendly.',
    e1usSingularOnly = '%phrase1';

test('en & en-GB: en-GB specified', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n!=1)',
            '&plurals': [
                {
                    '%phrase1': 'The neighborhoods are very friendly.'
                },
                {
                    '%phrase1': 'The neighborhood is very friendly.'
                }
            ]
        },
        'en-GB': {
            '&plural-forms': 'nplurals=2; plural=(n!=1)',
            '&plurals': [
                {
                    '%phrase1': 'The neighbourhoods are very friendly.'
                },
                {
                    '%phrase1': 'The neighbourhood is very friendly.'
                }
            ]
        }
    });
    String.locale = 'en-GB';

    equal(phrase1.toLocaleString(), e1allPlural,
        'NULL: Translated as "' + e1allPlural + '" because plural form is default.');
    equal(phrase1.toLocaleString(0), e1allPlural,
        '0: Translated as "' + e1allPlural + '".');
    equal(phrase1.toLocaleString(1), e1allSingular,
        '1: Translated as "' + e1allSingular + '".');
    equal(phrase1.toLocaleString(2), e1allPlural,
        '2: Translated as "' + e1allPlural + '".');
});

test('en & en-GB: en specified', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n!=1)',
            '&plurals': [
                {
                    '%phrase1': 'The neighborhoods are very friendly.'
                },
                {
                    '%phrase1': 'The neighborhood is very friendly.'
                }
            ]
        },
        'en-GB': {
            '&plural-forms': 'nplurals=2; plural=(n!=1)',
            '&plurals': [
                {
                    '%phrase1': 'The neighbourhoods are very friendly.'
                },
                {
                    '%phrase1': 'The neighbourhood is very friendly.'
                }
            ]
        }
    });
    String.locale = 'en';

    equal(phrase1.toLocaleString(), e1usPlural,
        'NULL: Translated as "' + e1usPlural + '" because plural form is default.');
    equal(phrase1.toLocaleString(0), e1usPlural,
        '0: Translated as "' + e1usPlural + '".');
    equal(phrase1.toLocaleString(1), e1usSingular,
        '1: Translated as "' + e1usSingular + '".');
    equal(phrase1.toLocaleString(2), e1usPlural,
        '2: Translated as "' + e1usPlural + '".');
});

test('en & en-GB: en-GB specified', function () {
    String.toLocaleString({
        'en': {
            '&plural-forms': 'nplurals=2; plural=(n!=1)',
            '&plurals': [
                {
                    '%phrase1': 'The neighborhoods are very friendly.'
                },
                {
                    '%phrase1': 'The neighborhood is very friendly.'
                }
            ]
        },
        'en-GB': {
            '&plural-forms': 'nplurals=2; plural=(n!=1)',
            '&plurals': [
                {
                    '%phrase0': ''
                },
                {
                    '%phrase0': ''
                }
            ]
        }
    });
    String.locale = 'en-GB';

    equal(phrase1.toLocaleString(), e1usPlural,
        'NULL: Translated as "' + e1usPlural + '" because plural form is default and region fallback.');
    equal(phrase1.toLocaleString(0), e1usPlural,
        '0: Translated as "' + e1usPlural + '" because of region fallback.');
    equal(phrase1.toLocaleString(1), e1usSingular,
        '1: Translated as "' + e1usSingular + '" because of region fallback.');
    equal(phrase1.toLocaleString(2), e1usPlural,
        '2: Translated as "' + e1usPlural + '" because of region fallback.');
});
})();

