import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewportRestrict extends Component {
    render() {
        require(`lib/css/${this.props.type}.css`);
        return (
            <div className="wp_pop">
                <div className="wp_content">
                    <div className="wp_pop_img"></div>
                    <p className="wp_tips">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

ViewportRestrict.defaultProps = {
    text: 'Silahkan buka di smartphone kamu atau putar smartphone kamu ke posisi vertical untuk visual yang lebih baik.'
};

ViewportRestrict.propTypes = {
    text: PropTypes.string,
    type: PropTypes.oneOf(['landscape', 'portrait', 'desktop_landscape']).isRequired
}

export default ViewportRestrict;