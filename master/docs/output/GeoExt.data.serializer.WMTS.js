Ext.data.JsonP.GeoExt_data_serializer_WMTS({"tagname":"class","name":"GeoExt.data.serializer.WMTS","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"WMTS.js","href":"WMTS.html#GeoExt-data-serializer-WMTS"}],"aliases":{},"alternateClassNames":[],"extends":"GeoExt.data.serializer.Base","mixins":["GeoExt.mixin.SymbolCheck"],"requires":[],"uses":[],"members":[{"name":"symbols","tagname":"property","owner":"GeoExt.data.serializer.WMTS","id":"property-symbols","meta":{}},{"name":"sourceCls","tagname":"property","owner":"GeoExt.data.serializer.WMTS","id":"static-property-sourceCls","meta":{"static":true}},{"name":"onClassMixedIn","tagname":"method","owner":"GeoExt.mixin.SymbolCheck","id":"method-onClassMixedIn","meta":{"private":true}},{"name":"register","tagname":"method","owner":"GeoExt.data.serializer.Base","id":"static-method-register","meta":{"protected":true,"static":true}},{"name":"serialize","tagname":"method","owner":"GeoExt.data.serializer.WMTS","id":"static-method-serialize","meta":{"static":true}},{"name":"validateSource","tagname":"method","owner":"GeoExt.data.serializer.Base","id":"static-method-validateSource","meta":{"protected":true,"static":true}}],"code_type":"ext_define","id":"class-GeoExt.data.serializer.WMTS","short_doc":"A serializer for layer that have a ol.source.WMTS source. ...","component":false,"superclasses":["Ext.Base","GeoExt.data.serializer.Base"],"subclasses":[],"mixedInto":[],"parentMixins":["GeoExt.mixin.SymbolCheck"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/GeoExt.data.serializer.Base' rel='GeoExt.data.serializer.Base' class='docClass'>GeoExt.data.serializer.Base</a><div class='subclass '><strong>GeoExt.data.serializer.WMTS</strong></div></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='docClass'>GeoExt.mixin.SymbolCheck</a></div><h4>Inherited mixins</h4><div class='dependency'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='docClass'>GeoExt.mixin.SymbolCheck</a></div><h4>Files</h4><div class='dependency'><a href='source/WMTS.html#GeoExt-data-serializer-WMTS' target='_blank'>WMTS.js</a></div></pre><div class='doc-contents'><p>A serializer for layer that have a <code>ol.source.WMTS</code> source.</p>\n\n<p>This class is heavily inspired by the excellent <code>ngeo</code> Print service class:\n<a href=\"https://github.com/camptocamp/ngeo\">camptocamp/ngeo</a>.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance properties</h3><div id='property-symbols' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.serializer.WMTS'>GeoExt.data.serializer.WMTS</span><br/><a href='source/WMTS.html#GeoExt-data-serializer-WMTS-property-symbols' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.serializer.WMTS-property-symbols' class='name expandable'>symbols</a> : String[]<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'><p><debug></debug></p>\n<p>Defaults to: <code>['ol.proj.Projection#getMetersPerUnit', 'ol.size.toSize', 'ol.source.WMTS', 'ol.source.WMTS#getDimensions', 'ol.source.WMTS#getFormat', 'ol.source.WMTS#getLayer', 'ol.source.WMTS#getMatrixSet', 'ol.source.WMTS#getProjection', 'ol.source.WMTS#getRequestEncoding', 'ol.source.WMTS#getStyle', 'ol.source.WMTS#getTileGrid', 'ol.source.WMTS#getUrls', 'ol.source.WMTS#getVersion', 'ol.tilegrid.WMTS#getMatrixIds', 'ol.tilegrid.WMTS#getOrigin', 'ol.tilegrid.WMTS#getResolution']</code></p><p>Overrides: <a href=\"#!/api/GeoExt.mixin.SymbolCheck-property-symbols\" rel=\"GeoExt.mixin.SymbolCheck-property-symbols\" class=\"docClass\">GeoExt.mixin.SymbolCheck.symbols</a></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static properties</h3><div id='static-property-sourceCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.serializer.WMTS'>GeoExt.data.serializer.WMTS</span><br/><a href='source/WMTS.html#GeoExt-data-serializer-WMTS-static-property-sourceCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.serializer.WMTS-static-property-sourceCls' class='name expandable'>sourceCls</a> : ol.source.Source<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'><p>The ol.source.Source class that this serializer will serialize.</p>\n</div><div class='long'><p>The ol.source.Source class that this serializer will serialize.</p>\n<p>Overrides: <a href=\"#!/api/GeoExt.data.serializer.Base-static-property-sourceCls\" rel=\"GeoExt.data.serializer.Base-static-property-sourceCls\" class=\"docClass\">GeoExt.data.serializer.Base.sourceCls</a></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-onClassMixedIn' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.mixin.SymbolCheck' rel='GeoExt.mixin.SymbolCheck' class='defined-in docClass'>GeoExt.mixin.SymbolCheck</a><br/><a href='source/SymbolCheck.html#GeoExt-mixin-SymbolCheck-method-onClassMixedIn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.mixin.SymbolCheck-method-onClassMixedIn' class='name expandable'>onClassMixedIn</a>( <span class='pre'>cls</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Whenever a class mixes in GeoExt.mixin.SymbolCheck, this method will be\ncalled and it actually runs the checks for al...</div><div class='long'><p>Whenever a class mixes in <a href=\"#!/api/GeoExt.mixin.SymbolCheck\" rel=\"GeoExt.mixin.SymbolCheck\" class=\"docClass\">GeoExt.mixin.SymbolCheck</a>, this method will be\ncalled and it actually runs the checks for all the defined <a href=\"#!/api/GeoExt.mixin.SymbolCheck-property-symbols\" rel=\"GeoExt.mixin.SymbolCheck-property-symbols\" class=\"docClass\">symbols</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cls</span> : Ext.Class<div class='sub-desc'><p>The class that this mixin is mixed into.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-register' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.serializer.Base' rel='GeoExt.data.serializer.Base' class='defined-in docClass'>GeoExt.data.serializer.Base</a><br/><a href='source/Base2.html#GeoExt-data-serializer-Base-static-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.serializer.Base-static-method-register' class='name expandable'>register</a>( <span class='pre'>subCls</span> )<span class=\"signature\"><span class='protected' >protected</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Given a subclass of GeoExt.data.serializer.Base, register the class\nwith the GeoExt.data.MapfishPrintProvider. ...</div><div class='long'><p>Given a subclass of <a href=\"#!/api/GeoExt.data.serializer.Base\" rel=\"GeoExt.data.serializer.Base\" class=\"docClass\">GeoExt.data.serializer.Base</a>, register the class\nwith the <a href=\"#!/api/GeoExt.data.MapfishPrintProvider\" rel=\"GeoExt.data.MapfishPrintProvider\" class=\"docClass\">GeoExt.data.MapfishPrintProvider</a>. This method is ususally\ncalled inside the 'after-create' function of Ext.class definitions.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>subCls</span> : <a href=\"#!/api/GeoExt.data.serializer.Base\" rel=\"GeoExt.data.serializer.Base\" class=\"docClass\">GeoExt.data.serializer.Base</a><div class='sub-desc'><p>The class to register.</p>\n</div></li></ul></div></div></div><div id='static-method-serialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='GeoExt.data.serializer.WMTS'>GeoExt.data.serializer.WMTS</span><br/><a href='source/WMTS.html#GeoExt-data-serializer-WMTS-static-method-serialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.serializer.WMTS-static-method-serialize' class='name expandable'>serialize</a>( <span class='pre'>layer, source, viewRes</span> ) : Object<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Serializes the passed source and layer into an object that the\nMapfish Print Servlet understands. ...</div><div class='long'><p>Serializes the passed source and layer into an object that the\nMapfish Print Servlet understands.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layer</span> : ol.layer.Layer<div class='sub-desc'><p>The layer to serialize.</p>\n\n\n\n</div></li><li><span class='pre'>source</span> : ol.source.Source<div class='sub-desc'><p>The source of the layer to\n   serialize.</p>\n\n\n\n</div></li><li><span class='pre'>viewRes</span> : Number<div class='sub-desc'><p>The resolution of the mapview.</p>\n\n\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>a serialized representation of source and layer.</p>\n\n\n\n</div></li></ul><p>Overrides: <a href=\"#!/api/GeoExt.data.serializer.Base-static-method-serialize\" rel=\"GeoExt.data.serializer.Base-static-method-serialize\" class=\"docClass\">GeoExt.data.serializer.Base.serialize</a></p></div></div></div><div id='static-method-validateSource' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/GeoExt.data.serializer.Base' rel='GeoExt.data.serializer.Base' class='defined-in docClass'>GeoExt.data.serializer.Base</a><br/><a href='source/Base2.html#GeoExt-data-serializer-Base-static-method-validateSource' target='_blank' class='view-source'>view source</a></div><a href='#!/api/GeoExt.data.serializer.Base-static-method-validateSource' class='name expandable'>validateSource</a>( <span class='pre'>source</span> )<span class=\"signature\"><span class='protected' >protected</span><span class='static' >static</span></span></div><div class='description'><div class='short'>Given a concrete ol.source.Source instance, this method checks if\nthe non-abstract subclass is capable of serializing...</div><div class='long'><p>Given a concrete ol.source.Source instance, this method checks if\nthe non-abstract subclass is capable of serializing the source. Will\nthrow an exception if the source isn't valid for the serializer.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>source</span> : ol.source.Source<div class='sub-desc'><p>The source to test.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});