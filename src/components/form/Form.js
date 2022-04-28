import React from 'react';

const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'red',
    flexDirection: 'column',
};

const formStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
}

function Form() {

    const handleOnSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div style={styles} className="form">
            <form style={formStyle} onSubmit={(e) => handleOnSubmit(e)} autoComplete="off">
                <label for="firstInput" />
                <input name="firstInput" type="text" placeholder="text1"/>
                <label for="secondInput" />
                <input name="secondInput" type="text" placeholder="text2" />
                <div>
                    <input type="submit" value="Send" />
                    <input type="reset" value="Clear" />
                </div>
            </form>
        </div>
    )
}

export default Form;