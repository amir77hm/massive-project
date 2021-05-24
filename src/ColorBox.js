import React, { Component } from 'react'
import CopyToClipboard from "react-copy-to-clipboard";


export default class ColorBox extends Component {

    state = { copied: false }

    changeCopyState = () => {
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false })
            }, 1500)
        })
    }

    render() {
        const isCopied = this.state.copied ? 'show' : ''
        return (
            <CopyToClipboard text={this.props.color} onCopy={this.changeCopyState}>
                <div className='color-box' style={{ backgroundColor: this.props.color }}>
                    <div className='box-container'>
                        <div className='box-content'>
                            <span className='name'>{this.props.name}</span>
                            <button className='more'>More</button>
                        </div>
                        <button className='copy'>copy</button>
                    </div>
                    <div className={`box-overlay ${isCopied}`} style={{ backgroundColor: this.props.color }}></div>
                    <div className={`copy-msg ${isCopied}`}>
                        <h2>Copied</h2>
                        <span>{this.props.color}</span>
                    </div>
                </div>
            </CopyToClipboard>
        )
    }
}
