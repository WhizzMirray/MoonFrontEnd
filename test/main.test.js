import React from 'react';
import { shallow } from "enzyme";

import Button from '@material-ui/core/Button';
import Homepage from "../src/pages/Homepage.jsx";

describe('Component : <Homepage/>', () => {
    it('should work', () => {
        const wrapper = shallow(<Homepage/>);
        expect(wrapper.find(Button)).toHaveLength(2);
    });
    it('Typography should display "body1"',() => {
        const wrapper = shallow(<Homepage/>);
        let child = React.createElement(() => <p>body1</p>)
        expect(wrapper.find('Typography')).toHaveProperty('children');
    });
});

