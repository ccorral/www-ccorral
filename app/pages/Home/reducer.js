import actions from './actions';

export const initialState = {
    commandHistory: [
        { text: 'CMDS_HELP' },
        // { text: 'Hello! Welcome to Carlos' website }
    ],
    userHistory: [
        { text: 'Arrow up for more commands' }
    ]
};


export function homeReducer(state = initialState, { type, payload }) {
    switch (type) {
        case actions.NEW_COMMAND:
            return {
                ...state,
                commandHistory: [
                    ...state.commandHistory,
                    { text: payload.command }
                ]
            };
        case actions.ADD_TO_COMMAND_LIST:
            return {
                ...state,
                commandHistory: [
                    ...state.commandHistory,
                    { text: payload.command }
                ]
            };
        case actions.CMDS_CLEAR:
            return {
                ...state,
                commandHistory: []
            };
        case actions.CMDS_HI:
            return {
                ...state,
                commandHistory: [
                    ...state.commandHistory,
                    { text: 'Oh Hi!' }
                ]
            };
        case actions.CMDS_HELP:
            return {
                ...state,
                commandHistory: [
                    ...state.commandHistory,
                    { text: 'CMDS_HELP' }
                ]
            };
        case actions.DIDNT_RECOGNIZE_COMMAND:
            return {
                ...state,
                commandHistory: [
                    ...state.commandHistory,
                    { text: "Sorry, didn't recognize that command. Please use the --help command." }
                ]
            };
        default:
            return state;
    }
}
