import React, { Component, PropTypes } from 'react';
import { Button, Menu, Segment } from 'semantic-ui-react';
import { openWidget } from '../../../helpers';

class DashboardMenu extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const { getCloud } = this.props;
    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name='home'
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='images'
            active={activeItem === 'images'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Button
                inverted color='green'
                onClick={() => openWidget(getCloud)}
              >
                Upload Images Here
              </Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        <Segment>
          This is the home tab of Dashboard.
          This is an auth protected view.
        </Segment>

        <Segment>
          This is the images tab of Dashboard.
          Here Masha can view all the images in the database (Cloudinary).
        </Segment>
      </div>
    );
  }
}

DashboardMenu.propTypes = {
  getCloud: PropTypes.func.isRequired
};

export default DashboardMenu;
