import React, { Fragment } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'react-bootstrap';
import LoadingSVG from '../assets/img/loading.svg';

const StyledRow = styled(Row)`
  flex-grow: 1;
  .loading-layer {
    display: none;
  }
  &.loading {
    position: relative;
    .loading-layer {
      z-index: 1000;
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background: transparent url(${LoadingSVG}) no-repeat center/contain;
      background-size: auto 50%;
    }
    > .col {
      opacity: 0.25;
      min-height: 300px;
    }
  }
  &.error > .col,
  &.pageNotFound > .col {
    display: flex;
    align-items: stretch;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    min-height: 300px;
  }
`;
const Loading = (props) => {
  const {
    id,
    loading,
    error,
    pageNotFound,
    children,
    container,
    fluid,
    style,
    className,
    childrenVisible,
  } = props;
  const ContentWrapper = container ? Container : Fragment;
  const ContentProps = container
    ? {
        fluid,
        className: `d-flex flex-grow-1 flex-column ${className}`,
        style,
        id,
      }
    : {};

  return (
    <ContentWrapper {...ContentProps}>
      <StyledRow
        className={
          loading
            ? 'loading'
            : error
            ? 'error'
            : pageNotFound
            ? 'pageNotFound'
            : ''
        }
      >
        <div className="loading-layer" />
        <Col>
          {error ? (
            <div>
              <h2 className="text-danger">Error Loading Page</h2>
              <h5>Please refresh to try again</h5>
            </div>
          ) : null}
          {pageNotFound ? (
            <div>
              <h2 style={{ fontSize: '10rem', lineHeight: '1' }}>404</h2>
              <h5>These are not the droids you are looking for.</h5>
            </div>
          ) : null}
          {(!loading && !error && !pageNotFound) || childrenVisible
            ? children
            : null}
        </Col>
      </StyledRow>
    </ContentWrapper>
  );
};

Loading.propTypes = {
  id: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  pageNotFound: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  container: PropTypes.bool,
  fluid: PropTypes.bool,
  childrenVisible: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  className: PropTypes.string,
};
Loading.defaultProps = {
  id: null,
  loading: true,
  error: false,
  pageNotFound: false,
  children: null,
  container: false,
  fluid: false,
  childrenVisible: false,
  style: {},
  className: '',
};

export default Loading;
