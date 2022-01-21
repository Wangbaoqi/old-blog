import React from 'react';
import styled, { css } from 'styled-components';
import * as polished from 'polished';
import { reactLiveHome } from '../utils/theme';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

const StyledProvider = styled(LiveProvider)`
  border-radius: ${polished.rem(3)};
  box-shadow: 1px 1px 20px rgba(20, 20, 20, 0.27);
  overflow: hidden;
  margin-bottom: ${polished.rem(100)};
`;

const LiveBox = styled.section`

`

const LiveWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 -1rem;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const column = css`
  flex-basis: 50%;
  width: 50%;
  max-width: 50%;
  @media (max-width: 600px) {
    flex-basis: auto;
    width: 100%;
    max-width: 100%;
  }
`;

const StyledEditor = styled.div`
  background: var(--sp-colors-bg-default);
  font-family: inherit;
  font-size: ${polished.rem(14)};
  height: ${polished.rem(350)};
  max-height: ${polished.rem(350)};
  overflow: auto;
  ${column};
  * > textarea:focus {
    outline: none;
  }
`;

const StyledPreview = styled(LivePreview)`
  position: relative;
  padding: 1rem;
  background: white;
  border-left: 1px solid var(--sp-colors-fg-inactive);
  color: black;
  height: auto;
  overflow: hidden;
  ${column};
`;

const StyledError = styled(LiveError)`
  display: block;
  padding: ${polished.rem(8)};
  // background: #42374a;
  color: #ff5555;
  white-space: pre-wrap;
  text-align: left;
  font-size: 0.9em;
  font-family: inherit;
`;

const LiveEdit = ({ noInline, code }) => (
  <StyledProvider code={code} noInline={noInline} theme={reactLiveHome}>
    <div className='shadow-lg rounded-lg pb-8 -mx-48 bg-neutral-content'>
      <div className='flex justify-between p-2 pl-6 items-center relative z-10 border-b rounded-t-lg rounded-b-none'>
        <div>APP.js</div>
      </div>
      <div className='px-4'>
        <LiveWrapper>
          <StyledEditor>
            <LiveEditor />
          </StyledEditor>
          <StyledPreview />
          <StyledError />
        </LiveWrapper>
      </div>
    </div>
    
  </StyledProvider>
);

export default LiveEdit;