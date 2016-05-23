function Core(dropdown, http) {
    var el;
    var self=this;

    this.init = function(inputFieldElement){
        self.el=inputFieldElement;
        inputFieldElement.addEventListener('keyup', self.keyup);
        // inputFieldElement.addEventListener('blur', self.blur);
        inputFieldElement.addEventListener('click', self.show);


    }

    this.keyup = function () {
        http.request(this.value);
            // console.log(http.response, http.response.lenght > 0);
        if (http.response.length > 0) {
            var object = JSON.parse(http.response);
            data = object;
        } else {
            data = '';
        }
        // console.log(object[0]);
        dropdown.showFromEl(self.el, data);
    }
    //
    // this.blur = function () {
    //     dropdown.hiddenEl(self.el)
    // }

    this.show = function () {
        if ( document.getElementById('dropDown')) {
            document.getElementById('dropDown').style.display = 'block';
        }
    }
}