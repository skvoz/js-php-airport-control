function Http() {
    this.response = false;
    this.request();
};

Http.prototype.request = function (searchWord) {
    var self=this;
    var url = '/api/data/'+searchWord;
    $.ajax({
        type: 'post',
        url: url,
        dataType: "json",
        success: function(data) {
            self.response = data;
        }
    });
}
