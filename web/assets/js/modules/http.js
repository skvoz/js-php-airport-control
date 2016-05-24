define(function () {

    function request(params, callback) {
        $.ajax({
            type: 'post',
            url: params.url,
            dataType: "json",
            data: params.data,
            success: callback,
        });
    }

    return {
        request: request,
    }
});