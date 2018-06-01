import React, { Component } from 'react';


const asyncComponent = (importComponent) => {
    return (
        class  extends Component {
    
            state = {
                component:null
            }

            componentDidMount() {
                importComponent()
                .then(cmp=>{
                    console.log(cmp.default);
                    this.setState({component:cmp.default})
                })
            }
        
            render() {
                const ImportedCompoent = this.state.component;
                return ImportedCompoent ? <ImportedCompoent {...this.props} /> : null
            }
        }

    )
}




export default asyncComponent;