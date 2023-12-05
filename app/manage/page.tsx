import Carousel from "antd/es/carousel";

const contentStyle: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (<Carousel autoplay>
        <div>
            <h3 style={contentStyle}>MVST Manage System</h3>
        </div>
        <div>
            <h3 style={contentStyle}>Powered by Next.js and Ant Design</h3>
        </div>
        <div>
            <h3 style={contentStyle}>API Backend by Clojure on JVM</h3>
        </div>
        <div>
            <h3 style={contentStyle}>Contact: mvst@chchma.com</h3>
        </div>
    </Carousel>);
}