import { Component } from 'react';

import { isFloat } from '../core/common';

export class ChangingProgress extends Component {
  state = {
    index: 0,
  }
  
  values = [];
  intervalRef = null;

  componentDidMount() {
    const p = Math.abs(this.props.percentage);

    let v = [...Array(parseInt(p)).keys()];
    v.push(parseInt(p));
    if(isFloat(p)) {
      v.push(p);
    }

    this.values = v;

    this.intervalRef = setInterval(() => {
      if(this.state.index + 1 < this.values.length) {
        let i = this.state.index;
        this.setState({ index: i + 1 });
      } else {
        clearInterval(this.intervalRef);
      }
    }, 20);
  }

  componentWillUnmount() {
    clearInterval(this.intervalRef);
  }


  render() {
    return this.props.children(this.values[this.state.index] || 0);
  }
}

export default ChangingProgress