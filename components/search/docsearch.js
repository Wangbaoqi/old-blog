import { DocSearch } from '@docsearch/react';
import cn from 'classnames';


const SearchDoc = ({
  type = ''
}) => {

  const cls = cn('w-full rounded docSearch', {
    'mb-0 bg-transparent docSearch-top': type === 'top',
    'mb-5 bg-third-bg h-12': type !== 'top'
  })

  return (
    <div className={cls}>
      <DocSearch
        appId="BOCE4DN1H2"
        apiKey="3a89b1923593fa3a67271f30c9ca1c98"
        indexName="wangbaoqi"
        placeholder="quick search"
      />
    </div>
    
  );
}

export default SearchDoc;