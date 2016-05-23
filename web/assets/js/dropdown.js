function DropDown(blockId) {
    var self=this;
    // this.eventsHandle();
    this.showFromEl = function(el, data) {
        if (typeof document.getElementById(blockId) === 'undefined' || document.getElementById(blockId) === null) {
            var newText = document.createElement('div');
        }  else {
            newText = document.getElementById(blockId);
        }
        newText.className = blockId;
        newText.id = blockId;
        if (data != '') {
            var airPorts = data.relatedLocations;
            html = '';
            for(orderCity in data) {
                html += '<b class="airports">' + data[orderCity].city + '</b>';

                for(orderAirPorts in data[orderCity].relatedLocations) {
                    html += '<div class="airPorts airports">'+data[orderCity].relatedLocations[orderAirPorts].name + ' ' + data[orderCity].relatedLocations[orderAirPorts].iata+'</div>';
                }

            }

            newText.innerHTML = '<div>'+
                html
                '</div>';
            el.parentNode.appendChild(newText);

            var airports = document.getElementsByClassName('airports');
          
            for(orderItem in airports) {
                var el = airports[orderItem];

                el.addEventListener('click', function(e) {

                    e = e || window.event;
                    var target = e.target || e.srcElement,
                        text = target.textContent || text.innerText;

                    $("#dest").val(text);
                    console.log(text);
                    self.hiddenEl(blockId);

                }, false);
            }

        }

    }

    //TODO use as callback
    this.hiddenEl = function (el) {
        if (document.getElementById( blockId )) {
            document.getElementById( blockId ).style.display = 'none';
        }
    }
}

