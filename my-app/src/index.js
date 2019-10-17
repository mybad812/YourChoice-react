import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header, Image, Menu, Icon, Dropdown, Grid, List } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item position="left">SIGN IN: US</Menu.Item>
            <Menu.Item position="left">STORE LOCATOR</Menu.Item>
            <Menu.Item><Image width="500px" src="https://www.dsquared2.com/ytos/resources/DSQUARED/release2017/images/logo.svg"/></Menu.Item>
            <Dropdown item text="SEARCH">
              <Dropdown.Menu>
                <Dropdown.Item></Dropdown.Item>
                <Dropdown.Item></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>SIGH IN / REGiESTER</Menu.Item>
            <Dropdown item text="BAG">
              <Dropdown.Menu>
                <Dropdown.Item></Dropdown.Item>
                <Dropdown.Item></Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
    )
  }
}

class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="middlemenu">
          <Container centered>
            <Menu.Item> MEN </Menu.Item>
            <Menu.Item> WOMEN </Menu.Item>
            <Menu.Item> KIDS </Menu.Item>
            <Menu.Item> COLLECTIONS </Menu.Item>
            <Menu.Item> #D2LIFE </Menu.Item>
            <Menu.Item> RESORT SS20 </Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class Middle extends React.Component {
  render() {
    const gridStyle = { height: "500px" };
    return (
        <div className="murphys-background">
        </div>
    )
  }
}

class BottomMenu extends React.Component {
  render() {
    return (
        <div className="footer-background">
          <Grid container columns="three">
            <Grid.Column>
              CUSTOMER SERVICE
              <hr/>
              <List>
                <List.Item>Follow your order</List.Item>
                <List.Item>Track your exchange/return</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              SHIPPING
              <hr/>
              <List>
                <List.Item>Standard Shipping</List.Item>
                <List.Item>Express Shipping</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              Return
              <hr/>
              <List>
                <List.Item>Enter email address</List.Item>
                <List.Item>SUBSCRIBE TO OUR NEWSLETTER</List.Item>
              </List>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

class Murphys extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddleMenu/>
          <Middle/>
          <BottomMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));