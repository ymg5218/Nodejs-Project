import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() : string{
    
    return `<!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8"/>
      <title>Kakao 지도 API</title>
    </head>
    <body>
      <div id="map" style="width:1000px;height:800px;"></div>
      <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c87afa454362472aa90344840cc0fb82&libraries=services,clusterer,drawing"></script>
      <script>
        var container = document.getElementById('map');
        var options = {
          center: new kakao.maps.LatLng(37.480388, 126.884090),
          level: 3
        };
    
        var map = new kakao.maps.Map(container, options);
      </script>
    </body>
    </html>`
  }

  
}
