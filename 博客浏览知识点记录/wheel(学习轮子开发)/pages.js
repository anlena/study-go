// 参数：当前页码、总页码数、当前页码面前后最多显示页码数
function showPages (page, total, show) {
    var str = page + '';
    for (var i = 1; i <= show; i++) {
        if (page - i > 1) {
            str = page - i + ' ' + str;
        }
        if (page + i < total) {
            str = str + ' ' + (page + i);
        }
    }
    if (page - (show + 1) > 1) {
        str = '... ' + str;
    }
    if (page > 1) {
        str = 1 + ' ' + str;
    }
    if (page + show + 1 < total) {
        str = str + ' ...';
    }
    if (page < total) {
        str = str + ' ' + total;
    }
    return str;
}

var total = 30;
for (var i = 0; i <= total; i++) {
    console.log(showPages(i, total));
}


//模仿jQuery $()
function $(selector,context){
    context = arguments.length > 1 ? context : document;
    return context ? context.querySelectorAll(selector) : null;
}

var Pagination = function(selector,pageOption){
    //默认配置
    this.options = {
        curr:1,
        pageShow:2,
        ellipsis:true,
        hash:false
    };
    //合并配置
    extend(this.options,pageOption,true);
    //分页器元素
    this.pageElement = $(element)[0];
    //数据总数
    this.dataCount = this.options.count;
    //当前页码
    this.pageNumber = this.options.curr;
    //总页数
    this.pageCount = Math.ceil(this.options.count / this.options.limit);
    //渲染
    this.renderPages();
    //执行回调函数
    this.options.callback && this.options.callback({
        curr:this.pageNumber,
        limit:this.options.limit,
        isFirst:true
    });
    //改变页数并触发事件
    this.changePage();
}

Pagination.prototype = {
    constructor:Pagination,
    changePage:function(){
        var self = this;
        var pageElement = self.pageElement;
        EventUtil.addEvent(pageElement,'click',function(ev){
            var e = ev || window.event;
            var target = e.target || e.srcElement;
            if(target.nodeName.toLocaleLowerCase() == "a"){
                if(target.id === "prev"){
                    self.prevPage();
                }else if(target.id == "next"){
                    self.nextPage();
                }else if(target.id == "first"){
                    self.firstPage();
                }else if(target.id == "last"){
                    self.lastPage();
                }else if(target.id == "page"){
                    self.goPage(parseInt(target.innerHTML));
                }else{
                    return;
                }
                self.renderPages();
                self.options.callback && self.options.callback({
                    curr:self.pageNumber,
                    limit:self.options.limit,
                    isFirst:false
                });
                self.pageHash();
            }
        })
    }
}

return Pagination;