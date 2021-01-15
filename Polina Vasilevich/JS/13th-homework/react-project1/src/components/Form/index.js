import React from 'react';

class Form extends React.Component {

    render() {
        return (
            <form className="form">
                <input type="text" className="input-name"/>
                <input type="email" className="input-password"/>
                <input type="password" className="input-comment"/>
               

            </form>
        )
    }
}

export default Form