import React, { useState } from 'react';
import Tabs from 'react-simply-tabs';

const tablist = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return(
    <Tabs
      activeTabIndex={activeTabIndex}
      onRequestChange={setActiveTabIndex}
      controls={[
        <button type="button">
          Show 1
        </button>,
        <button type="button">
          Show 2
        </button>,
        <button type="button">
          Show 3
        </button>,
      ]}
    >
      <div>1 tab</div>

      <div>2 tab</div>

      <div>3 tabs</div>
    </Tabs>
  );
};