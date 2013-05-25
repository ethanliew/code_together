// Generated by CoffeeScript 1.6.2
(function() {
  $(function() {
    var hide_room, ids, room_id, show_room, user_id;

    show_room = function() {
      $('#no_room').hide();
      $('#content').show();
      return $('#sidebar').show();
    };
    hide_room = function() {
      $('#no_room').show();
      $('#content').hide();
      return $('#sidebar').hide();
    };
    ids = window.location.hash.split('#');
    if (ids.length === 3) {
      user_id = ids.pop().replace('user_id=', '');
      room_id = ids.pop().replace('room_id=', '');
      $('#room_id').val(room_id);
      $('#user_id').val(user_id);
      if (room_id && user_id) {
        window.room = new Room('ws:thawing-garden-2267.herokuapp.com:9090', room_id, user_id);
        show_room();
      }
    } else {
      hide_room();
    }
    return $('#go_form').on('submit', function() {
      room_id = $('#room_id').val();
      user_id = $('#user_id').val();
      if (room_id && user_id) {
        window.location.href = window.location.origin + window.location.pathname + ("#room_id=" + room_id + "#user_id=" + user_id);
        window.location.reload();
      }
      return false;
    });
  });

}).call(this);
