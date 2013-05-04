// Generated by CoffeeScript 1.6.2
(function() {
  window.InfoBar = (function() {
    function InfoBar($info_bar, room) {
      this.$info_bar = $info_bar;
      this.room = room;
      this.max_lines = 5;
    }

    InfoBar.prototype.report = function(message) {
      if (this.$info_bar.find('div').length >= this.max_lines) {
        this.$info_bar.find('div').first().remove();
      }
      return this.$info_bar.append("<div>" + (this.current_time()) + " : " + message + "</div>");
    };

    InfoBar.prototype.current_time = function() {
      var d;

      d = new Date();
      return this.build_time_string(d);
    };

    InfoBar.prototype.build_time_string = function(d) {
      var hours, mins, secs;

      hours = d.getHours();
      if (hours < 10) {
        hours = "0" + hours;
      }
      mins = d.getMinutes();
      if (mins < 10) {
        mins = "0" + mins;
      }
      secs = d.getSeconds();
      if (secs < 10) {
        secs = "0" + secs;
      }
      return "" + hours + ":" + mins + ":" + secs;
    };

    return InfoBar;

  })();

}).call(this);
