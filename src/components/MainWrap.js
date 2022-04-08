import React from 'react'

export default class MainWrap extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <main className="main">
                {this.props.children}
            </main>
        )
    }
}