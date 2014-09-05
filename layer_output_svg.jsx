/**
* @author Niels Bosma (niels.bosma@motorola.com
* modified by lab3-34
*/

var folder = Folder.selectDialog();
var document = app.activeDocument;
if(document && folder)
{
var options = new ExportOptionsSVG();
options.compressed = 0;
options.embedRasterImages = 1;
options.embedAllFonts = 1;
options.preserveEditability = 1;
options.documentEncoding = "SVGDocumentEncoding.UTF8";
var n = document.layers.length;
for(var i=0; i<n; ++i)
{
hideAllLayers();
var layer = document.layers[i];
layer.visible = true;

var file = new File(folder.fsName+"/"+layer.name+".svg");
var options = new ExportOptionsSVG();
options.artBoardClipping = true;
document.exportFile(file,ExportType.SVG,options);

}
showAllLayers();
}

function hideAllLayers()
{
forEach(document.layers, function(layer) {
layer.visible = false;
});
}

function showAllLayers()
{
forEach(document.layers, function(layer) {
layer.visible = true;
});
}

function forEach(collection, fn)
{
var n = collection.length;
for(var i=0; i<n; ++i)
{
fn(collection[i]);
}
}
