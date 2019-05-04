(function(){

    angular.module('app.services').service('api',  ['$q', "$rootScope", function($q, $rootScope){
    
        let db = firebase.firestore();
        
        return {
            
            cafes: {
                listAll: function(){
                    
                    var deferred = $q.defer();

                    db.collection('cafes').get().then( data => {
                        let list = [];
                        data.docs.forEach( doc => {
                            let item = angular.copy(doc.data());
                            item.id = doc.id;
                            list.push(item);
                        });
                        $rootScope.$apply(function(){
                            deferred.resolve(list);
                        });
                    });

                    return deferred.promise;
                    
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