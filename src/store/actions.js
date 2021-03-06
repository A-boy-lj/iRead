import * as types from './mutations-types'

export default {
   
    //下一章
     search({commit},value){
      commit(types.SEARCH_VALUE,value);
   }, 
    //书籍id
    setDetailId({commit},value){
      commit(types.DETAIL_ID,value);
   },
   //热标签
   setHotLabel({commit},value){
      commit(types.HOT_LABEL,value)
   },
   setSearchBtn({commit}){
      commit(types.SEARCH_BTN)
   },
   //搜索补充
   searchComplement({commit},value){
      commit(types.SEARCH_COMPLEMENT,value)
   },
   bookDetail({commit},value){
      commit(types.BOOK_DETAIL,value)
   },
   chapters({commit},value){
      commit(types.CHAPTERS,value)
   },
   toggleBar({commit}){
      commit(types.BAR)
   },     
   toggleListPanel({commit}){
      commit(types.LIST_PANEL)
   },  
   toggleSettingPanel({commit}){
      commit(types.SETTING_PANEL)
   },  
   toggleModel({commit}){
      commit(types.MODEL)
   },            
   curChapter({commit},value){
      commit(types.CURCHAPTER,value)
   }, 
   setFont({commit},value){
          commit(types.FONT_SIZE,value)
   },
   setBgColor({commit},value){
      commit(types.BG_COLOR,value)
   },    
   menuItem({commit},value) {
      commit(types.MENU_ITEM,value)
   }
}