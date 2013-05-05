// Generated by CoffeeScript 1.6.2
(function() {
  window.Room = (function() {
    function Room(uri, room_id, user_id) {
      this.uri = uri;
      this.room_id = room_id;
      this.user_id = user_id;
      this.info_bar = new InfoBar($('#info_bar_div'), this);
      this.report('Initializing');
      this.credentials = {
        room_id: this.room_id,
        user_id: this.user_id
      };
      this.chat = new Chat($('#chat_div'), this);
      this.text_editor = new TextEditor($('#text_editor_div'), this);
      console.log('initializing chats');
      this.ws_client = new WebSocketClient(this.uri, this);
      this.report('Initialized Successfully');
    }

    Room.prototype.message_handelrs = function() {
      return {
        'chat': this.chat,
        'text_editor': this.text_editor,
        'info_bar': this.info_bar
      };
    };

    Room.prototype.report = function(message) {
      return this.info_bar.report(message);
    };

    Room.prototype.connection_established = function() {
      this.report('Connection Established');
      return this.send_credentials();
    };

    Room.prototype.connection_lost = function() {
      var reconnect,
        _this = this;

      this.report('Connection Lost');
      this.report('Reconnecting');
      reconnect = function() {
        return _this.ws_client.connect();
      };
      window.clearTimeout(window.reconnect_timeout);
      return window.reconnect_timeout = setTimeout(reconnect, 3000);
    };

    Room.prototype.send_credentials = function() {
      return this.ws_client.send_message({
        credentials: this.credentials
      });
    };

    Room.prototype.message_received = function(message) {
      var key, val, _ref, _results;

      _ref = this.message_handelrs();
      _results = [];
      for (key in _ref) {
        val = _ref[key];
        if (message[key]) {
          _results.push(val.message_received(message[key]));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    Room.prototype.send_chat_message = function(mes) {
      var message;

      message = {
        chat: {
          text: mes
        }
      };
      return this.ws_client.send_message(message);
    };

    Room.prototype.send_text_editor_message = function(mes) {
      var message;

      message = {
        text_editor: mes
      };
      return this.ws_client.send_message(message);
    };

    return Room;

  })();

}).call(this);
