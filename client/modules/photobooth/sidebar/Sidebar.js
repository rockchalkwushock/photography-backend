import React, { Component, PropTypes } from 'react';
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react';
import LibraryContainer from '../library/LibraryContainer';
import { openWidget } from '../../../utils';

class SideBar extends Component {
  state = { visible: true }

  render() {
    const { visible } = this.state;
    const { getCloudinaryData, translate } = this.props;
    return (
      <div className='sidebar'>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            width='thin'
            icon='labeled'
            visible={visible}
            vertical
            inverted
          >
            <Menu.Item name='upload'>
              <Icon
                name='cloud upload'
                onClick={() => openWidget(getCloudinaryData)}
              />
              {translate('upload')}
            </Menu.Item>
            <Menu.Item name='filter'>
              <Icon name='filter' />
              {translate('filter')}
            </Menu.Item>
            <Menu.Item name='chat'>
              <Icon name='chat' />
              {translate('chat')}
            </Menu.Item>
            <Menu.Item name='help'>
              <Icon name='help' />
              {translate('help')}
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <LibraryContainer />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

Sidebar.propTypes = {
  defaultVisible: PropTypes.bool,
  getCloudinaryData: PropTypes.func,
  translate: PropTypes.func,
  visible: PropTypes.bool
};

export default SideBar;
