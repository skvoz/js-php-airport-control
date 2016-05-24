define(function(require){

    const ID="control";

    function init(){
        bindEvents();
    }

    function bindEvents(){
        //click
        document.getElementById(ID).addEventListener('click', function(){
            var list = require('./listItems');
            list.showOrCreate();
        }, false);
        //type
        document.getElementById(ID).addEventListener('keyup', function(){
            var http = require('./http');
            var list = require('./listItems');

            var params = {
                url: '/api/data',
                data: {'searchWord': this.value}
            };
            
            http.request(params, function(data) {
                list.setData(data);
                list.showOrCreate();
            });

        }, false);
    }

    function set(data) {
        var el = document.getElementById(ID).value = data;
    }

    return {
        init:init,
        set: set,
        id: ID,
    };
});