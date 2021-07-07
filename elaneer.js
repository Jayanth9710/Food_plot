var geoJSON = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "marker-color": "#7e7e7e",
          "marker-size": "medium",
          "marker-symbol": "",
          "What": "Elaneer Juice ( Tender Coconut)",
          "Landmark": "Opposite to Devar Hall",
          "Price": "30 per Glass",
          "What else": "Dates Juice"
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            78.69371116161345,
            10.821935666713527
          ]
        }
      }
    ]
  }

 L.geoJSON(geoJSON).addTo(map)