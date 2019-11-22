import React from 'react';

import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as ErrorActions } from '../../store/ducks/erro';

import CloseIcon from '../../assets/images/close.svg';

import { Container } from './styles';

function ErrorBox({ error, hideError }) {
    return (
        <>
            {error.visible && (
                <Container>
                    <p>{error.message}</p>
                    <button type="button" onClick={hideError}>
                        <img src={CloseIcon} alt="Fechar" />
                    </button>
                </Container>
            )}
        </>
    );
}
const mapStateToProps = state => ({
    error: state.error,
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(ErrorActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBox);

ErrorBox.propTypes = {
    hideError: PropTypes.func.isRequired,
    error: PropTypes.shape({
        visible: PropTypes.bool,
        message: PropTypes.string,
    }).isRequired,
};
