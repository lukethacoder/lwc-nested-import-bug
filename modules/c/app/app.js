import { LightningElement } from 'lwc'
import { ExampleController } from 'c/chartUtils'

export default class App extends LightningElement {
  renderedCallback() {
    console.log('ExampleController ', ExampleController)
  }
}
