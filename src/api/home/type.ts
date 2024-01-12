//首页轮播图参数类型
export type bannerType = {
  /**
   * 广告区域展示位置
   * 1 为首页（默认值）
   * 2 为商品分类页
   */
  distributionSite?: number
}
//猜你喜欢
export type guessLike = {
  /**
   * 页码默认值1
   */
  page?: number
  /**
   * 页大小默认是10
   */
  pageSize?: number
}
//推荐
export type Hot = {
  /**
   * 分页页码
   */
  page?: number
  /**
   * 分页数据每页条数
   */
  pageSize?: number
  /**
   * Tab 项的 id，默认查询全部 Tab 项的第 1 页数据
   */
  subType?: string
}
