//TODO license
//TODO class API-Doc
Ext.define('GeoExt.toolbar.WfsPaging', {
    extend: 'Ext.toolbar.Paging',
    xtype: 'gx_wfspaging_toolbar',
    requires: [
    ],

    /**
     * Vector layer of the store holding the WFS features.
     *
     * @property {ol.layer.Vector}
     * @readonly
     */
    wfsLayer: null,

    startIndexParam: 'startIndex',

    countParam: 'count',

    sortByParam: 'sortBy',

    wfsGetHitsParam: '&resultType=hits',

    fromOffset: 0,

    /**
     * @private
     */
    initComponent: function() {
        var me = this;

        me.callParent();

        me.on('added', me.onAddedToParent, me);
    },

    /**
     * [description]
     */
    onAddedToParent: function() {
        var me = this;

        me.wfsLayer = me.store.layer;
        if (!me.wfsLayer) {
            Ext.Logger.warn('No WFS layer connected to the given store.',
                'The GeoExt.toolbar.WfsPaging will not work properly');
            return;
        }

        // load total feature amount by WFS
        me.loadWfsTotalCount();
        // page size from WFS layer
        me.store.pageSize = me.wfsLayer.get(me.countParam);

        // ensure the store gets a reload when the data is changed by WFS
        me.store.on('datachanged', me.onLoad, me);
    },

    /**
     * [description]
     * @return {[type]} [description]
     */
    getPageData: function() {
        var me = this;
        var store = me.store;
        var totalCount = me.totalCount;
        var pageCount = Math.ceil(totalCount / store.pageSize);
        var fromRecord = ((store.currentPage - 1) * store.pageSize) +
            me.fromOffset;
        var toRecord = Math.min(store.currentPage * store.pageSize, totalCount);

        return {
            total: totalCount,
            currentPage: store.currentPage,
            pageCount: Ext.Number.isFinite(pageCount) ? pageCount : 1,
            fromRecord: fromRecord,
            toRecord: toRecord || totalCount
        };
    },

    /**
     * [description]
     * @return {[type]} [description]
     */
    getWfsUrl: function() {
        var me = this;
        var url = me.wfsLayer.getSource().getUrl();

        // the OL vector source can have a function to create the URL
        if (Ext.isFunction(url)) {
            url = url.apply();
        }

        return url;
    },

    /**
     * [description]
     */
    loadWfsTotalCount: function() {
        var me = this;
        var url = me.getWfsUrl();
        url += me.wfsGetHitsParam;

        Ext.Ajax.request({
            url: url,
            method: 'GET',
            success: function(response) {
                var xml = response.responseXML;
                if (xml && xml.firstChild) {
                    var total = xml.firstChild.getAttribute('numberMatched');
                    me.totalCount = parseInt(total, 10);
                }

                me.onLoad();
            },
            failure: function(response) {
                Ext.Logger.error(
                    'Error while getting total amount of WFS features',
                    response
                );
            }
        });
    },

    /**
     * [description]
     */
    loadWfsPaging: function() {
        var me = this;
        var pageData = me.getPageData();

        // set new start index
        me.wfsLayer.set(me.startIndexParam, pageData.fromRecord);
        // forces the reload of the WFS layer
        me.wfsLayer.getSource().clear();
    },

    /**
     * @private
     */
    moveFirst: function() {
        var me = this;
        me.callParent();
        me.loadWfsPaging();
    },

    /**
     * @private
     */
    movePrevious: function() {
        var me = this;
        me.callParent();
        me.loadWfsPaging();
    },

    /**
     * @private
     */
    moveNext: function() {
        var me = this;
        me.callParent();
        me.loadWfsPaging();
    },

    /**
     * @private
     */
    moveLast: function() {
        var me = this;
        me.callParent();
        me.loadWfsPaging();
    }

});
