(function(){

    angular.module('app.services').service('api', [ function(){
    
        let db = firebase.firestore();
        
        return {
            
            cafes: {
                listAll: function(){
                    return db.collection('cafes').get();
                },
                add: function(cafe){
                    return db.collection('cafes').add( cafe );
                },
                remove: function(id){
                    return db.collection('cafes').doc( id ).delete();
                }
            } 
        };
    
        }]);
    
    }).call(this);