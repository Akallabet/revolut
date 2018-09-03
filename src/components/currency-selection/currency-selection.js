import React from 'react'
import { array, string } from 'prop-types'
import {Button, Modal, List} from 'antd'
import './currency-selection.css'

class CurrencySelection extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: false
    }
  }

  openModal () { this.setState({open: true}) }
  closeModal () { this.setState({open: false}) }

  render () {
    return (
      <div>
        <Button
          onClick={this.openModal}
        >
          {this.props.currency}
        </Button>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.closeModal}
          onCancel={this.closeModal}
        >
          <List
            bordered
            dataSource={this.props.currencies}
            renderItem={({flag, code, balance}) => (
              <List.Item>{flag} {code} {balance}</List.Item>
            )}
          />
        </Modal>
      </div>
      // <Select

      //   className='currency-selection'
      //   dropdownClassName='currency-option'
      //   defaultValue={defaultValue}
      // >
      //   {
      //     currencies.map(({code, flag, balance}, i) => (
      //       <Option
      //         value={code}
      //         key={i}
      //       >
      //         <img src={flag}/>
      //         {code}
      //         {balance}
      //       </Option>
      //     ))
      //   }
      // </Select>
    )
  }
}

CurrencySelection.propTypes = {
  currencies: array.isRequired,
  currency: string.isRequired
}

export default CurrencySelection
