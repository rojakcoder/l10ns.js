/*! version v1.0.1 */
/*
 * l10n.js
 * 
 * Adapted with pluralization by Chua Chee How. http://rojakcoder.com
 * By Eli Grey, http://eligrey.com
 * Licensed under the X11/MIT License
 *   See LICENSE.md
 */

/*global XMLHttpRequest, setTimeout, document, navigator, ActiveXObject*/
/*jslint plusplus: true, continue: true, evil: true*/
(function () {
    "use strict";

    var load_queues = {}, localizations = {},
        // the official format is application/vnd.oftn.l10n+json, though l10n.js will also
        // accept application/x-l10n+json and application/l10n+json
        l10n_js_media_type = /^\s*application\/(?:vnd\.oftn\.|x-)?l10n\+json\s*(?:$|;)/i,
        XHR,

        array_index_of = Array.prototype.indexOf || function (item) {
            var len = this.length, i   = 0;
            for (i = 0; i < len; i++) {
                if (this.hasOwnProperty(i) && this[i] === item) {
                    return i;
                }
            }
            return -1;
        },
        request_JSON = function (uri) {
            var req = new XHR();

            // sadly, this has to be blocking to allow for a graceful degrading API
            req.open("GET", uri, false);
            req.send(null);

            if (req.status !== 200) {
                // warn about error without stopping execution
                setTimeout(function () {
                    // Error messages are not localized as not to cause an infinite loop
                    var l10n_err = new Error("Unable to load localization data: " + uri);
                    l10n_err.name = "Localization Error";
                    throw l10n_err;
                }, 0);

                return {};
            }
            return JSON.parse(req.responseText);
        },
        load = function (data) {
            // don't handle function['toLocaleString'](indentationAmount:Number)
            if (arguments.length > 0 && typeof data !== "number") {
                if (typeof data === 'string') {
                    load(request_JSON(data));
                } else if (data === false) {
                    // reset all localizations
                    localizations = {};
                } else {
                    // Extend current localizations instead of completely overwriting them
                    var locale, localization, message;
                    for (locale in data) {
                        if (data.hasOwnProperty(locale)) {
                            localization = data[locale];
                            locale = locale.toLowerCase();

                            if (!localizations.hasOwnProperty(locale) || localization === false) {
                                // reset locale if not existing or reset flag is specified
                                localizations[locale] = {};
                            }

                            if (localization === false) {
                                continue;
                            }

                            // URL specified
                            if (typeof localization === 'string') {
                                if (String.locale.toLowerCase().indexOf(locale) === 0) {
                                    localization = request_JSON(localization);
                                } else {
                                    // queue loading locale if not needed
                                    if (!load_queues.hasOwnProperty(locale)) {
                                        load_queues[locale] = [];
                                    }
                                    load_queues[locale].push(localization);
                                    continue;
                                }
                            }

                            for (message in localization) {
                                if (localization.hasOwnProperty(message)) {
                                    localizations[locale][message] = localization[message];
                                }
                            }
                        }
                    }
                }
            }
            // Return what function['toLocaleString']() normally returns
            return Function.prototype.toLocaleString.apply(String, arguments);
        },
        process_load_queue = function (locale) {
            var queue = load_queues[locale],
                i,
                len = queue.length,
                localization;


            for (i = 0; i < len; i++) {
                localization = {};
                localization[locale] = request_JSON(queue[i]);
                load(localization);
            }

            delete load_queues[locale];
        },
        use_default,
        /**
         * Evaluates the plural statements to get the correct index in the array.
         * The plurality evaluation statement has to be coordinated with
         * the plural forms i.e. if plural=(n!=1), then use "cats" for the
         * first cell and "cat" for the second cell.
         * On the other hand, if plural=(n==1), first cell should be "cat"
         * and second cell should be "cats".
         */
        parsePlural = function (pluralForms, n) {
            //n is used in eval()
            var re = /^nplurals=[0-9];\s*plural=\(([n!=><(?:\s+\|\|\s+)(?:\s+&&\s+)%0-9]{3,})\)/i,
                evalResult,
                result = re.exec(pluralForms);
            if (result && result[1]) {
                evalResult = eval(result[1]);
                if (evalResult === true) {
                    return 0;
                }
                if (evalResult === false) {
                    return 1;
                }
                return evalResult;
            }
            return 0;
        },
        getPlural = function (localization, position, this_val) {
            if (localization['&plurals']) {
                if (localization['&plurals'][position] &&
                        localization['&plurals'][position][this_val]) {
                    return localization['&plurals'][position][this_val];
                }
                if (localization['&plurals'][0] &&
                        localization['&plurals'][0][this_val]) {
                    return localization['&plurals'][0][this_val];
                }
            } else if (localization[this_val]) {
                return localization[this_val];
            }
        },
        /**
         * The actual function called when calling toLocaleString.
         */
        localize = function (cardinality) {
            var pluralForms, plural, position,
                using_default = use_default,
                current_locale = String[using_default ? 'defaultLocale' : 'locale'],
                parts = current_locale.toLowerCase().split("-"),
                i = parts.length,
                this_val = this.valueOf(),
                locale;

            use_default = false;

            // Iterate through locales starting at most-specific until a localization is found
            do {
                locale = parts.slice(0, i).join("-");
                // load locale if not loaded
                if (load_queues[locale]) {
                    process_load_queue(locale);
                }
                if (localizations[locale]) {
                    pluralForms = localizations[locale]['&plural-forms'];
                    if (pluralForms) {
                        if (typeof pluralForms === 'function') {
                            if (cardinality === null || cardinality === undefined) {
                                position = 0;
                            } else {
                                position = pluralForms(cardinality);
                            }
                            plural = getPlural(localizations[locale], position, this_val);
                            //only return if plural form is found
                            if (plural) {
                                return plural.replace('__n__', cardinality);
                            }
                        } else {
                            if (cardinality === null || cardinality === undefined ||
                                    pluralForms.indexOf('nplurals=1') !== -1) {
                                //i.e. nplurals=1, use [0]
                                plural = getPlural(localizations[locale], 0, this_val);
                                //only return if plural form is found
                                if (plural) {
                                    return plural.replace('__n__', cardinality);
                                }
                            }
                            if (pluralForms.indexOf('nplurals=2') !== -1) {
                                position = parsePlural(pluralForms, cardinality);
                                plural = getPlural(localizations[locale], position, this_val);
                                //only return if plural form is found
                                if (plural) {
                                    return plural.replace('__n__', cardinality);
                                }
                            }
                        }
                    }
                    if (localizations[locale][this_val]) {
                        return localizations[locale][this_val];
                    }
                }
                //not returning anything will result in fallback
            } while (i-- > 1);

            if (!using_default && String.defaultLocale) {
                use_default = true;
                return localize.call(this_val, cardinality);
            }

            return this_val;
        },
        rel, elt, elts = document.getElementsByTagName("link"),
        i = elts.length,
        localization;

    String.toLocaleString = load;
    String.prototype.toLocaleString = localize;

    if (XMLHttpRequest === undefined && ActiveXObject !== undefined) {
        XHR = function () {
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.6.0");
            } catch (ignore) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP.3.0");
            } catch (ignore) {}
            try {
                return new ActiveXObject("Msxml2.XMLHTTP");
            } catch (ignore) {}

            throw new Error("XMLHttpRequest not supported by this browser.");
        };
    } else {
        XHR = XMLHttpRequest;
    }

    String.defaultLocale = String.defaultLocale || "";
    String.locale = (navigator && (navigator.language || navigator.userLanguage)) || "";

    if (document !== undefined) {
        while (i--) {
            elt = elts[i];
            rel = (elt.getAttribute("rel") || "").toLowerCase().split(/\s+/);

            if (l10n_js_media_type.test(elt.type)) {
                if (array_index_of.call(rel, "localizations") !== -1) {
                    // multiple localizations
                    load(elt.getAttribute("href"));
                } else if (array_index_of.call(rel, "localization") !== -1) {
                    // single localization
                    localization = {};
                    localization[(elt.getAttribute("hreflang") || "").toLowerCase()] =
                        elt.getAttribute("href");
                    load(localization);
                }
            }
        }
    }
}());
