import {Component} from 'react'

import {
  AppContainer,
  SubContainer,
  Heading,
  Container,
  Input,
  Button,
} from './StyledComponets'

class Home extends Component {
  state = {p: false}

  change = () => {
    this.setState(prev => ({p: !prev.p}))
  }

  render() {
    const {p} = this.state
    return (
      <AppContainer>
        <SubContainer>
          <Heading>Editable Text Input</Heading>
          <Container>
            <Input {p ? as="a" : as="input"} />
            <Button onClick={this.change}>{p ? 'Edit' : 'Save'}</Button>
          </Container>
        </SubContainer>
      </AppContainer>
    )
  }
}
export default Home
