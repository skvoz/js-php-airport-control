define(function (require) {

    const CLASS = 'item';

    function bindEvents() {
        var items = document.getElementsByClassName(CLASS);
        if (items.length>0) {
            var control = require('./control');
            var listItems = require('./listItems');
            var http = require('./http');
            for (orderItem in items) {

                if (items[orderItem].addEventListener) {
                    items[orderItem].addEventListener('click', function (e) {

                        e = e || window.event;
                        var target = e.target || e.srcElement,
                            text = target.textContent || text.innerText;

                        control.set(text);

                        var params = {
                            url: '/api/send',
                            data: {'airPortKey': target.dataset.airportKey, 'airPortCode': target.dataset.airportCode}
                        };

                        http.request(params, function (data) {;
                            if (typeof data !== 'undefined') {
                                alert('callback from server: airport key=' + data.key+ ' and code='+data.code+' sending to server');
                            }
                        });

                        listItems.hidden();

                    }, false);
                }
            }
        }
    }

    function render(data) {
        var html = '';
        if (typeof  data !== 'undefined' && data.length > 0) {
            var data = JSON.parse(data);
            for (orderCity in data) {
                html += '<div style="border: 1px solid grey"><b data-airport-code="'+data[orderCity].iata+'" data-airport-key="'+data[orderCity].geoNodeId+'"class="airports item" >' + data[orderCity].city + '</b>';

                for (orderAirPorts in data[orderCity].relatedLocations) {

                    html += '<div class="airPorts airports item" data-airport-code="'+data[orderCity].relatedLocations[orderAirPorts].iata+'" data-airport-key="'+data[orderCity].relatedLocations[orderAirPorts].geoNodeId+'">' + data[orderCity].relatedLocations[orderAirPorts].name + ' ' + data[orderCity].relatedLocations[orderAirPorts].iata + '</div>';
                }
                html += '</div>';

            }
        }

        return html;
    }

    return {
        render: render,
        bindEvents: bindEvents,
    }
});