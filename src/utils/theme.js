export const reactLiveHome = {
  plain: {
    color: 'var(--theme-plain)'
  },
  styles: [
    {
      types: ['attr-equals', 'attr-value', 'script'],
      style: {
        color: 'var(--theme-plain)'
      }
    },
    {
      types: ['function'],
      style: {
        color: 'var(--theme-definition)'
      }
    },
    {
      types: ['string'],
      style: {
        color: 'var(--theme-string)'
      }
    },
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: 'var(--theme-comment)'
      }
    },
    {
      types: ['property', 'tag', 'boolean', 'number', 'constant', 'symbol'],
      style: { color: 'var(--theme-tag)' }
    },
    {
      types: ['attr-name', 'char', 'builtin', 'insterted', 'parameter'],
      style: {
        color: 'var(--theme-property)'
      }
    },
    {
      types: [
        'operator',
        'entity',
        'url',
        '',
        'variable',
        'language-css',
        
      ],
      style: {
        // color: 'hsl(40, 90%, 70%)'
      }
    },
    {
      types: ['deleted'],
      style: {
        color: 'rgb(255, 85, 85)'
      }
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic'
      }
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'bold'
      }
    },
    {
      types: ['regex', 'important'],
      style: {
        color: '#e90'
      }
    },
    {
      types: ['atrule', '', 'keyword', ''],
      style: {
        color: 'var(--theme-keyword)'
      }
    },
    {
      types: ['punctuation', 'symbol'],
      style: {
        // opacity: '0.7'
      }
    }
  ]
};