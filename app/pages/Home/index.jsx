import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Help from './Help'
import Music from './Music'
import Food from './Food'
import Drink from './Drink'
import Coffee from './Coffee'

import './styles.less'

import actions from './actions'
import * as selectors from './selectors'

class Home extends Component {

    state = {
        input: '',
        userHistoryIndex: 0
    }

    componentDidMount() {
        document.getElementById("input-field").focus()
    }

    componentDidUpdate(prevProps) {
        if (this.props.commandHistory.length > prevProps.commandHistory.length) {
            const element = document.getElementById("text-window")
            element.scrollTop = element.scrollHeight
        }
    }

    onSubmit = (e) => {
        e.preventDefault()
        const { newCommand } = this.props
        newCommand(this.state.input)
        this.setState({
            input: ''
        })
    }
    
    handleChange = (e) => {
        if (e.target.value.length > 84) return
        this.setState({
            input: e.target.value
        })
    }
    
    setAutoFocus = () => {
        document.getElementById("input-field").focus()
    }

    handleOnKeyPress = (e) => {
        const { userHistory } = this.props
        const { input, userHistoryIndex } = this.state
        if (e.keyCode === 38 && !input && (userHistoryIndex <= userHistory.length)) {
            console.log(userHistory[userHistoryIndex]);
            this.setState({
                input: userHistory[userHistoryIndex].text,
                userHistoryIndex: userHistoryIndex + 1
            })
        } else if (e.keyCode === 40 && (userHistoryIndex >= 0)) {
            console.log(userHistory[userHistoryIndex]);
            this.setState({
                input: userHistory[userHistoryIndex].text,
                userHistoryIndex: userHistoryIndex - 1
            })
        }
    }

    render() {
        const {

        } = this.state
        const {
            commandHistory
        } = this.props
        return (
            <div className="mac-window" onClick={this.setAutoFocus}>
                <div className="window-control-bar">
                    <div className="window-control red"></div>
                    <div className="window-control yellow"></div>
                    <div className="window-control green"></div>
                </div>
                <div id="text-window" className="text-window">
                    <div>
                        {commandHistory.map((item, index) => {
                            if (item.text === 'CMDS_HELP') {
                                return (
                                    <Help key={`${item.text}-${index}`} />
                                )
                            } else if (item.text === 'CMDS_MUSIC') {
                                return (
                                    <Music key={`${item.text}-${index}`} />
                                )
                            } else if (item.text === 'CMDS_FOOD') {
                                return (
                                    <Food key={`${item.text}-${index}`} />
                                )
                            } else if (item.text === 'CMDS_DRINK') {
                                return (
                                    <Drink key={`${item.text}-${index}`} />
                                )
                            } else if (item.text === 'CMDS_COFFEE') {
                                return (
                                    <Coffee key={`${item.text}-${index}`} />
                                )
                             } else {
                                return (
                                    <div key={`${item.text}-${index}`} className="shell-line">
                                        <div className="shell-text">
                                            {item.text}
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <div className="shell-line-input">
                        <form onSubmit={this.onSubmit} style={{ width: '100%' }}>
                            <input
                                id="input-field"
                                className="input"
                                type="text"
                                onChange={this.handleChange}
                                value={this.state.input}
                                onKeyDown={this.handleOnKeyPress}
                            />
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    commandHistory: selectors.getCommandHistory(state),
    userHistory: selectors.getUserHistory(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    newCommand: (command) => dispatch(actions.newCommand(command))
})

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(Home))