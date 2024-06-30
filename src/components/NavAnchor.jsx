import { Anchor } from 'antd';

const { Link } = Anchor;

const NavAnchor = () => (
  <>
    <div
      style={{
        backgroundColor: 'transparent',
        padding: '20px',
        color:'white',
      }}
    >
      <Anchor direction="horizontal">
        <Link key="part-1" href="#part-1" title="Lighthouse" style={{color:'white'}} />
        <Link key="part-2" href="#part-2" title="BTSolve" />
        <Link key="part-3" href="#part-3" title="Rapid" />
      </Anchor>
    </div>
    <div style={{ overflowX: 'hidden' }}>
      <div
        id="part-1"
        style={{
          width: '100%',
          minHeight: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
          
        }}
      >
        <h1>Lighthouse</h1>
      </div>
      <div
        id="part-2"
        style={{
          width: '100%',
          minHeight: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',

        }}
      >
        <h1>BTSolve</h1>
      </div>
      <div
        id="part-3"
        style={{
          width: '100%',
          minHeight: '100vh',
          textAlign: 'center',
          background: '#FFFBE9',
        }}
      >
        <h1>Rapid</h1>
      </div>
    </div>
  </>
);

export default NavAnchor;
