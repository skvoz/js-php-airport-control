window.onload = function() {
    var element = document.getElementById('dest');
    var core = new Core(new DropDown('dropDown'), new Http());
    core.init(element);

    
    // document.getElementsByClassName('item').addEventListener('click', function(e) {
    //     e = e || window.event;
    //     var target = e.target || e.srcElement,
    //         text = target.textContent || text.innerText;
    //     console.log(target.textContent);
    // }, false);
}