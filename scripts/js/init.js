// Generated by CoffeeScript 1.6.2
(function() {
  $(function() {
    var ids, room_id, user_id;

    ids = window.location.hash.split('#');
    user_id = ids.pop().replace('user_id=', '');
    room_id = ids.pop().replace('room_id=', '');
    $('#room_id').val(room_id);
    $('#user_id').val(user_id);
    if (room_id && user_id) {
      window.room = new Room('ws:localhost:9090', room_id, user_id);
    }
    return $('#go_button').on('click', function() {
      room_id = $('#room_id').val();
      user_id = $('#user_id').val();
      if (room_id && user_id) {
        return window.location.href = window.location.origin + ("/#room_id=" + room_id + "#user_id=" + user_id);
      }
    });
  });

}).call(this);
