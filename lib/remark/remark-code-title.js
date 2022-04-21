import { visit } from 'unist-util-visit'

export default function remarkCodeTitles() {
  return (tree) =>
    visit(tree, 'code', (node, index, parent) => {

      const { lang, meta = ''} = node;
      const nodeLang = node.lang || ''
      let language = ''
      let title = ''

      const props = {};

      // pList.reduce(())


      const blocks = meta.split(' ')

      node.properties = blocks.reduce((props, block) => {


        const [prop, value] = block.split('=')

        if (typeof value === 'undefined') {
          props.line = prop

          return props
        }

        props[prop] = value

        return props
      }, {})

    })
}
