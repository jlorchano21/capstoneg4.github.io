document.getElementById('downloadButton').addEventListener('click', function() {
    var apkURL = 'PPSSPP-Gold-v1.15.4_www.ppsspp.gold_.apk';
    var link = document.createElement('a');
    link.href = apkURL;
    link.download = 'PPSSPP GOLD';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
  