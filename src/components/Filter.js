import React, {Component} from 'react';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(filter) {
        this.props.setFilter(filter);
    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div className="btns">
                <button onClick={() => this.clickHandler('all')}>All</button>
                <button onClick={() => this.clickHandler('done')}>Done</button>
                <button onClick={() => this.clickHandler('not-done')}>Not done</button>
            </div>
        )
    }
}

export default Filter;