import React from 'react'
import { array, string, func } from 'prop-types'
import {Button, Modal, List, Icon} from 'antd'
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
  onSelection (code) {
    this.props.onCurrencySelection(code)
    this.closeModal()
  }

  render () {
    return (
      <div>
        <Button
          size={'large'}
          onClick={this.openModal.bind(this)}
        >
          {this.props.currency}
          <Icon type='caret-down' />
        </Button>
        <Modal
          title={null}
          closable={false}
          visible={this.state.open}
          onOk={this.closeModal.bind(this)}
          onCancel={this.closeModal.bind(this)}
          footer={null}
          centered
          bodyStyle={{
            padding: 0,
            width: '142px'
          }}
        >
          <List
            bordered
            className='currency-selection'
            dataSource={this.props.currencies}
            size='small'
            renderItem={({flag, code}) => (
              <List.Item>
                <Button onClick={() => this.onSelection(code)}>
                  <img src={flag}/> {code}
                </Button>
              </List.Item>
            )}
          />
        </Modal>
      </div>
    )
  }
}

CurrencySelection.propTypes = {
  currencies: array.isRequired,
  currency: string.isRequired,
  onCurrencySelection: func.isRequired
}

export default CurrencySelection
