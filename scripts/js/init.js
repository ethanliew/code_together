// Generated by CoffeeScript 1.6.2
(function() {
  window.init_room = function(room_id, user_id) {
    if (window.room) {
      window.room.disconnect();
    }
    if (room_id && user_id) {
      window.location.href = window.location.origin + window.location.pathname + ("#room_id=" + room_id + "#user_id=" + user_id);
      return window.room = new Room('ws:185.4.65.79:9090', room_id, user_id);
    }
  };

  $(function() {
    var ids, room_id, user_id;

    ids = window.location.hash.split('#');
    if (ids.length === 3) {
      user_id = ids.pop().replace('user_id=', '');
      room_id = ids.pop().replace('room_id=', '');
      $('#room_id').val(room_id);
      $('#user_id').val(user_id);
      window.init_room(room_id, user_id);
    }
    return $('#go_form').on('submit', function() {
      window.init_room($('#room_id').val(), $('#user_id').val());
      return false;
    });
  });

}).call(this);
