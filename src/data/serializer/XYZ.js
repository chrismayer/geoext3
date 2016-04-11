/* Copyright (c) 2015-2016 The Open Source Geospatial Foundation
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
 /**
  * A serializer for layers that have an `ol.source.XYZ` source.
  *
  * @class GeoExt.data.serializer.XYZ
  */
Ext.define('GeoExt.data.serializer.XYZ', {
    extend: 'GeoExt.data.serializer.Base',
    mixins: [
        'GeoExt.mixin.SymbolCheck'
    ],

    symbols: [
        'ol.layer.Base#getOpacity',
        'ol.size.toSize',
        'ol.source.XYZ',
        'ol.source.XYZ#getTileGrid',
        'ol.source.XYZ#getUrls',
        'ol.tilegrid.TileGrid#getResolutions',
        'ol.tilegrid.TileGrid#getTileSize'
    ],

    inheritableStatics: {
        /**
         * An array of allowed image Extensions for the mapfish print OSM Layer.
         * @type {Array[String]}
         * @protected
         */
        allowedImageExtensions: ['png','jpg','gif'],

        /**
         * @inheritdoc
         */
        sourceCls: ol.source.XYZ,

        /**
         * @inheritdoc
         */
        validateSource: function(source) {
            if (!(source instanceof this.sourceCls)) {
                Ext.raise("Cannot serialize this source with this serializer");
            }
            if (source.getUrls() === null) {
                Ext.raise("Cannot serialize this source without an URL. " +
                    "Usage of tileUrlFunction is not yet supported");
            }
        },

        /**
         * @inheritdoc
         */
        serialize: function(layer, source) {
            this.validateSource(source);
            var tileGrid = source.getTileGrid();
            var serialized = {
                baseURL: source.getUrls()[0],
                opacity: layer.getOpacity(),
                imageExtension: this._getImageExtensionFromURL(
                    source.getUrls()[0]) || 'png',
                resolutions: tileGrid.getResolutions(),
                tileSize: ol.size.toSize(tileGrid.getTileSize()),
                type: "OSM"
            };
            return serialized;
        },

        /**
         * Returns the file extension from the url and compares it to whitelist.
         *
         * @private
         * @param {String} url The first url from the urls array of
         *    ol.Source.XYZ.
         * @return {String} The fileExtension or false if no one is found.
         */
        _getImageExtensionFromURL: function(url){
            var lastThree = url.substr(url.length - 3);
            if(Ext.Array.contains(this.allowedImageExtensions, lastThree)){
                return lastThree;
            } else {
                return false;
            }
        }
    }

}, function(cls) {
    // Register this serializer via the inherited method `register`.
    cls.register(cls);
});
