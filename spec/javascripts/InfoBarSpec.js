describe('InfoBar', function() {
    var room;
    var info_bar;
    beforeEach(function(){
        room = new Room('ws:localhost:9090', 'test_room', 'test_user');
        info_bar = room.info_bar;
    });

    it('should be properly initialized', function(){
        expect(info_bar.room).toEqual(room);
        expect(info_bar.$info_bar).toBe('div')
    });

    it('should report', function(){
        info_bar.report('test message');
        expect(info_bar.$info_bar).toContainText('test message');
    });

    it('should build time string', function(){
        date = new Date('10.10.10 23:44:55');
        expect(info_bar.build_time_string(date)).toEqual('23:44:55');
        date = new Date('10.10.10 01:02:03');
        expect(info_bar.build_time_string(date)).toEqual('01:02:03')
    });


});