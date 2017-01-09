import React, { Component, PropTypes } from 'react';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import Library from './Library';
import { openWidget } from '../../../helpers';

class SideBar extends Component {
  state = { visible: true }

  render() {
    const { visible } = this.state;
    const { getCloud, getDB, pics } = this.props;
    return (
      <div className='siderbar'>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            color={'blue'}
            width='thin'
            icon='labeled'
            visible={visible}
            vertical
            inverted
          >
            <Menu.Item name='upload'>
              <Icon
                name='cloud upload'
                onClick={() => openWidget(getCloud)}
              />
              Upload
            </Menu.Item>
            <Menu.Item name='filter'>
              <Icon name='filter' />
              Coming Soon: Filter!
            </Menu.Item>
            <Menu.Item name='chat'>
              <Icon name='chat' />
              Coming Soon: Chat!
            </Menu.Item>
            <Menu.Item name='help'>
              <Icon name='help' />
              Coming Soon: Help!
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Library getDB={getDB} pics={pics} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

Sidebar.propTypes = {
  defaultVisible: PropTypes.bool,
  getCloud: PropTypes.func,
  getDB: PropTypes.func,
  visible: PropTypes.bool
};

export default SideBar;
