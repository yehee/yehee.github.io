import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
    <header
        style={{
            marginBottom: `1.45rem`,
        }}
    >
        <div
            style={{
                margin: `0 auto`,
                maxWidth: 960,
                padding: `1.45rem 1.0875rem`,
                display: `flex`,
                justifyContent: `space-between`,
            }}
        >
            <Link to="#School" style={{ color: `black`, textDecoration: `none` }}>{`school`}</Link>
            <Link to="#Projects" style={{ color: `black`, textDecoration: `none` }}>{`projects`}</Link>
            <h3 style={{ margin: 0, textAlign: `center`, }}>
                <Link
                    to="/"
                    style={{
                        color: `black`,
                        textDecoration: `none`,
                    }}
                >
                    {siteTitle}
                </Link>
            </h3>
            <Link to="#Highlights" style={{ color: `black`, textDecoration: `none` }}>{`highlights`}</Link>
            <Link to="#Contact" style={{ color: `black`, textDecoration: `none` }}>{`contact`}</Link>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
