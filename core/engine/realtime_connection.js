const io = require(SocketIO);

const onConnected;
const onDisconnected;
const showFetures;
const action; 

function sessionController(session) {
    session.on('connection', onConnected);
    session.on('disconnect', onDisconnected);
    session.on('showFetures', showFetures);
    session.on('action', action);
}

module.exports = function(server){
    const flow = io(server);

    flow.on('connection', session =>{
        sessionController(session);
    });
}