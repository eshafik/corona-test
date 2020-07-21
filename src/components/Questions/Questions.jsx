import React from 'react';

import Question from "./Question/Question";
import ContainedButtons from "../Button/Button";
import SpringModal from "../Modal/Modal";

class Questions extends React.Component{
    state = {
        value: "0",
        questions: [
            {
                question_bn: "আপনি কি জ্বরে ভুগছেন?",
                question_en: "Are you suffering from fever?",
                yes: "1",
                no: "0",
                value: ""
            },
            {
                question_bn: "আপনার কি গলা, বুকে, পেশিতে ব্যাথা এবং মাথা ব্যাথা রয়েছে?",
                question_en: "Do you have sore throat, chest pain and headache?",
                yes: "2",
                no: "0",
                value: ""
            },
            {
                question_bn: "আপনার কি ঘ্রাণ শক্তি লোপ পেয়েছে?",
                question_en: "Have you lost your sense of smell?",
                yes: "2",
                no: "0",
                value: ""
            },
            {
                question_bn: "আপনার কি ক্ষুধামন্দা/ খাবারের প্রতি অনীহা রয়েছে?",
                question_en: "Do you have anorexia / aversion to food?",
                yes: "1",
                no: "0",
                value: ""
            },
            {
                question_bn: "আপনার কি কণ্ঠস্বরের কোন পরিবর্তন হয়েছে?",
                question_en: "Has there been any change in your voice?",
                yes: "1",
                no: "0",
                value: ""
            },
            {
                question_bn: " আপনার কি কাশি রয়েছে?",
                question_en: "Do you have cough?",
                yes: "1",
                no: "0",
                value: ""
            },
            {
                question_bn: "আপনার কি ডায়েরিয়ার মতো পায়খানা হচ্ছে?",
                question_en: "Do you have diarrhea?",
                yes: "2",
                no: "0",
                value: ""
            },
            {
                question_bn: "আপনি কি বর্তমানে খুবই ক্লান্তি/অবসাদ অনুভব করছেন?",
                question_en: "Are you currently feeling very tired / exhausted?",
                yes: "2",
                no: "0",
                value: ""
            },
            {
                question_bn: "আপনি কি নিজের মানসিক অবস্থার উপর নিয়ন্ত্রণ হারিয়ে ফেলেন মাঝে মাঝে?",
                question_en: "Do you sometimes lose control of your mood?",
                yes: "2",
                no: "0",
                value: ""
            },
            {
                question_bn: "আপনার কি শ্বাসকষ্ট হচ্ছে?",
                question_en: "Do you have shortness of breath?",
                yes: "3",
                no: "0",
                value: ""
            },
            {
                question_bn: "তলপেটে ব্যাথা অনুভব করছেন?",
                question_en: "Feeling lower abdominal pain?",
                yes: "3",
                no: "0",
                value: ""
            }

        ]
    }
    handleChange = (value, index) => {
        this.setState({value: value})
        let tempQuestions = {...this.state.questions};
        tempQuestions[index].value = value;
        console.log("temp: ", tempQuestions);
        this.setState({tempQuestions});
        console.log("value: ", Number.parseInt(value), "index: ", index);
        console.log("questions: ", this.state.questions);
    };


    render() {
        console.log("render: ", this.state.value);
        const selectedAll = this.state.questions.every((question) => question.value !== "");

        return (
            <div>
                <div>
                    {this.state.questions.map((question, index)=> <Question
                        key={index}
                        question={question}
                        number={index}
                        value={this.state.value}
                        handleChange = {this.handleChange}
                    />)}
                </div>
                <div>
                    {/*<SpringModal is_enable={selectedAll} handleLoader={this.props.handleLoader}/>*/}
                    <ContainedButtons
                        is_enable={selectedAll}
                        handleLoader={this.props.handleLoader}
                        questions={this.state.questions}
                    />
                </div>
            </div>

        );
    }

}

export default Questions