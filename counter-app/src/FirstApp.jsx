import PropTypes from "prop-types";

export const FirstApp = ({ title, subTitle, name }) => {
    return(
        <div>
            <h1 data-testid="test-title">{ title }</h1>
            <h2>{ subTitle }</h2>
            <p>{ name }</p>
        </div>
    )
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'name',
    subTitle: 'subtitle',
    //title: 'Hello world'
}