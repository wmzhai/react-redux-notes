import React, { Component } from 'react';

export default function(ComposedComponent) {
  class Authentication extends Component {
    render(){
      //这里的props是最后组合的Component实例化时传进来的props
      return <ComposedComponent {...this.props} />; 
    }
  }

  return Authentication;
}