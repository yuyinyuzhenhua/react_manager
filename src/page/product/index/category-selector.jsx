
import React        from 'react';
import MUtil        from 'util/mm.jsx'
import Product      from 'service/product-service.jsx'
const _mm           = new MUtil();
const _product      = new Product();
import './category-selector.scss'



class CategorySelector extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstCategoryList   : [],
            firstCategoryId     : 0,
            secondCategoryList  : [],
            secondCategoryId    : 0
        }
    }

    componentDidMount(){
        this.loadFirstCategory()
    }

    componentWillReceiveProps(nextProps){
        let categoryIdChange = this.props.categoryId !== nextProps.categoryId,
        parentCategoryIdChange = this.props.parentCategoryId !== nextProps.parentCategoryId;
        if(!categoryIdChange && !parentCategoryIdChange){
            return;
        }
        // 假如只有一级品类
        if(nextProps.parentCategoryId === 0){
            this.setState({
                firstCategoryId     : nextProps.categoryId,
                secondCategoryId    : 0
            });
        }
        // 有两级品类
        else{
            this.setState({
                firstCategoryId     : nextProps.parentCategoryId,
                secondCategoryId    : nextProps.categoryId
            }, () => {
                parentCategoryIdChange && this.loadSecondCategory();
            });
        }
    }

    loadFirstCategory(){
        _product.getCategoryList().then(res => {
            this.setState({
                firstCategoryList: res
            })
        }).then(err => {
            _mm.errorTips(err)
        })
    }

    onFirstCategoryChange(e){
        if(this.props.readOnly){
            return;
        }

        let newValue = e.target.value || 0;
        this.setState({
            firstCategoryId     : newValue,
            secondCategoryId    : 0,
            secondCategoryList  : []
        }, () => {
            // 更新二级品类
            this.loadSecondCategory();
            this.onPropsCategoryChange();
        })
    }

    loadSecondCategory(){
        _product.getCategoryList(this.state.firstCategoryId).then(res => {
            this.setState({
                secondCategoryList : res
            });
        }, errMsg => {
            _mm.errorTips(errMsg);
        });
    }

    onSecondCategoryChange(e){
        if(this.props.readOnly){
            return;
        }
        let newValue = e.target.value || 0;
        this.setState({
            secondCategoryId     : newValue
        }, () => {
            this.onPropsCategoryChange();
        });
    }

    onPropsCategoryChange(){
        let categoryChangable = typeof this.props.onCategoryChange === 'function'
        if(this.state.secondCategoryId){
            categoryChangable && this.props.onCategoryChange(this.state.secondCategoryId, this.state.firstCategoryId)
        } else {
            categoryChangable && this.props.onCategoryChange(this.state.secondCategoryId, 0)
        }
    }
    

    render(){
        return (
            <div className="col-md-10">
                <select className="form-control cate-select"
                    value={this.state.firstCategoryId}
                    onChange={(e) => this.onFirstCategoryChange(e)}
                    readOnly={this.props.readOnly}>
                    <option value="">请选择一级分类</option>
                    {
                        this.state.firstCategoryList.map(
                            (category, index)=> <option value={category.id} key={index}>{category.name}</option>
                        )
                    }
                </select>
                {this.state.secondCategoryList.length ?
                    <select name=""className="form-control cate-select"
                        value={this.state.secondCategoryId}
                        onChange={(e) => this.onSecondCategoryChange(e)}
                        readOnly={this.props.readOnly}>
                        <option value="">请选择二级分类</option>
                        {
                            this.state.secondCategoryList.map(
                                (category, index)=> <option value={category.id} key={index}>{category.name}</option>
                            )
                        }
                    </select> : null
                }
            </div>
        )
    }
}

export default CategorySelector


