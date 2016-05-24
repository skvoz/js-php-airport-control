define(function (require) {

    const ID = "listItems";
    const WRAPPER_ID = 'wrapper'
    var jsonData;

    function showOrCreate() {
        var el = document.getElementById(ID);
        var control = require('./control');
        var items = require('./items');

        var wrapperEl = document.getElementById(control.id);
        if (typeof el === 'undefined' || el === null) {
            var newText = document.createElement('div');
            newText.className = ID;
            newText.id = ID;
        } else {
            newText = document.getElementById(ID);
            //for open old list by click
            if (newText && newText.text != '') {
                newText.style.display = 'block';
            }
        }
        //for open old list by click
        if (newText && newText.text != '') {
            newText.innerHTML = items.render(jsonData);
            wrapperEl.parentNode.appendChild(newText);
            items.bindEvents();
        }
    }

    function hidden() {
        if (document.getElementById(ID)) {
            document.getElementById(ID).style.display = 'none';
        }
    }

    function setData(data) {
        jsonData = data;
    }

    return {
        showOrCreate: showOrCreate,
        hidden: hidden,
        setData: setData,
    };
});