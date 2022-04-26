

export const pagenationInit = (curPage, totalPage) => {

  if (totalPage < 5) {
    return [1, 2, 3, 4]
  } else {
    if (curPage < 4) {
      return [1, 2, 3, 4, '...', totalPage]
    }else if (curPage >= 4 && curPage <= totalPage - 3) {
      return [1, '...', curPage - 1, curPage, curPage + 1, '...', totalPage]
    } else {
      return [1, '...', totalPage - 3, totalPage - 2, totalPage - 1, totalPage]
    }
  }
}