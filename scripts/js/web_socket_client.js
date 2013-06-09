// Generated by CoffeeScript 1.6.3
(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  window.WebSocketClient = (function(_super) {
    __extends(WebSocketClient, _super);

    function WebSocketClient(uri, room, post_connected_actions) {
      this.uri = uri;
      this.room = room;
      this.post_connected_actions = post_connected_actions;
      this.connect(this.post_connected_actions);
    }

    WebSocketClient.prototype.connect = function(post_connected_actions) {
      var _this = this;
      this.post_connected_actions = post_connected_actions;
      this.ws = new WebSocket(this.uri);
      this.ws.onopen = function() {
        if (typeof _this.post_connected_actions === "function") {
          _this.post_connected_actions();
        }
        return _this.room.connection_established();
      };
      this.ws.onerror = function() {
        return _this.room.connection_lost();
      };
      this.ws.onclose = function() {
        return _this.room.connection_lost();
      };
      return this.ws.onmessage = function(message) {
        message = JSON.parse(message.data);
        return _this.room.message_received(message);
      };
    };

    WebSocketClient.prototype.send_message = function(message) {
      var str;
      str = JSON.stringify(message);
      return this.ws.send(str);
    };

    return WebSocketClient;

  })(WebSocket);

}).call(this);
