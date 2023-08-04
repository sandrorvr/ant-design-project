import { Col, Row, Card } from 'antd';
import { Link } from "react-router-dom";

export const UserSections = () => {
    const { Meta } = Card;
    return (
        <section>
            <Row
                justify='space-around'
                style={{ marginTop: '2rem' }}
            >
                <Col span={4}>
                    <Link to='/create_user'>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                background: '#5910e0',
                            }}
                        >
                            <Meta
                                title={<h3 style={{ color: '#ffffff' }}>Create User</h3>}
                                description={<h5 style={{ color: '#ffffff' }}>Adicione um novo servidor</h5>} />
                        </Card>
                    </Link>
                </Col>
                <Col span={4}>
                    <Link to='/update_user'>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                background: '#5910e0',
                            }}
                        >
                            <Meta
                                title={<h3 style={{ color: '#ffffff' }}>Update Data</h3>}
                                description={<h5 style={{ color: '#ffffff' }}>Atualize os Dados</h5>} />
                        </Card>
                    </Link>
                </Col>
            </Row>
            <Row
                justify='space-around'
                style={{ marginTop: '5rem', marginBottom: '2rem' }}
            >
                <Col span={4}>
                    <Link to='/dayoff'>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                background: '#5910e0',
                            }}
                        >
                            <Meta
                                title={<h3 style={{ color: '#ffffff' }}>Day Off</h3>}
                                description={<h5 style={{ color: '#ffffff' }}>Controle de folgas</h5>} />
                        </Card>
                    </Link>
                </Col>
                <Col span={4}>
                    <Link to='/absence'>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                                background: '#5910e0',
                            }}
                        >
                            <Meta
                                title={<h3 style={{ color: '#ffffff' }}>Absence</h3>}
                                description={<h5 style={{ color: '#ffffff' }}>Controle de faltas</h5>} />
                        </Card>
                    </Link>
                </Col>
            </Row>
        </section>
    );
}