import React from 'react';
import MySecondComponent from './MySecondComponent';

class MyFirstComponent extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from My First component</h1>
                <MySecondComponent />
            </div>
        );
    }
}
export default MyFirstComponent; 