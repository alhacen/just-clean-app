import React from 'react';
import {Drawer, Icon, Typography} from 'antd';
import {Link, withRouter} from 'react-router-dom';

import {selectScreen} from 'helpers/screen.helper';
import {HOME_PATH} from 'constants/routes/main.paths.constant';
import HeaderPills from './headerPills';


const {Title} = Typography;

class HeaderPillsMobile extends React.Component {
    constructor(props) {
        super(props);

        this.state = {visible: false};
    }

    componentDidMount() {
        const {history} = this.props;
        window.addEventListener('hashchange', this.onClose);
        history.listen(() => {
            this.onClose();
        });
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.onClose);
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const toRender = selectScreen(true, true, false);
        const {visible} = this.state;

        if (!toRender) return null;

        return (
            <div>
                {/* eslint-disable-next-line max-len */}
                {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
                <div className='drawer-handel' onClick={this.showDrawer}>
                    <Icon type='down-circle'/>
                </div>
                <Drawer placement='top' closable={false} onClose={this.onClose} visible={visible}>
                    <div className='center-hv'>
                        <Link to={HOME_PATH}>
                            <Title level={4}>Just Clean Rojgar</Title>
                        </Link>
                    </div>
                    <HeaderPills mode='vertical' {...this.props} />
                </Drawer>
            </div>
        );
    }
}


export default withRouter(HeaderPillsMobile);
