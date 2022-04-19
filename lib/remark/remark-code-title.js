import { visit } from 'unist-util-visit'

export default function remarkCodeTitles() {
  return (tree) =>
    visit(tree, 'code', (node, index, parent) => {
      console.log(node, 'node');

      const { lang, meta = ''} = node;
      const nodeLang = node.lang || ''
      let language = ''
      let title = ''

      const props = {};

      // pList.reduce(())


      const blocks = meta.split(' ')
      console.log(node, 'node');

      node.properties = blocks.reduce((props, block) => {


        const [prop, value] = block.split('=')
        console.log(prop, value, 'block');

        if (typeof value === 'undefined') {
          props.line = prop

          return props
        }

        props[prop] = value

        return props
      }, {})
      console.log(node, 'node');

    })
}
