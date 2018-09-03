import React from 'react'
// export { default as Layout } from './layout'
const Layout = () => {}
Layout.Header = () => {}
Layout.Footer = () => {}
Layout.Content = () => {}

const InputNumber = () => {}

const Row = component => component
const Col = component => component

const antd = {
  Layout: Layout,
  InputNumber: InputNumber
}

// exports.InputNumber = InputNumber
// module.exports = Row
// module.exports = Col
// exports.Layout = Layout
module.exports = {
  // Layout: Layout,
  Row: Row,
  Col: Col
}
