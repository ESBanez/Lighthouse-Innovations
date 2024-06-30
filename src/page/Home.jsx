import DrawerAppBar from "./../components/DrawerAppBar";
import LandingPage from "./../components/LandingPage";
import { Anchor } from 'antd';

const { Link } = Anchor;



function Home() {
    return(
        <div>
            <DrawerAppBar/>
            <div
            style={{
                backgroundColor: 'transparent',
                padding: '20px',
            }}
            >
            <Anchor direction="horizontal">
                <Link key="part-1" href="#part-1" title="Lighthouse" />
                <Link key="part-2" href="#part-2" title="BTSolve" />
                <Link key="part-3" href="#part-3" title="Rapid" />
            </Anchor>
            </div>
            <LandingPage/>

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
        </div>
    )
}


export default Home;