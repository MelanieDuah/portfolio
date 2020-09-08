import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="row fixed-bottom">
                <div className="col-md-12 d-flex justify-content-center">
                    <div className="ending">
                        <span className="h5 text-light">&copy; All rights reserved </span>
                    </div>
                </div>
            </footer>
        )
    }
}
export default Footer;