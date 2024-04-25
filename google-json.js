let google = {
    "markers": [   //array
      {   //array[0]
        "name": "Rixos The Palm Dubai",
        "position": [25.1212, 55.1535]  //array[0-1]
      },
      {   //array[1]
        "name": "Shangri-La Hotel",
        "location": [25.2084, 55.2719]  //array[0-1]
      },
      {   //array[2]
        "name": "Grand Hyatt",
        "location": [25.2285, 55.3273]  //array[0-1]
      }
    ]
}

console.log(google.markers[1].name);
console.log(google.markers[2].location[1]);
console.log(google.markers[0].position[0]);