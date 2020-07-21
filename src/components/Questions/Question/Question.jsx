import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import CenteredGrid from "../../Grid/Grid";

export default function Question({question, number, handleChange}) {
    return (
        <CenteredGrid>
            <FormControl component="fieldset">
                <FormLabel component="legend">{number+1}) {question.question_bn} ({question.question_en})</FormLabel>
                <RadioGroup  value={question.value} onChange={(e)=>handleChange(e.target.value, number)}>
                    <FormControlLabel value={question.yes} control={<Radio />} label={"হ্যাঁ (Yes)"} />
                    <FormControlLabel value={question.no} control={<Radio />} label={"না (No)"} />
                </RadioGroup>
            </FormControl>
        </CenteredGrid>

    );
}
