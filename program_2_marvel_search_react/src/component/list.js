import React from 'react';
import { modelHandler } from "../model/modelHandler";
import Sublist from './Sublist';

class List extends React.Component {
    state = {
        search_text: "",
        data: []
    };

    componentDidMount() {
        this.bindingData();
    }

    dropDownHandler = (event) => {

    }
    searchHandler = (event) => {
        let value = event.target.value;
        this.setState({
            'search_text': value
        }, () => this.bindingData());
    }


    bindingData = () => {
        let options = {};
        console.log(this.state.search_text);
        if (this.state.search_text) {
            options.nameStartsWith = this.state.search_text
        }
        let url = new modelHandler().urlHandler(options)
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        data: result.data.results
                    })
                })
    }



    render() {
        let sublist = this.state.data.map((item) =>
            <Sublist
                thumbnail={item.thumbnail}
                name={item.name}
                description={item.description} />
        )
        return (
            <div className="sections_all_listing">
                <div className="">
                    <div className="contents_search">
                        <input type="text" className="search_field" name="search" onChange={this.searchHandler} value={this.state.search_text} />
                    </div>
                </div>
                <div className="form_section ">
                    <div className="table-responsive">
                        <div className="card-columns">
                            {sublist}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default List;