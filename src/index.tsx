import * as React from 'react';
import * as ReactDOM from 'react-dom';
import "./index.css";


interface AppState {
}

export class App extends React.Component<{}, AppState> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div>Hello App.</div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('react'));