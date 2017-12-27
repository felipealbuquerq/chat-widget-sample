import React, { Component } from 'react'
import Maximized from './Maximized'
import Minimized from './Minimized'
import { ThemeProvider, FixedWrapper, darkTheme, elegantTheme, purpleTheme, defaultTheme } from '@livechat/ui-kit'

const themes = {
    defaultTheme,
    purpleTheme,
    elegantTheme,
    darkTheme,
}

const commonThemeButton = {
    fontSize: '16px',
    padding: '1em',
    borderRadius: '1em',
    margin: '1em',
    cursor: 'pointer',
}

const themePurpleButton = {
    ...commonThemeButton,
    background: 'linear-gradient(to right, #6D5BBA, #8D58BF)',
    color: '#fff',  
}

const themeDarkButton = {
    ...commonThemeButton,
    background: 'rgba(0, 0, 0, 0.8)',
    color: '#fff',  
}

const themeDefaultButton = {
    ...commonThemeButton,
    background: '#427fe1',
    color: '#fff',  
}

const themeElegantButton = {
    ...commonThemeButton,
    background: '#000',
    color: '#D9A646',  
}


class App extends Component {
    state = {
        theme: 'defaultTheme'
    }
    
    handleThemeChange = ({ target }) => {
        console.log('target.name', target.name)
        this.setState({
            theme: target.name + 'Theme'    ,
        })
    }

    render() {
        return (
            <ThemeProvider theme={themes[this.state.theme]}>
                <div style={{
                    padding: '1em',
                    maxWidth: '700px',
                }}>
                    <h1>
                        Sample chat widget
                    </h1>
                    
                    <p>Sample chat widget built with <a href="https://docs.livechatinc.com/react-chat-ui-kit/">LiveChat React chat UI kit</a>. In this widget, <a href="https://www.botengine.ai/">BotEngine</a> handles the incoming chats. When the bot returns `LiveChat.transfer` action, the chat is transferred to a human agent together with the transcript of the initial conversation with the bot.</p>
                    <p>The sample app uses <a href="https://docs.livechatinc.com/visitor-sdk/">Visitor SDK</a> to communicate with LiveChat and <a href="https://docs.botengine.ai/api/introduction">the API</a> to connect with BotEngine.</p>
                    <h3>Change components theme:</h3>
                    <button id="theme-default" name="default" style={themeDefaultButton} onClick={this.handleThemeChange.bind(this)}>
                        default
                    </button>
                    <button id="theme-purple" name="purple" style={themePurpleButton} onClick={this.handleThemeChange.bind(this)}>
                        purple
                    </button>
                    <button id="theme-dark" name="dark" style={themeDarkButton} onClick={this.handleThemeChange.bind(this)}>
                        dark
                    </button>
                    <button id="theme-elegant" name="elegant" style={themeElegantButton} onClick={this.handleThemeChange.bind(this)}>
                        elegant
                    </button>
                    <FixedWrapper.Root maximizedOnInit>
                        <FixedWrapper.Maximized>
                            <Maximized {...this.props} />
                        </FixedWrapper.Maximized>
                        <FixedWrapper.Minimized>
                            <Minimized {...this.props} />
                        </FixedWrapper.Minimized>
                    </FixedWrapper.Root>
                </div>
			</ThemeProvider>
        )
    }
}

export default App
