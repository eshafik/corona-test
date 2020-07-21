import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
// import ReactLoading from "react-loading";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./legoloading.json";
import * as doneData from "./doneloading.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};
const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

class Loading extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: undefined
        };
    }

    componentDidMount() {
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(response => response.json())
                .then(json => {
                    this.setState({ loading: true });
                    setTimeout(() => {
                        this.setState({ done: true });
                    }, 2000);
                });
        }, 5000);
    }

    render() {
        const data = ["Submitting Your Data", "Analysing Your Data", "Preparing Your Report"];
        const category_name = [
            {name_bn: "ক্যাটাগরী-১", name_en: "Category-1"},
            {name_bn: "ক্যাটাগরী-২", name_en: "Category-2"},
            {name_bn: "ক্যাটাগরী-৩", name_en: "Category-3"},
            {name_bn: "তীব্রতা-১", name_en: "Severe Level-1"},
            {name_bn: "তীব্রতা-২", name_en: "Severe Level-2"},
            {name_bn: "তীব্রতা-৩", name_en: "Severe Level-3"},
        ]
        const total = this.props.total;
        let category_bn = '';
        let category_en = '';
        let corona = true;
        let no_report_bn = "কিংস কলেজ লন্ডনের গবেষণা অনুযায়ী করোনার লক্ষণসমূহ বিশ্লেষণ করে অনুমান করা যাচ্ছে যে, আপনি করোনা নেগেটিভ । সামাজিক দূরুত্ব মেনে চলুন।";
        let no_report_en = "According to a study by King's College London, Covid-19 symptoms are analyzed and it is assumed that you are in Covid-19 negative. Please keep social distance.";
        if(total<5){
            corona = false;
        }
        else if(total >=5 &&  total<8){
            category_bn = category_name[0].name_bn;
            category_en = category_name[0].name_en;
        }
        else if(total >=8 &&  total<9){
            category_bn = category_name[1].name_bn;
            category_en = category_name[1].name_en;
        }
        else if(total >=9 &&  total<12){
            category_bn = category_name[2].name_bn;
            category_en = category_name[2].name_en;
        }
        else if(total >=12 &&  total<14){
            category_bn = category_name[3].name_bn;
            category_en = category_name[3].name_en;
        }
        else if(total >=14 &&  total<17){
            category_bn = category_name[4].name_bn;
            category_en = category_name[4].name_en;
        }
        else{
            category_bn = category_name[5].name_bn;
            category_en = category_name[5].name_en;
        }
        let report_en = `According to a study by King's College London, Covid-19 symptoms are analyzed and it is assumed that you are in Covid-19 positive and  ${category_en}. Please test Covid-19 from the nearest designated hospital or institute as soon as possible and keep social distance`;
        let report_bn = `কিংস কলেজ লন্ডনের গবেষণা অনুযায়ী করোনার লক্ষণসমূহ বিশ্লেষণ করে অনুমান করা যাচ্ছে যে, আপনি করোনা পজিটিভ এবং ${category_bn} এর মধ্যে রয়েছেন। অতিসত্বর নিকটস্থ নির্ধারিত হাসপাতাল বা সংস্থা থেকে কভিড-১৯ টেস্ট করুন এবং সামাজিক দূরুত্ব মেনে চলুন।`;
        report_en = corona ? report_en: no_report_en;
        report_bn = corona ? report_bn: no_report_bn;
        return (
            <div>
                {!this.state.done ? (
                    <FadeIn>
                        {data.map((item)=>{
                            return (<div className="d-flex justify-content-center align-items-center">
                                <p>{item}...</p>
                                {!this.state.loading ? (
                                    <Lottie options={defaultOptions} height={120} width={120}/>
                                ) : (
                                    <Lottie options={defaultOptions2} height={120} width={120}/>
                                )}
                            </div>);
                        })}

                    </FadeIn>
                ) : <div>{report_bn} <br/> ({report_en})</div>}
            </div>
        );
    }
}

export default Loading;