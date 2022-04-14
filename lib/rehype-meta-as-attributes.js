import { visit } from 'unist-util-visit'

export default function remarkCodeTitles() {
  return (tree) =>
    visit(tree, 'pre', (node, index, parent) => {
      const nodeLang = node.lang || ''
      let language = ''
      let title = ''

      
      if (nodeLang.includes(':')) {
        language = nodeLang.slice(0, nodeLang.search(':'))
        title = nodeLang.slice(nodeLang.search(':') + 1, nodeLang.length)
      }

      if (!title) {
        return
      }


      const className = 'remark-code-title'

      const titleNode = {
        type: 'mdxJsxFlowElement',
        name: 'div',
        attributes: [{ type: 'mdxJsxAttribute', name: 'className', value: className }],
        children: [{ type: 'text', value: title }],
        data: { _xdmExplicitJsx: true },
      }

      parent.children.splice(index, 0, titleNode)
      node.lang = language
    })
}


// var re = /\b([-\w]+)(?:=(?:"([^"]*)"|'([^']*)'|([^"'\s]+)))?/g

// module.exports = (options = {}) => {
// 	return (tree) => {
// 		visit(tree, 'element', visitor)
// 	}

// 	function visitor(node, index, parentNode) {
// 		let match

// 		if (node.tagName === 'pre') {
// 			const code = node.children.find((d) => d.tagName === 'code')

// 			if (code.properties.metastring) {
// 				code.properties.metastring.split(' ').forEach((item) => {
// 					const [metaKey, metaValue] = item.split('=')
// 					node.properties[metaKey] = metaValue || ''
// 				})
// 			}
// 		}
// 	}
// }
