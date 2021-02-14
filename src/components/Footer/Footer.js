import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer style={{position: 'absolute', bottom: '0', width: '100%', height: '60px', lineHeight: '60px', color: 'white', textAlign: 'center'}}>
                <div>
                    <span>Copyright © 2021. Outset App. All rights reserved.</span>
                </div>
            </footer>
        )
    }
}

export default Footer;