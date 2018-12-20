import React from 'react';
import DemoBlock from 'docs/mobileComponents/DemoBlock';
import Badge from '../index';

export default () => (
  <div>
    <DemoBlock title="dot and overflowCount" className="has-padding">
      <Badge dot>
        <span style={{ width: '26px', height: '26px', background: '#ddd', display: 'inline-block' }} />
      </Badge>
      <span style={{ marginRight: 30 }} />
      <Badge text={77} overflowCount={55} />
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
    <DemoBlock title="dot and overflowCount" className="has-padding">
      <Badge text="new" style={{ marginLeft: 12 }} />
      <Badge text="惠" hot style={{ marginLeft: 12 }} />
    </DemoBlock>

    <DemoBlock title="orther color" className="has-padding">
      <Badge text="券" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#f19736', borderRadius: 2 }} />
      <Badge text="NEW" style={{ marginLeft: 12, padding: '0 3px', backgroundColor: '#21b68a', borderRadius: 2 }} />
      <Badge text="自动缴费"
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
