import React from "react";

import Questions from "../../components/Questions/Questions";
import Loading from "../../components/Loading/Loading";
import SpringModal from "../../components/Modal/Modal";



class CoronaTest extends React.Component{

    state = {
        is_submit: false,
        total: 0
    }

    handleLoader = (questions, is_submit) => {
        const total = questions.length ?
            questions.every((question) => question.value !== "") ?
                questions.reduce((a, b)=> ({value: Number.parseInt(a.value) + Number.parseInt(b.value)})).value : 0
                    :0;
        console.log("Total: ", total.value);
        this.setState({is_submit: is_submit, total: total});
    }

    render() {
        // const data = this.state.is_submit ? <Loading/> : <Questions handleLoader={this.handleLoader}/>;
        const data = this.state.is_submit ? <SpringModal total={this.state.total} handleLoader={this.handleLoader}/> : <Questions handleLoader={this.handleLoader}/>;
        return (
            <div>
                {data}
            </div>
        );
    }
}

export default CoronaTest;