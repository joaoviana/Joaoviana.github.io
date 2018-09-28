import React from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

class ButtonContact extends React.Component {
    state = {
      value: 'joaopadraoviana@gmail.com',
      copied: false,
    };
   
    render() {
      return (
        <div>
          <div>
            <CopyToClipboard 
              text={this.state.value}
              onCopy={() => this.setState({copied: true})}>
              <button className="contact-button">Copy email to clipboard</button>
            </CopyToClipboard>
          </div>
   
          {this.state.copied ? 
              <span className='contact--button__copied'>Copied 😍</span> 
              : 
              null}
        </div>
      );
    }
  }
   
  export default ButtonContact;