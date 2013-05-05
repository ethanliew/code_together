window.init_room = (room_id, user_id) ->
  if room_id && user_id
    window.location.href = window.location.origin + window.location.pathname + "#room_id=#{room_id}#user_id=#{user_id}"
    window.room = new Room('ws:185.4.65.79:9090', room_id, user_id)
#   window.room = new Room('ws:localhost:9090', room_id, user_id)

$ ->
  ids = window.location.hash.split('#')
  if ids.length == 3
    user_id = ids.pop().replace('user_id=', '')
    room_id = ids.pop().replace('room_id=', '')
    $('#room_id').val(room_id)
    $('#user_id').val(user_id)
    window.init_room(room_id, user_id)

  $('#go_form').on 'submit', ->
    window.init_room($('#room_id').val(), $('#user_id').val())
    false