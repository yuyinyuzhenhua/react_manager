
import MUtil        from 'util/mm.jsx'

const _mm   = new MUtil();

class Product{
    getProductList(listParam){
        let url ='',
            data = {}
        if(listParam.listType === 'list') {
            url                         = '/manage/product/list.do';
            data.pageNum  = listParam.pageNum
        } else if (listParam.listType === 'search'){
            url = '/manage/product/search.do';
            data.pageNum                = listParam.pageNum;
            data[listParam.searchType]  = listParam.keyword;
        }
        return _mm.request({
            url,
            type: 'post',
            data
        })
    }
}


export default Product

