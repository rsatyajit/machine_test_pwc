import React from 'react';

class Sublist extends React.Component {

    render() {
        return (
            <div className="card">
                <img src={`${this.props.thumbnail.path}.${this.props.thumbnail.extension}`} className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">{this.props.description}</p>
                </div>
            </div>
        )
    };
}

export default Sublist;