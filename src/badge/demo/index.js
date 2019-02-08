import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Badge from '../index';

export default () => (
  <div>
    <DemoBlock title="基本" className="has-padding">
      <Badge dot>
        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
      </Badge>
      <span style={{ marginRight: 30 }} />
      <Badge text={66} overflowCount={33} />
      <Badge text="新" style={{ marginLeft: 12 }} />
      <Badge text="好" hot style={{ marginLeft: 12 }} />
    </DemoBlock>

    {/* <DemoBlock title="dot and overflowCount" className="has-padding">
      <div>
        <Badge text="促" corner>
          <div className="corner-badge">Use corner prop</div>
        </Badge>
      </div>
      <div>
        <Badge text="促" corner />
      </div>
      <Badge text="促" />
      <Badge text={0} style={{ marginLeft: 12 }}>Text number 0</Badge>
    </DemoBlock> */}
    <DemoBlock title="其他颜色" className="has-padding">
      <Badge text="热血" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />
      <Badge text="玄幻" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
      <Badge text="科幻"
        style={{
            marginLeft: 12,
            padding: '0 3px',
            backgroundColor: '#fff',
            borderRadius: 2,
            color: '#f19736',
            border: '1px solid #f19736',
          }}
      />
    </DemoBlock>


  </div>
);
