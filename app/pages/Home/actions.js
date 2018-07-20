const actions = {
    
    NEW_COMMAND: 'NEW_COMMAND',
    NEW_COMMAND_FAILED: 'NEW_COMMAND_FAILED',
    NEW_COMMAND_FULFILLED: 'NEW_COMMAND_FULFILLED',
    ADD_TO_COMMAND_LIST: 'ADD_TO_COMMAND_LIST',
    DIDNT_RECOGNIZE_COMMAND: 'DIDNT_RECOGNIZE_COMMAND',

    CMDS_CLEAR: 'CMDS_CLEAR',
    CMDS_HELP: 'CMDS_HELP',
    CMDS_HI: 'CMDS_HI',
    CMDS_MUSIC: 'CMDS_MUSIC',
    CMDS_FOOD: 'CMDS_FOOD',
    CMDS_DRINK: 'CMDS_DRINK',
    CMDS_COFFEE: 'CMDS_COFFEE',

    newCommand: command => ({
        type: actions.NEW_COMMAND,
        payload: {
            command
        }
    }),

    newCommandFailed: error => ({
        type: actions.NEW_COMMAND_FAILED,
        payload: { error }
    }),

    newCommandFulfilled: (type, command) => ({
        type,
        payload: { command }
    }),

}

export default actions