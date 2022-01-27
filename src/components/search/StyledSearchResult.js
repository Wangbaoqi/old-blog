import styled, { css } from 'styled-components';
import SearchResult from './SearchResult';

const Popover = css`
  max-height: 50vh;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 2;
  margin-top: 0.5em;
  box-shadow: 0 0 5px 0;
  padding: 1em;
  border-radius: 2px;
`;

export default styled(SearchResult)`
  ${Popover}

  .HitCount {
    display: flex;
    justify-content: flex-end;
    color: ${({ theme }) => theme.foreground};
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
    }

    li.ais-Hits-item {
      margin-bottom: 1em;
      color: ${({ theme }) => theme.foreground};

      a {
        color: rgb(0, 122, 204);

        h4 {
          margin-bottom: 0.2em;
        }
      }
    }
  }
`;
