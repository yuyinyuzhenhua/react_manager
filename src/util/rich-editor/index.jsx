
import React        from 'react';
import Simditor     from 'simditor';
import 'simditor/styles/simditor.scss';
import './index.scss';

class RichEditor extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="rich-editor">
                <textarea ref="textarea"></textarea>
            </div>
        )
    }
}

export default RichEditor

