var page = function () {
    // Handles Bootstrap Tooltips.
    var handleTooltips = function () {
        // global tooltips
        $('[data-toggle="tooltip"]').tooltip();
    };
    var handlePopover = function () {
        $('[data-toggle="popover"]').popover()
    };
    return {
        init: function () {
            handleTooltips();
            handlePopover();
        }
    }
}();