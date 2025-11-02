var iframe1 = document.getElementById("body-viewer-iframe-1");
iframe1.onload = function addCssToIframe() {
  let doc = iframe1.contentWindow.document;
  console.log(doc.body.getElementsByTagName("h1")[0]);
};
