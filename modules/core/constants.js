angular.module('app')

    .constant( 'BLOCKCHAIN_CONFIG', {
        server: 'localhost',
        port: '7545'
    })

    .constant( 'VOTO', {
        favor: 1,
        contra: 2
    })
;