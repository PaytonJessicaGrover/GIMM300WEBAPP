var locationsRef = firevase.database().ref('localtionData/');
var locationsDataArray = [];

locationsRef.on('value', function(snapshot){
    snapshotToArray(snapshot);
    updateLocations();

});
function snapshotToArry(snapshot){
    var locationArray = [];
    snapshot.forEach(function(childSnapshot){
        var item = childSnapshot.val();
        locationArray.push(item);

    });

    locationsDataArray = locationArray;
}