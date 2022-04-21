export const syntaxTheme = {
  plain: {
    color: 'var(--syntax-txt)',
    backgroundColor: 'transparent',
    padding: 0,
    fontFamily: 'var(--font-family-mono)',
  },
  styles: [
    {
      types: ['prolog', 'comment', 'doctype', 'cdata'],
      style: {
        color: 'var(--syntax-comment)',
      },
    },
    {
      types: ['property', 'tag', 'deleted', 'constant', 'symbol'],
      style: { color: 'var(--syntax-prop)' },
    },
    {
      types: ['boolean', 'number'],
      style: { color: 'var(--syntax-bool)' },
    },
    {
      types: ['attr-name', 'tag'],
      style: { fontWeight: 'var(--font-weight-medium)' },
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: 'var(--syntax-val)',
      },
    },
    {
      types: [
        'operator',
        'entity',
        'url',
        'string',
        'variable',
        'language-css',
        'keyword',
      ],
      style: {
        color: 'var(--syntax-str)',
      },
    },
    {
      types: [
        'selector',
        'attr-name',
        'char',
        'builtin',
        'insert',
        'script-punctuation',
      ],
      style: {
        color: 'var(--syntax-name)',
      },
    },
    {
      types: ['deleted'],
      style: {
        color: 'var(--syntax-del)',
      },
    },
    {
      types: ['italic'],
      style: {
        fontStyle: 'italic',
      },
    },
    {
      types: ['important', 'bold'],
      style: {
        fontWeight: 'var(--font-weight-bold)',
      },
    },
    {
      types: ['regex', 'important'],
      style: {
        color: 'var(--syntax-regex)',
      },
    },
    {
      types: ['atrule', 'function'],
      style: {
        color: 'var(--syntax-fn)',
      },
    },
    {
      types: ['symbol'],
      style: {
        opacity: '0.7',
      },
    },
    {
      types: ['string'],
      style: {
        fontWeight: 'var(--font-weight-medium)',
      },
    },
  ],
};
