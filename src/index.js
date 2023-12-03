import ReactDOM from 'react-dom';
import React, {Component} from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    handleIncrement = () => {
        this.setState({counter: this.state.counter + 1});
    };

    handleDecrement = () => {
        this.setState({counter: this.state.counter - 1});
    }

    render() {
        return (
            <div>
                <h1>Счетчик</h1>
                <div>
                    <button onClick={this.handleIncrement}>"Увеличиваем"</button>
                    <p>{this.state.counter}</p>
                    <button onClick={this.handleDecrement}>"Уменьшаем"</button>
                </div>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Counter/>
);

