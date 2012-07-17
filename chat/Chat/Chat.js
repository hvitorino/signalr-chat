/// <reference path="../scripts/jquery-1.7.2.js" />
/// <reference path="../scripts/jquery.signalR-0.5.2.js" />

$(function () {
    var hub = $.connection.chat;

    var $historyEu = $("#historyEu");
    var $historyEuMesmo = $("#historyEuMesmo");
    var $historyIrene = $("#historyIrene");

    $.extend(hub, {
        receive: function (message) {
            $historyEu.append("<li>" + message + "</li>")
            $historyEuMesmo.append("<li>" + message + "</li>")
            $historyIrene.append("<li>" + message + "</li>")
        }
    });

    $("#sendEu").click(function () {
        hub.publish("eu", $("#eu").val());
    });

    $("#sendEuMesmo").click(function () {
        hub.publish("euMesmo", $("#euMesmo").val());
    });

    $("#sendIrene").click(function () {
        hub.publish("irene", $("#irene").val());
    });

    $("#subscribeToEu").click(function () {
        hub.subscribe("eu");
    });

    $("#subscribeToEuMesmo").click(function () {
        hub.subscribe("euMesmo");
    });

    $("#subscribeToIrene").click(function () {
        hub.subscribe("irene");
    });

    $.connection.hub.start();
});