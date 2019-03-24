import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ViewportRestrict extends Component {
    render() {
        require(`./css/${this.props.type}.css`);
        return (
            <div 
                className="wp_pop" 
                style={{
                    backgroundColor: `${this.props.backgroundColor}`
                }}
            >
                <div className="wp_content">
                    <div 
                        className="wp_pop_img" 
                        style={{
                            backgroundImage: `url("${this.props.image}")`,
                            animation: !this.props.animation ? "initial" : `rotateA ${this.props.animationSpeed}ms ease infinite alternate`
                        }}></div>
                    <p className="wp_tips">{this.props.text}</p>
                </div>
            </div>
        );
    }
}

ViewportRestrict.defaultProps = {
    text: 'Silahkan buka di smartphone kamu atau putar smartphone kamu ke posisi vertical untuk visual yang lebih baik.',
    image: require('./img/scape.png'),
    animation: true,
    animationSpeed: 1500,
    backgroundColor: 'rgba(9, 18, 34, 1)'
};

ViewportRestrict.propTypes = {
    text: PropTypes.string,
    image: PropTypes.node,
    type: PropTypes.oneOf(['landscape', 'portrait', 'desktop_landscape']).isRequired,
    animation: PropTypes.bool,
    animationSpeed: PropTypes.number,
    backgroundColor: function(props, propName, componentName) {
        if (props[propName].indexOf('rgb') < 0) {
            if (props[propName].indexOf('#') < 0) {
                return new Error(
                    'Invalid prop `' + propName + '` supplied to' +
                    ' `' + componentName + '`. Only accept RGB or Hex code.'
                );
            }
        }
    },
}

export default ViewportRestrict;