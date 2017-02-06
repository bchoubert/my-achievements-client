"use strict";
var http_1 = require('@angular/http');
var MAService = (function () {
    function MAService(localhttp) {
        this.localHttp = localhttp;
    }
    MAService.prototype.getPath = function (route) {
        var basePath = "http://localhost:8100/";
        switch (route) {
            case "login":
                return basePath + "login";
            case "profileDetails":
                //return "http://localhost/json/profiledetails.php";
                return basePath + "userprofiles/";
            case "profile":
                return "http://localhost/json/profile.php";
            case "register":
                return basePath + "users";
            case "search":
                return basePath + "search/";
            case "logout":
                return basePath + "logout";
            case "connection":
                return basePath + "connected";
            default:
                return basePath + route;
        }
    };
    MAService.prototype.extractData = function (res) {
        if (res) {
            if (res.status === 200) {
                return res.json();
            }
            else {
                console.error("HTTP Error " + res.status + " ");
                switch (res.status) {
                    case 401:
                        return "A";
                    case 500:
                        return "B";
                    case 0:
                        return "B";
                    case 400:
                        return "C";
                }
            }
        }
    };
    MAService.prototype.get = function (path, data) {
        if (data === void 0) { data = ""; }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.get(this.getPath(path) + data, options)
            .map(this.extractData)
            .catch(this.extractData);
    };
    MAService.prototype.post = function (path, data) {
        if (data === void 0) { data = ""; }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.post(this.getPath(path), data, options)
            .map(this.extractData)
            .catch(this.extractData);
    };
    MAService.prototype.del = function (path, data) {
        if (data === void 0) { data = ""; }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.delete(this.getPath(path) + data, options)
            .map(this.extractData)
            .catch(this.extractData);
    };
    MAService.prototype.put = function (path, data) {
        if (data === void 0) { data = ""; }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.put(this.getPath(path), data, options)
            .map(this.extractData)
            .catch(this.extractData);
    };
    MAService.prototype.patch = function (path, data) {
        if (data === void 0) { data = ""; }
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers, withCredentials: true });
        return this.localHttp.patch(this.getPath(path), data, options)
            .map(this.extractData)
            .catch(this.extractData);
    };
    MAService.prototype.getFAIcons = function () {
        return [
            "fa fa-align-center",
            "fa fa-align-justify",
            "fa fa-align-left",
            "fa fa-align-right",
            "fa fa-bold",
            "fa fa-chain",
            "fa fa-chain-broken",
            "fa fa-clipboard",
            "fa fa-columns",
            "fa fa-copy",
            "fa fa-cut",
            "fa fa-dedent",
            "fa fa-eraser",
            "fa fa-file",
            "fa fa-file-o",
            "fa fa-file-text",
            "fa fa-file-text-o",
            "fa fa-files-o",
            "fa fa-floppy-o",
            "fa fa-font",
            "fa fa-header",
            "fa fa-indent",
            "fa fa-italic",
            "fa fa-link",
            "fa fa-list",
            "fa fa-list-alt",
            "fa fa-list-ol",
            "fa fa-list-ul",
            "fa fa-outdent",
            "fa fa-paperclip",
            "fa fa-paragraph",
            "fa fa-paste",
            "fa fa-repeat",
            "fa fa-rotate-left",
            "fa fa-rotate-right",
            "fa fa-save",
            "fa fa-scissors",
            "fa fa-strikethrough",
            "fa fa-subscript",
            "fa fa-superscript",
            "fa fa-table",
            "fa fa-text-height",
            "fa fa-text-width",
            "fa fa-th",
            "fa fa-th-large",
            "fa fa-th-list",
            "fa fa-underline",
            "fa fa-undo",
            "fa fa-unlink",
            "fa fa-ambulance",
            "fa fa-automobile",
            "fa fa-bicycle",
            "fa fa-bus",
            "fa fa-cab",
            "fa fa-car",
            "fa fa-fighter-jet",
            "fa fa-motorcycle",
            "fa fa-plane",
            "fa fa-rocket",
            "fa fa-ship",
            "fa fa-space-shuttle",
            "fa fa-subway",
            "fa fa-taxi",
            "fa fa-train",
            "fa fa-truck",
            "fa fa-wheelchair",
            "fa fa-arrows-alt",
            "fa fa-backward",
            "fa fa-compress",
            "fa fa-eject",
            "fa fa-expand",
            "fa fa-fast-backward",
            "fa fa-fast-forward",
            "fa fa-forward",
            "fa fa-pause",
            "fa fa-pause-circle",
            "fa fa-pause-circle-o",
            "fa fa-play",
            "fa fa-play-circle",
            "fa fa-play-circle-o",
            "fa fa-step-backward",
            "fa fa-step-forward",
            "fa fa-stop",
            "fa fa-stop-circle",
            "fa fa-stop-circle-o",
            "fa fa-youtube-play",
            "fa fa-address-book",
            "fa fa-address-book-o",
            "fa fa-address-card",
            "fa fa-address-card-o",
            "fa fa-adjust",
            "fa fa-american-sign-language-interpreting",
            "fa fa-anchor",
            "fa fa-archive",
            "fa fa-area-chart",
            "fa fa-arrows",
            "fa fa-arrows-h",
            "fa fa-arrows-v",
            "fa fa-asl-interpreting",
            "fa fa-assistive-listening-systems",
            "fa fa-asterisk",
            "fa fa-at",
            "fa fa-automobile",
            "fa fa-audio-description",
            "fa fa-balance-scale",
            "fa fa-ban",
            "fa fa-bank",
            "fa fa-bar-chart",
            "fa fa-bar-chart-o",
            "fa fa-barcode",
            "fa fa-bars",
            "fa fa-bath",
            "fa fa-bathtub",
            "fa fa-battery-0",
            "fa fa-battery-1",
            "fa fa-battery-2",
            "fa fa-battery-3",
            "fa fa-battery-4",
            "fa fa-battery-empty",
            "fa fa-battery-full",
            "fa fa-battery-half",
            "fa fa-battery-quarter",
            "fa fa-battery-three-quarters",
            "fa fa-bed",
            "fa fa-beer",
            "fa fa-bell",
            "fa fa-bell-o",
            "fa fa-bell-slash",
            "fa fa-bell-slash-o",
            "fa fa-bicycle",
            "fa fa-binoculars",
            "fa fa-birthday-cake",
            "fa fa-blind",
            "fa fa-bolt",
            "fa fa-bomb",
            "fa fa-book",
            "fa fa-bookmark",
            "fa fa-bookmark-o",
            "fa fa-braille",
            "fa fa-briefcase",
            "fa fa-bug",
            "fa fa-building",
            "fa fa-building-o",
            "fa fa-bullhorn",
            "fa fa-bullseye",
            "fa fa-bus",
            "fa fa-cab",
            "fa fa-calculator",
            "fa fa-calendar",
            "fa fa-calendar-o",
            "fa fa-calendar-check-o",
            "fa fa-calendar-minus-o",
            "fa fa-calendar-plus-o",
            "fa fa-calendar-times-o",
            "fa fa-camera",
            "fa fa-camera-retro",
            "fa fa-car",
            "fa fa-caret-square-o-down",
            "fa fa-caret-square-o-left",
            "fa fa-caret-square-o-right",
            "fa fa-caret-square-o-up",
            "fa fa-cart-arrow-down",
            "fa fa-cart-plus",
            "fa fa-cc",
            "fa fa-certificate",
            "fa fa-check",
            "fa fa-check-circle",
            "fa fa-check-circle-o",
            "fa fa-check-square",
            "fa fa-check-square-o",
            "fa fa-child",
            "fa fa-circle",
            "fa fa-circle-o",
            "fa fa-circle-o-notch",
            "fa fa-circle-thin",
            "fa fa-clock-o",
            "fa fa-clone",
            "fa fa-close",
            "fa fa-cloud",
            "fa fa-cloud-download",
            "fa fa-cloud-upload",
            "fa fa-code",
            "fa fa-code-fork",
            "fa fa-coffee",
            "fa fa-cog",
            "fa fa-cogs",
            "fa fa-comment",
            "fa fa-comment-o",
            "fa fa-comments",
            "fa fa-comments-o",
            "fa fa-commenting",
            "fa fa-commenting-o",
            "fa fa-compass",
            "fa fa-copyright",
            "fa fa-credit-card",
            "fa fa-credit-card-alt",
            "fa fa-creative-commons",
            "fa fa-crop",
            "fa fa-crosshairs",
            "fa fa-cube",
            "fa fa-cubes",
            "fa fa-cutlery",
            "fa fa-dashboard",
            "fa fa-database",
            "fa fa-deaf",
            "fa fa-deafness",
            "fa fa-desktop",
            "fa fa-diamond",
            "fa fa-dot-circle-o",
            "fa fa-download",
            "fa fa-drivers-license",
            "fa fa-drivers-license-o",
            "fa fa-edit",
            "fa fa-ellipsis-h",
            "fa fa-ellipsis-v",
            "fa fa-envelope",
            "fa fa-envelope-o",
            "fa fa-envelope-open",
            "fa fa-envelope-open-o",
            "fa fa-envelope-square",
            "fa fa-eraser",
            "fa fa-exchange",
            "fa fa-exclamation",
            "fa fa-exclamation-circle",
            "fa fa-exclamation-triangle",
            "fa fa-external-link",
            "fa fa-external-link-square",
            "fa fa-eye",
            "fa fa-eye-slash",
            "fa fa-eyedropper",
            "fa fa-fax",
            "fa fa-female",
            "fa fa-fighter-jet",
            "fa fa-file-archive-o",
            "fa fa-file-audio-o",
            "fa fa-file-code-o",
            "fa fa-file-excel-o",
            "fa fa-file-image-o",
            "fa fa-file-movie-o",
            "fa fa-file-pdf-o",
            "fa fa-file-photo-o",
            "fa fa-file-picture-o",
            "fa fa-file-powerpoint-o",
            "fa fa-file-sound-o",
            "fa fa-file-video-o",
            "fa fa-file-word-o",
            "fa fa-file-zip-o",
            "fa fa-film",
            "fa fa-filter",
            "fa fa-fire",
            "fa fa-fire-extinguisher",
            "fa fa-flag",
            "fa fa-flag-checkered",
            "fa fa-flag-o",
            "fa fa-flash",
            "fa fa-flask",
            "fa fa-folder",
            "fa fa-folder-o",
            "fa fa-folder-open",
            "fa fa-folder-open-o",
            "fa fa-frown-o",
            "fa fa-futbol-o",
            "fa fa-gamepad",
            "fa fa-gavel",
            "fa fa-gear",
            "fa fa-gears",
            "fa fa-genderless",
            "fa fa-gift",
            "fa fa-glass",
            "fa fa-globe",
            "fa fa-graduation-cap",
            "fa fa-group",
            "fa fa-hard-of-hearing",
            "fa fa-hdd-o",
            "fa fa-handshake-o",
            "fa fa-hashtag",
            "fa fa-headphones",
            "fa fa-heart",
            "fa fa-heart-o",
            "fa fa-heartbeat",
            "fa fa-history",
            "fa fa-home",
            "fa fa-hotel",
            "fa fa-hourglass",
            "fa fa-hourglass-1",
            "fa fa-hourglass-2",
            "fa fa-hourglass-3",
            "fa fa-hourglass-end",
            "fa fa-hourglass-half",
            "fa fa-hourglass-o",
            "fa fa-hourglass-start",
            "fa fa-i-cursor",
            "fa fa-id-badge",
            "fa fa-id-card",
            "fa fa-id-card-o",
            "fa fa-image",
            "fa fa-inbox",
            "fa fa-industry",
            "fa fa-info",
            "fa fa-info-circle",
            "fa fa-institution",
            "fa fa-key",
            "fa fa-keyboard-o",
            "fa fa-language",
            "fa fa-laptop",
            "fa fa-leaf",
            "fa fa-legal",
            "fa fa-lemon-o",
            "fa fa-level-down",
            "fa fa-level-up",
            "fa fa-life-bouy",
            "fa fa-life-buoy",
            "fa fa-life-ring",
            "fa fa-life-saver",
            "fa fa-lightbulb-o",
            "fa fa-line-chart",
            "fa fa-location-arrow",
            "fa fa-lock",
            "fa fa-low-vision",
            "fa fa-magic",
            "fa fa-magnet",
            "fa fa-mail-forward",
            "fa fa-mail-reply",
            "fa fa-mail-reply-all",
            "fa fa-male",
            "fa fa-map",
            "fa fa-map-o",
            "fa fa-map-pin",
            "fa fa-map-signs",
            "fa fa-map-marker",
            "fa fa-meh-o",
            "fa fa-microchip",
            "fa fa-microphone",
            "fa fa-microphone-slash",
            "fa fa-minus",
            "fa fa-minus-circle",
            "fa fa-minus-square",
            "fa fa-minus-square-o",
            "fa fa-mobile",
            "fa fa-mobile-phone",
            "fa fa-money",
            "fa fa-moon-o",
            "fa fa-mortar-board",
            "fa fa-motorcycle",
            "fa fa-mouse-pointer",
            "fa fa-music",
            "fa fa-navicon",
            "fa fa-newspaper-o",
            "fa fa-object-group",
            "fa fa-object-ungroup",
            "fa fa-paint-brush",
            "fa fa-paper-plane",
            "fa fa-paper-plane-o",
            "fa fa-paw",
            "fa fa-pencil",
            "fa fa-pencil-square",
            "fa fa-pencil-square-o",
            "fa fa-percent",
            "fa fa-phone",
            "fa fa-phone-square",
            "fa fa-photo",
            "fa fa-picture-o",
            "fa fa-pie-chart",
            "fa fa-plane",
            "fa fa-plug",
            "fa fa-plus",
            "fa fa-plus-circle",
            "fa fa-plus-square",
            "fa fa-plus-square-o",
            "fa fa-podcast",
            "fa fa-power-off",
            "fa fa-print",
            "fa fa-puzzle-piece",
            "fa fa-qrcode",
            "fa fa-question",
            "fa fa-question-circle",
            "fa fa-question-circle-o",
            "fa fa-quote-left",
            "fa fa-quote-right",
            "fa fa-random",
            "fa fa-recycle",
            "fa fa-refresh",
            "fa fa-registered",
            "fa fa-remove",
            "fa fa-reorder",
            "fa fa-reply",
            "fa fa-reply-all",
            "fa fa-retweet",
            "fa fa-road",
            "fa fa-rocket",
            "fa fa-rss",
            "fa fa-rss-square",
            "fa fa-s15",
            "fa fa-search",
            "fa fa-search-minus",
            "fa fa-search-plus",
            "fa fa-send",
            "fa fa-send-o",
            "fa fa-server",
            "fa fa-share",
            "fa fa-share-alt",
            "fa fa-share-alt-square",
            "fa fa-share-square",
            "fa fa-share-square-o",
            "fa fa-shield",
            "fa fa-ship",
            "fa fa-shopping-bag",
            "fa fa-shopping-basket",
            "fa fa-shopping-cart",
            "fa fa-shower",
            "fa fa-sign-in",
            "fa fa-sign-out",
            "fa fa-sign-language",
            "fa fa-signal",
            "fa fa-signing",
            "fa fa-sitemap",
            "fa fa-sliders",
            "fa fa-smile-o",
            "fa fa-snowflake-o",
            "fa fa-soccer-ball-o",
            "fa fa-sort",
            "fa fa-sort-alpha-asc",
            "fa fa-sort-alpha-desc",
            "fa fa-sort-amount-asc",
            "fa fa-sort-amount-desc",
            "fa fa-sort-asc",
            "fa fa-sort-desc",
            "fa fa-sort-down",
            "fa fa-sort-numeric-asc",
            "fa fa-sort-numeric-desc",
            "fa fa-sort-up",
            "fa fa-space-shuttle",
            "fa fa-spinner",
            "fa fa-spoon",
            "fa fa-square",
            "fa fa-square-o",
            "fa fa-star",
            "fa fa-star-half",
            "fa fa-star-half-empty",
            "fa fa-star-half-full",
            "fa fa-star-half-o",
            "fa fa-star-o",
            "fa fa-sticky-note",
            "fa fa-sticky-note-o",
            "fa fa-street-view",
            "fa fa-suitcase",
            "fa fa-sun-o",
            "fa fa-support",
            "fa fa-tablet",
            "fa fa-tachometer",
            "fa fa-tag",
            "fa fa-tags	",
            "fa fa-tasks",
            "fa fa-taxi",
            "fa fa-television",
            "fa fa-terminal",
            "fa fa-thermometer",
            "fa fa-thermometer-0",
            "fa fa-thermometer-1",
            "fa fa-thermometer-2",
            "fa fa-thermometer-3",
            "fa fa-thermometer-4",
            "fa fa-thermometer-empty",
            "fa fa-thermometer-full",
            "fa fa-thermometer-half",
            "fa fa-thermometer-quarter",
            "fa fa-thermometer-three-quarters",
            "fa fa-thumb-tack",
            "fa fa-thumbs-down",
            "fa fa-thumbs-o-up",
            "fa fa-thumbs-up",
            "fa fa-ticket",
            "fa fa-times",
            "fa fa-times-circle",
            "fa fa-times-circle-o",
            "fa fa-times-rectangle",
            "fa fa-times-rectangle-o",
            "fa fa-tint",
            "fa fa-toggle-down",
            "fa fa-toggle-left",
            "fa fa-toggle-right",
            "fa fa-toggle-up",
            "fa fa-toggle-off",
            "fa fa-toggle-on",
            "fa fa-trademark",
            "fa fa-trash",
            "fa fa-trash-o",
            "fa fa-tree",
            "fa fa-trophy",
            "fa fa-truck",
            "fa fa-tty",
            "fa fa-tv",
            "fa fa-umbrella",
            "fa fa-universal-access",
            "fa fa-university",
            "fa fa-unlock",
            "fa fa-unlock-alt",
            "fa fa-unsorted",
            "fa fa-upload",
            "fa fa-user",
            "fa fa-user-circle",
            "fa fa-user-circle-o",
            "fa fa-user-o",
            "fa fa-user-plus",
            "fa fa-user-secret",
            "fa fa-user-times",
            "fa fa-users",
            "fa fa-vcard",
            "fa fa-vcard-o",
            "fa fa-video-camera",
            "fa fa-volume-control-phone",
            "fa fa-volume-down",
            "fa fa-volume-off",
            "fa fa-volume-up",
            "fa fa-warning",
            "fa fa-wheelchair",
            "fa fa-wheelchair-alt",
            "fa fa-window-close",
            "fa fa-window-close-o",
            "fa fa-window-maximize",
            "fa fa-window-minimize",
            "fa fa-window-restore",
            "fa fa-wifi",
            "fa fa-wrench"
        ];
    };
    return MAService;
}());
exports.MAService = MAService;
//# sourceMappingURL=maService.js.map
