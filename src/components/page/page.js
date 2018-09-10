import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { element, object } from 'prop-types'
import {Layout, Menu} from 'antd'
import routes from '../../utils/routes'

import './page.css'

const Content = Layout.Content
const Header = Layout.Header

/**
 * This is the page Layout component
 * @param {component} children - Children Content component
 */
export const Page = ({children, location}) => {
  const defaultRoute = routes.find(({path}) => path === location.pathname)
  return (
    <Layout>
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[defaultRoute.key]}
          style={{ lineHeight: '64px' }}
        >
          {
            routes.map(({key, label, path}) => (
              <Menu.Item key={key}>
                <Link to={path}>{label}</Link>
              </Menu.Item>
            ))
          }
        </Menu>
      </Header>
      <Content className='app-content'>
        {children}
      </Content>
    </Layout>
  )
}

Page.propTypes = {
  children: element,
  location: object
}

const PageContainer = withRouter(Page)

export default PageContainer
